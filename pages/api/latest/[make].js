// pages/api/latest/[make].js
import { google } from 'googleapis';
const sheets = google.sheets('v4');

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Only GET requests allowed' });
    }

    try {
        const { make } = req.query;

        if (!make) {
            return res.status(400).json({ message: 'Missing make parameter' });
        }

        const scopes = ['https://www.googleapis.com/auth/spreadsheets'];
        const jwt = new google.auth.JWT(
            process.env.EMIRATES_CAR_CLIENT_EMAIL,
            null,
            process.env.EMIRATES_CAR_FORMS_PRIVATE_KEY.replace(/\\n/g, '\n'),
            scopes,
            null
        );

        // Read all sheet data
        const response = await sheets.spreadsheets.values.get({
            auth: jwt,
            spreadsheetId: process.env.EMIRATES_CAR_DATABASE_ID,
            range: 'emirates-car-sheet',
        });

        const rows = response.data.values;
        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: 'No data found' });
        }

        const headers = rows[0];
        const data = rows.slice(1).map(row => {
            const obj = {};
            headers.forEach((header, i) => {
                obj[header.trim()] = row[i] || '';
            });
            return obj;
        });

        // Filter by BRAND (case-insensitive)
        const filtered = data.filter(
            item =>
                item.BRAND &&
                item.BRAND.toLowerCase().trim() === make.toLowerCase().trim()
        );

        if (filtered.length === 0) {
            return res.status(404).json({ message: `No inquiries found for ${make}` });
        }

        // Get the latest one (last row in sheet)
        const latest = filtered[filtered.length - 1];

        return res.status(200).json(latest);
    } catch (error) {
        console.error('Error fetching sheet data:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

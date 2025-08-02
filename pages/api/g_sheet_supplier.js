import { google } from 'googleapis';
import nodemailer from 'nodemailer';

const sheets = google.sheets('v4');

async function handler(req, res) {
    if (req.method === 'POST') {
        const scopes = ['https://www.googleapis.com/auth/spreadsheets'];
        const jwt = new google.auth.JWT(
            process.env.EMIRATES_CAR_CLIENT_EMAIL,
            null,
            process.env.EMIRATES_CAR_FORMS_PRIVATE_KEY.replace(/\\n/g, '\n'),
            scopes,
            null,
        );

        const readData = await sheets.spreadsheets.values.get({
            auth: jwt,
            spreadsheetId: process.env.EMIRATES_CAR_DATABASE_ID,
            range: 'emirates-car-supplier',
        });

        const rowCount = readData.data.values?.length || 0;
        const year = new Date().getFullYear().toString().slice(2);
        const RefNo = `${year}SUP${String(rowCount + 1).padStart(4, '0')}`;
        const Timestamp = req.body.Timestamp;
        const garageName = req.body.garageName;
        const tradeLicense = req.body.tradeLicense;
        const licenseExpiry = req.body.licenseExpiry;
        const establishmentYear = req.body.establishmentYear;
        const emirate = req.body.emirate;
        const address = req.body.address;
        const website = req.body.website;
        const contactName = req.body.contactName;
        const designation = req.body.designation;
        const phone = req.body.phone;
        const whatsapp = req.body.whatsapp;
        const email = req.body.email;
        const altEmail = req.body.altEmail;
        const parts = req.body.parts;
        const brands = req.body.brands;
        const conditions = req.body.conditions;
        const delivery = req.body.delivery;
        const locations = req.body.locations;
        const returnPolicy = req.body.returnPolicy;

        const description = `Ref: ${RefNo}\nGarage: ${garageName}\nParts: ${parts}\nBrands: ${brands.join(', ')}\nConditions: ${conditions.join(', ')}\nDelivery: ${delivery.join(', ')}\nLocations: ${locations.join(', ')}\nReturn Policy: ${returnPolicy}`;
        const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsapp}&text=${encodeURIComponent(description)}`;

        // Telegram Notification
        await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_SUP_BOT}/sendMessage?chat_id=${process.env.TELEGRAM_SUP_ID}&text=${encodeURIComponent(description + '\n\n' + whatsappLink)}`);

        // Google Sheet Append
        const response = await sheets.spreadsheets.values.append({
            auth: jwt,
            spreadsheetId: process.env.EMIRATES_CAR_DATABASE_ID,
            range: `emirates-car-supplier`,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [
                        Timestamp,
                        RefNo,
                        garageName,
                        tradeLicense,
                        licenseExpiry,
                        establishmentYear,
                        emirate,
                        address,
                        website,
                        contactName,
                        designation,
                        phone,
                        whatsapp,
                        email,
                        altEmail,
                        parts,
                        brands.join(', '),
                        conditions.join(', '),
                        delivery.join(', '),
                        locations.join(', '),
                        returnPolicy
                    ],
                ],
            },
        });
        const data = JSON.stringify(response);

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'emiratesautomobileparts@gmail.com',
                pass: process.env.PASSKEY,
            },
        });

        await transporter.sendMail({
            from: 'emiratesautomobileparts@gmail.com',
            to: 'haksinterlance@gmail.com',
            subject: `New Supplier: ${garageName} (${emirate})`,
            text: `${description}\n\nWhatsApp: ${whatsappLink}`,
        });

        res.status(201).json(data);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
export default handler;

import { google } from 'googleapis';
import nodemailer from 'nodemailer';

const sheets = google.sheets('v4');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

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
    console.log("ref no", RefNo)

    const {
        Timestamp,
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
        brands,
        conditions,
        delivery,
        locations,
        returnPolicy,
    } = req.body;

    const description = `Ref: ${RefNo}\nGarage: ${garageName}\nParts: ${parts}\nBrands: ${brands.join(', ')}\nConditions: ${conditions.join(', ')}\nDelivery: ${delivery.join(', ')}\nLocations: ${locations.join(', ')}\nReturn Policy: ${returnPolicy}`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsapp}&text=${encodeURIComponent(description)}`;

    // Telegram Notification
    //await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${encodeURIComponent(description + '\n\n' + whatsappLink)}`);

    // Google Sheet Append
    await sheets.spreadsheets.values.append({
        auth: jwt,
        spreadsheetId: sheetId,
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
                    brands,
                    conditions,
                    delivery,
                    locations,
                    returnPolicy
                ],
            ],
        },
    });

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'emiratesautomobileparts@gmail.com',
            pass: process.env.PASSKEY,
        },
    });

    //await transporter.sendMail({
    //   from: 'emiratesautomobileparts@gmail.com',
    //   to: 'haksinterlance@gmail.com',
    //    subject: `New Supplier: ${garageName} (${emirate})`,
    //    text: `${description}\n\nWhatsApp: ${whatsappLink}`,
    //});

    return res.status(201).json({ message: 'Supplier submitted', ref: RefNo });
}

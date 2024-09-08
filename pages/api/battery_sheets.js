import { google } from "googleapis";
const sheets = google.sheets("v4");
import nodemailer from "nodemailer";

async function handler(req, res) {
  if (req.method === "POST") {
    const Timestamp = req.body.Timestamp;
    const name = req.body.name;
    const make = req.body.brand;
    const model = req.body.model;
    const area = req.body.area;
    const contact = req.body.contact;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "it.hakstime@gmail.com",
        pass: process.env.PASS,
      },
    });

    var details = "Customer Name : " + name + "\n" + "Brand : " + make + "\n" + "Model : " + model + "\n" + "Area : " + area;
    var detailEncode = encodeURI(details);

    try {
      const emailRes = await transporter.sendMail({
        from: ["haksinterlance@gmail.com","it.haksinterlance@gmail.com"],
        to: "haksinterlance@gmail.com",
        subject: `Emirates-car.com - Battery Inquiry Received`,
        html: `<div><h6>Hi Auto spare parts response received for</h6>
        <p>Customer Name: ${name}</p>
        <p>Brand: ${make}</p>
        <p>Model: ${model}</p>
        <p>Area: ${area}</p>
        <p>WhatsApp Link: https://api.whatsapp.com/send?phone=${contact}&text=${detailEncode}%0AWe%20received%20your%20enquiry%20for%20car%20battery%20for%20above%20vehicle</p>
        </div>`,
      });
      console.log(`Message sent`, emailRes.messageId);
    } catch (err) {
      console.log(err);
    }

    const scopes = ["https://www.googleapis.com/auth/spreadsheets"];
    const jwt = new google.auth.JWT(
      "emirates-car-battery@emirates-car-sheet-340905.iam.gserviceaccount.com",
      null,
      process.env.EMIRATES_BATTERY_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes,
      null
    );

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: "1txIGYj1-zO474nXZtrNFLyT0LodXgy7m51GdUdBBXNk",
      range: "battery_res",
      valueInputOption: "USER_ENTERED",
      auth: jwt,
      requestBody: {
        values: [[Timestamp, name, make, model, area, contact]],
      },
    });
    const data = JSON.stringify(response);

    res.status(201).json(data);
  } else {
    res.status(200).json({ message: "error" });
  }
}

export default handler;

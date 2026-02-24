import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

export const saveToGoogleSheet = async (data) => {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "Sheet1!A:F",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [
        [data.name, data.phone, data.service, data.date, data.time, data.message],
      ],
    },
  });
};




// import { google } from "googleapis";

// const auth = new google.auth.GoogleAuth({
//   keyFile: "credentials.json",   // downloaded JSON
//   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
// });

// const SPREADSHEET_ID = "1nEttfRok0b3_MRFJBksYr3jGFQWpb-jJwIKFZNmDGFk";

// export const saveToGoogleSheet = async (data) => {
//   const client = await auth.getClient();
//   const sheets = google.sheets({ version: "v4", auth: client });

//   await sheets.spreadsheets.values.append({
//     spreadsheetId: SPREADSHEET_ID,
//     range: "Sheet1!A:F",
//     valueInputOption: "USER_ENTERED",
//     resource: {
//       values: [
//         [
//           data.name,
//           data.phone,
//           data.service,
//           data.date,
//           data.time,
//           data.message,
//         ],
//       ],
//     },
//   });
// };
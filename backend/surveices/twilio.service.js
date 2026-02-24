import twilio from "twilio";
import dotenv from "dotenv";
import https from "https";
dotenv.config();

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const makeCall = async (phone) => {
  const call = await client.calls.create({
    url: "https://thiocyanic-rosendo-wuthering.ngrok-free.dev/twilio/voice", 
    to: phone,
    from: process.env.TWILIO_PHONE,
  });

  return call;
};
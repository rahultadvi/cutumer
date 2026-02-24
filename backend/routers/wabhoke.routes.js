import express from "express";
import twilio from "twilio";

const router = express.Router();

router.post("/voice", (req, res) => {
  const VoiceResponse = twilio.twiml.VoiceResponse;
  const twiml = new VoiceResponse();

  twiml.say("Hello Rahul salon booking confirmed.");

  res.type("text/xml");
  res.send(twiml.toString());
});

export default router;
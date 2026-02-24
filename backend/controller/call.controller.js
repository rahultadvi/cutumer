import { makeCall } from "../surveices/twilio.service.js";

export const callCustomer = async (req, res) => {
  try {
    const { phone } = req.body;

    const call = await makeCall(phone);

    res.json(call);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
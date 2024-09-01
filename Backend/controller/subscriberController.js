
import { Subscriber } from "../models/subscriberSchema.js";

export const subscribeUser = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const existingSubscriber = await Subscriber.findOne({ email });

    if (existingSubscriber) {
      return res.status(400).json({
        success: false,
        message: "This email is already subscribed",
      });
    }

    await Subscriber.create({ email });

    res.status(201).json({
      success: true,
      message: "Subscribed successfully!",
    });
  } catch (error) {
    console.error("Server Error:", error);

    res.status(500).json({
      success: false,
      message: "An error occurred while subscribing",
    });
  }
};

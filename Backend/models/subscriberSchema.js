
import mongoose from "mongoose";
import validator from "validator";

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: [validator.isEmail, "Please provide a valid email address"],
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Subscriber = mongoose.model("Subscriber", subscriberSchema);

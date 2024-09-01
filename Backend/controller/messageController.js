import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res) => {
    
    try {
        
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }
        
        await Message.create({ name, email, subject, message });
        
        res.status(200).json({
            success: true,
            message: "Message sent successfully!",
        
        });
       
    } catch (error) {
        if (error.name === "ValidationError") {
            const errorMessage = Object.values(error.errors)
                .map(err => err.message)
                .join(" ");
            
            return res.status(400).json({
                success: false,
                message: errorMessage,
            });
        }

        console.error("Server Error:", error); 

        return res.status(500).json({
            success: false,
            message: "Unknown Error",
        });
    }
};

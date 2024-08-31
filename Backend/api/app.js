import express from 'express';
import { dbConnection } from '../database/dbConnection.js'; // Adjust path as needed
import messageRouter from '../router/messageRouter.js'; // Adjust path as needed
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL || '*', // Use environment variable for origin
    methods: ['POST'],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/message', messageRouter);

dbConnection();


export default app;

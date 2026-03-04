import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

// Health check to verify server is running
app.get('/', (req, res) => {
    res.json({ message: 'Arbor Bay CarWash API is running.' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

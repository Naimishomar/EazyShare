import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db/connectDb.js';
import contentRoute from './routes/content.route.js'
dotenv.config();
import cors from 'cors';
const app = express();
const PORT = process.env.PORT;

app.use(cors({origin: "*"}));
app.use(express.json());
app.use('/', contentRoute)

app.listen(PORT,()=>{
    console.log(`Server is running successfully on PORT ${PORT}✅`);
    connectDb();
})
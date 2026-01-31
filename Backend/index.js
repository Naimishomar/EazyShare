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

app.get('/', (req, res) => {
    res.send('Server running!💖');
});

const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT} ✅`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
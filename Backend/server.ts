import express, { Request, Response } from 'express';
import path from 'path';
import { connection } from './src/config/database.js';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './src/routes/router.js'
import cookieParser from 'cookie-parser';
const app = express();
dotenv.config()

// database connection
connection();

const corsOptions = {
  origin: 'http://localhost:3000', 
  optionsSuccessStatus: 200,
  credentials: true
};

app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/user',router)

app.get('/api/data', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the server!' });
});

// app.get('*', (req: Request, res: Response) => {
//   res.end('hello');
// });


const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server listening on ${port}`);
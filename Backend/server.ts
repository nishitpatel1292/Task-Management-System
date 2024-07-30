import express, { Request, Response } from 'express';
import path from 'path';
// import cors from 'cors';

const app = express();


// app.use(cors());

app.get('/api/data', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the server!' });
});

app.get('*', (req: Request, res: Response) => {
  res.end('hello');
});


const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server listening on ${port}`);
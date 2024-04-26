import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { authRouter } from './src/routes/auth.routes.js';
import { userRouter } from './src/routes/user.routes.js';
import { errorMiddleware } from './src/middlewares/errorMiddleware.js';

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.CLIENT_HOST,
  credentials: true,
}));

app.use(authRouter);
app.use(userRouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log('Server is running')
});

import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

//application routes
app.use('/api', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  const a = 5;
  res.send('Hello World!');
  res.send(a);
});

export default app;

import express from 'express';
import { calculator, Operation } from './calculator';

const app = express();
app.use(express.json());
const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post('/calculate', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op } = req.body;

  if (!value1 || isNaN(Number(value1))) {
    return res.status(400).send({ error: '...' });
  }
  // validate the data here

  // assert the type
  const result = calculator(Number(value1), Number(value2), op as Operation);
  return res.send({ result });
});

app.get('/ping', (_req, res) => {
  res.send('pong');
});

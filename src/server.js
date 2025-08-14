import express from 'express';
import cors from 'cors';
import { compliments, getRandomCompliment } from './compliments.js';

const app = express();
const PORT = process.env.PORT || 8080; // default changed to 8080

app.use(cors());

// Root now returns a single random compliment (mixed languages) as plain text
app.get('/', (req, res) => {
  res.type('text/plain').send(getRandomCompliment());
});

app.get('/random', (req, res) => {
  const { lang } = req.query;
  res.send({ compliment: getRandomCompliment(lang) });
});

app.get('/all', (req, res) => {
  res.send({ count: compliments.length, compliments });
});

app.listen(PORT, () => {
  console.log(`Compliment API listening on port ${PORT}`);
});

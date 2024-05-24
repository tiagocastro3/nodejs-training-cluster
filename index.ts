import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT ?? 8081;

app.listen(port, () => {
  console.log(`listening on port port ${port}`);
});
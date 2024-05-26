import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  const users = [
    {
      name: 'Tiago',
    },
    {
      name: 'Castro'
    }
  ]
  res.send(users);
});

const port = process.env.PORT ?? 80;

app.listen(port, () => {
  console.log(`listening on port port ${port}`);
});
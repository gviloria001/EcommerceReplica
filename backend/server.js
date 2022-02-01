import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';
import config from './config.js';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true
}).catch(error => console.log(error.reason));
const app = express();


app.use("/api/users/", userRouter)
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Does not exist' });
  }
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/', (req, res) => {
  res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
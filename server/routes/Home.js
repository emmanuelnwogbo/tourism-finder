import express from 'express';

const Home = express.Router();

Home.get('/', (req, res) => {
  res.send('hello world from home');
});

export default Home;
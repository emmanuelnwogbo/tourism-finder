import express from 'express';
import bodyParser from 'body-parser';

import router from './routes';
import mongoose from './db';
const { 
  Home,
  forms 
} = router;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/', Home);
app.use('/forms', forms);

app.listen(3000, function () {
  console.log('listening on port 3000');
})
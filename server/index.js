import express from 'express';
import bodyParser from 'body-parser';

import router from './routes';
const { 
  Home 
} = router;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/', Home);

app.listen(3000, function () {
  console.log('listening on port 3000');
})
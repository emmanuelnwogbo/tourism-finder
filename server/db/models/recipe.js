import mongoose from '../index';
import jwt from 'jsonwebtoken';
import validator from 'validator';

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: false,   
  },
  photos: [Buffer]
})

const Item = mongoose.model('Item', ItemSchema);
export default Item;
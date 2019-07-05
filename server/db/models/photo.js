import mongoose from '../index';

const PhotoSchema = new mongoose.Schema({
  originalname: {
    type: String,
    required: true,
    trim: true
  },
  encoding: {
    type: String,
    required: true,
    trim: true
  },
  mimetype: {
    type: String,
    required: true,
    trim: true
  },
  buffer: {
    type: Buffer,
    required: true
  }
})

const Photo = mongoose.model('Photo', PhotoSchema);
export default Photo;
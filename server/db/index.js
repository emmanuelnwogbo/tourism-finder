import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://emmanuel:abc1234@ds247377.mlab.com:47377/sandbox")
export default mongoose;
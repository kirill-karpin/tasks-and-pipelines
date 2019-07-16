import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  token: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

export default User;

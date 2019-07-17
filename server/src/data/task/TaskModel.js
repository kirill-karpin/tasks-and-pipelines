import mongoose, { ObjectId } from 'mongoose';

export const taskSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  averageTime: {
    type: Number,
  },
  userCreate: {
    type: ObjectId,
  },
  userUpdate: {
    type: ObjectId,
  },
});

const Task = mongoose.model('Task', taskSchema);


export default Task;

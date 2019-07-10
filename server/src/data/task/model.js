import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  name: {
    type: String,
  },
  averageTime: {
    type: Number,
  },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;

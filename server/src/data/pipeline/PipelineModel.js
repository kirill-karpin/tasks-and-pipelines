import mongoose, { ObjectId } from 'mongoose';
import { taskSchema } from '../task/TaskModel';


const pipelineSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  tasks: {
    type: [taskSchema],
  },
  avgTime: {
    type: Number,
  },
  userCreate: {
    type: ObjectId,
  },
  userUpdate: {
    type: ObjectId,
  },
  isRun: {
    type: Boolean,
  },
  runAt: {
    type: { type: Date, default: null },
  },
}, { minimize: false });


const Pipeline = mongoose.model('Pipeline', pipelineSchema);

export default Pipeline;

import mongoose, { ObjectId } from 'mongoose';
import { taskSchema } from '../task/TaskModel';


const pipelineSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  tasks: {
    type: [taskSchema],
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
  isRun: {
    type: { Boolean, default: false },
  },
  createAt: {
    type: { type: Date, default: Date.now },
  },
  pipelineRunTime: {
    type: { type: Date, default: null },
  },
}, { minimize: false, id: true });


const Pipeline = mongoose.model('Pipeline', pipelineSchema);

export default Pipeline;

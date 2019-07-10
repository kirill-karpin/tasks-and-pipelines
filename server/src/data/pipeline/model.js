import mongoose from 'mongoose';
import Task from '../task/model';


const pipelineSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  tasks: {
    type: Array[Task],
  },
  averageTime: {
    type: Number,
  },
});

const Pipeline = mongoose.model('Pipeline', pipelineSchema);

export default Pipeline;

import mongoose from 'mongoose';
import TaskRepository from './task/TaskRepository';
import PipelineRepository from './pipeline/PipelineRepository';
import UserRepository from './user/UserRepository';


mongoose.connect('mongodb://localhost:27017/app-db', { useNewUrlParser: true })
  .then(() => {
  });

export default {
  'task-repository': TaskRepository,
  'pipeline-repository': PipelineRepository,
  'user-repository': UserRepository,
};

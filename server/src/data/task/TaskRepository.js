import Task from './TaskModel';
import BaseRepository from '../BaseRepository';

class TaskRepository extends BaseRepository {
}

const repository = new TaskRepository(Task);
export default repository;

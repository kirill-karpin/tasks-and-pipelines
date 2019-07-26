import EventEmitter from 'events';
import ScheduleTask from './ScheduleTask';
import ScheduleResult from './ScheduleResult';

export const EVENT_TASK_COMPLETE = 'schedule-task-complete';

export default class ScheduleManager extends EventEmitter {
  constructor() {
    super();
    this.pool = new Map();
    this.on(EVENT_TASK_COMPLETE, (id) => {
      this.deleteTask(id);
    });
  }

  addTask(params) {
    const task = new ScheduleTask(params);
    const result = new ScheduleResult();
    try {
      if (!this.pool.has(task.id)) {
        task.emit = this.emitComplete.bind(this);
        this.pool.set(task.id, task);
        task.exec();
      } else {
        throw new Error('Task is added to pool');
      }
    } catch (e) {
      result.addError(e);
    }

    return result;
  }

  deleteTask(id) {
    if (this.pool.has(id)) {
      this.pool.delete(id);
    }
  }

  emitComplete(data) {
    this.deleteTask(data.id);
    this.emit(EVENT_TASK_COMPLETE, data);
  }
}

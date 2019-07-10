import Task from './model';

export default {
  save(data) {
    const task = new Task({ name: 'test', averageTime: 1111 });
    return task.save();
  },

  async getById(id) {
    return Task.findOne({ _id: id });
  },
  getList() {
    return Task.find({});
  },
};

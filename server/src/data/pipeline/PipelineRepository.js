import Pipeline from './PipelineModel';
import BaseRepository from '../BaseRepository';

class PipelineRepository extends BaseRepository {
  async create(data) {
    let averageTime = 0.0;
    const pipeline = data;
    data.tasks.forEach((v) => {
      averageTime += parseFloat(v.averageTime);
    });
    pipeline.averageTime = averageTime;
    pipeline.isRun = false;

    return super.create(pipeline);
  }

  async run(id) {
    return this.update(id, { isRun: true });
  }

  async update(id, params) {
    return super.update({ _id: id }, params);
  }
}

const repository = new PipelineRepository(Pipeline);
export default repository;

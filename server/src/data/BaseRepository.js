import RepositoryResult from './RepositoryResult';

export default class BaseRepository {
  constructor(entity) {
    this.entity = entity;
  }

  getEntity() {
    return this.entity;
  }

  async get(params) {
    const result = new RepositoryResult();
    try {
      result.data = await this.getEntity().find(params);
    } catch (e) {
      result.setError(e);
    }
    return result;
  }

  async delete(params) {
    const result = new RepositoryResult();
    try {
      result.data = await this.entity.remove(params);
    } catch (e) {
      result.setError(e);
    }
    return result;
  }

  async create(params) {
    const result = new RepositoryResult();
    try {
      const Model = this.entity;
      const item = new Model(params);
      result.data = await item.save();
    } catch (e) {
      result.setError(e);
    }
    return result;
  }

  save(params) {
    this.entity.save(params);
  }

  update(params) {
    this.entity.update(params);
  }
}

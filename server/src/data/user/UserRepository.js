import User from './UserModel';
import BaseRepository from '../BaseRepository';

class UserRepository extends BaseRepository {
  async isExistUser(id) {
    const result = await super.get({ _id: id });
    return (result.count() === 1);
  }
}

const repository = new UserRepository(User);
export default repository;

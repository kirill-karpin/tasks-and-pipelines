import User from './UserModel';
import BaseRepository from '../BaseRepository';

class UserRepository extends BaseRepository {
}

const repository = new UserRepository(User);
export default repository;

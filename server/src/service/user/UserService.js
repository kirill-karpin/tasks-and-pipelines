export default class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getUserByToken(token) {
    return this.userRepository.get({ token });
  }

  async listUsers() {
    return this.userRepository.get();
  }
}

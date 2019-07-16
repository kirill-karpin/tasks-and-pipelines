export default class WorkspaceService {
  /**
   * @param  {PipelineRepository} pipelineRepository *
   * @param  {TaskRepository} taskRepository *
   * @param  {UserRepository} userRepository *
   */
  constructor(pipelineRepository, taskRepository, userRepository) {
    this.pipelineRepository = pipelineRepository;
    this.taskRepository = taskRepository;
    this.userRepository = userRepository;
  }

  /**
   * @param {Object} params
   */
  createPipeline(params) {

  }

  /**
   * @param {Object} params
   */
  createTask(params) {
  }
}

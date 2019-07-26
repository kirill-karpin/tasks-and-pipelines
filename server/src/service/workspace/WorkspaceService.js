export default class WorkspaceService {
  /**
   * @param  {PipelineRepository} pipelineRepository *
   * @param  {TaskRepository} taskRepository *
   * @param  {UserRepository} userRepository *
   * @param  {ScheduleManager} schedule *
   * @param  {workers}  workers *
   */
  constructor(pipelineRepository, taskRepository, userRepository, schedule, workers) {
    this.pipelineRepository = pipelineRepository;
    this.taskRepository = taskRepository;
    this.userRepository = userRepository;
    this.schedule = schedule;
    this.workers = workers;
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

  async runPipeline(params) {
    const data = params;
    const { id, userId } = data;
    console.log('run pipeline', userId);
    const result = {
      success: true,
    };

    try {
      const isExist = await this.userRepository.isExistUser(userId);
      if (isExist) {
        console.log('start add pipeline', this.workers);
        const { pipelineWorker } = this.workers;

        const pipelineTask = {
          id,
          before: async () => {
            const startTime = new Date();
            const checkResult = await this.pipelineRepository.update(id, {
              isRun: true,
              pipelineRunTime: startTime,
              pipelineUserRun: userId,
            });
            console.log('run before', id, checkResult);
            return result;
          },
          run: async () => pipelineWorker(data),
          after: async () => {
            console.log('run after');
            const endTime = new Date();
            await this.pipelineRepository.update(id, {
              isRun: false,
              pipelineFinishTime: endTime,
            });
          },
        };
        const scheduleResult = this.schedule.addTask(pipelineTask);
        if (!scheduleResult.success) {
          throw new Error(scheduleResult.error);
        }
      } else {
        throw new Error('User not exist for run pipeline');
      }
    } catch (e) {
      console.log('error', e.message);
      result.error = e.message;
      result.success = false;
    }

    return result;
  }
}

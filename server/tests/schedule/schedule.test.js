import ScheduleManager from '../../src/schedule/ScheduleManager';


describe('check schedule', () => {

  test('init schedule', () => {
    const schedule = new ScheduleManager();
    expect(schedule).toBeInstanceOf(ScheduleManager);
  });

  test('add schedule task success', () => {
    const schedule = new ScheduleManager();
    let pipeline = {
      id: 1,
      before: async () => {
        return true;
      },
      run: async () => {
        return true;
      },
      after: async () => {
        return true;
      },
    };
    const result = schedule.addTask(pipeline);
    expect(result.success).toBe(true);
  });

  test('add schedule double task', () => {
    const schedule = new ScheduleManager();
    let pipeline = {
      id: 1,
      before: async () => {
        return true;
      },
      run: async () => {
        return true;
      },
      after: async () => {
        return true;
      },
    };


    let result1 = schedule.addTask(pipeline);
    expect(result1.success).toBe(true);

    let result2 = schedule.addTask(pipeline);
    expect(result2.success).toBe(false);
  });

  test('complete task event', (done) => {

    async function pipelineTimer(time) {
      return new Promise((resolve, reject) => {
        try {
          setTimeout(() => {
            resolve();
          }, time);
        } catch (e) {
          reject();
        }
      });
    }

    const schedule = new ScheduleManager();
    const pipeline = {
      id: 1,
      run: async () => {
        return pipelineTimer(1000);
      },

    };

    schedule.on('schedule-task-complete', (data) => {
      expect(data.id).not.toBeNull();
      done();
    });

    const result = schedule.addTask(pipeline);
    expect(result.success).toBe(true);
  });
});

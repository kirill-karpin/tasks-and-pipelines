import dataRepository from './data';
import WorkspaceService from './service/workspace/WorkspaceService';
import Container from './container';
import UserService from './service/user/UserService';
import schedule from './schedule';
import workers from './workers';

const container = new Container();
container.addServices(dataRepository);
container.add('schedule', schedule);
container.add('workers', workers);
container.add('workspace-service', c => new WorkspaceService(c.find('pipeline-repository'),
  c.find('task-repository'),
  c.find('user-repository'),
  c.find('schedule'),
  c.find('workers')));

container.add('user-service', c => new UserService(c.find('user-repository')));


export default container;

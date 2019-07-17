import dataRepository from './data';
import WorkspaceService from './service/workspace/WorkspaceService';
import Container from './container';
import UserService from './service/user/UserService';


const container = new Container();
container.addServices(dataRepository);
container.add('workspace-service', c => new WorkspaceService(c.find('pipeline-repository'), c.find('task-repository'), c.find('user-repository')));
container.add('user-service', c => new UserService(c.find('user-repository')));


export default container;

import dataRepository from './data';
import WorkspaceService from './service/workspace/WorkspaceService';
import Container from './container';


const container = new Container();
container.addServices(dataRepository);
container.add('workspace-service', c => new WorkspaceService(c.get('pipeline-repository'), c.get('task-repository'), c.get('user-repository')));

export default container;

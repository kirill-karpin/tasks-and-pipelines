import express from 'express';
import tasks from './tasks';
import pipelines from './pipelines';
import container from '../../config';

const router = express.Router();
const userService = container.find('user-service');

router.use('/tasks', tasks);
router.use('/pipelines', pipelines);

router.get('/', async (req, res) => {
  const users = await userService.listUsers();
  res.send({ users: users.data, user: req.userContext });
});


module.exports = router;

import log4js from 'log4js';
import express from 'express';
import multer from 'multer';
import container from '../../config';

const router = express.Router();
const upload = multer();
/**
 * @param {TaskRepository} taskRepository
 * */
const taskRepository = container.find('task-repository');
const logger = log4js.getLogger();
logger.level = 'debug';

/* GET tasks listing. */
router.get('/', async (req, res) => {
  const task = await taskRepository.get({});
  res.send(task.data);
});

/* GET task data by id. */
router.get('/:id/', async (req, res) => {
  const task = await taskRepository.get({ _id: req.params.id });
  res.send(task.data);
});

/* DELETE tasks delete. */
router.delete('/:id/', async (req, res) => {
  const task = await taskRepository.delete({ _id: req.params.id });
  res.send(task.data);
});

/* POST tasks creating. */
router.post('/', upload.none(), async (req, res) => {
  const task = await taskRepository.create(req.body);
  logger.debug(task);
  res.send(task);
});

/* PUT tasks overwrite. */
router.put('/', (req, res) => {
  const task = taskRepository.myMethod();
  res.send(task);
});

/* PATCH tasks merge. */
router.patch('/', (req, res) => {
  const task = taskRepository.myMethod();
  res.send(task);
});

module.exports = router;

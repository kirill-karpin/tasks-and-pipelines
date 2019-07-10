import express from 'express';
import taskRepository from '../../data/task/repository';

const router = express.Router();

/* POST tasks listing. */
router.get('/', async (req, res) => {
  const task = await taskRepository.getList();
  res.send(task);
});

/* GET task data by id. */
router.get('/:id/', async (req, res) => {
  const task = await taskRepository.getById(req.params.id);
  res.send(task);
});

/* POST tasks creating. */
router.post('/', (req, res) => {
  const task = taskRepository.save();
  res.send(task);
});

module.exports = router;

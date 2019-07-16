import express from 'express';
import container from '../../config';

const router = express.Router();
const pipelineRepository = container.find('pipeline-repository');

/* POST tasks listing. */
router.get('/', async (req, res) => {
  const task = await pipelineRepository.get({});
  res.send(task.data);
});

/* GET task data by id. */
router.get('/:id/', async (req, res) => {
  const task = await pipelineRepository.get({ _id: req.params.id });
  res.send(task);
});

/* POST tasks creating. */
router.post('/', (req, res) => {
  const task = pipelineRepository.save();
  res.send(task);
});

module.exports = router;

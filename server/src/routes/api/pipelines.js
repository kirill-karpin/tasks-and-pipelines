import express from 'express';
import log4js from 'log4js';
import multer from 'multer';
import container from '../../config';

const logger = log4js.getLogger();
logger.level = 'debug';
const upload = multer();

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
router.post('/', upload.none(), async (req, res) => {
  const pipeline = await pipelineRepository.create(req.body);
  res.send(pipeline);
});

module.exports = router;

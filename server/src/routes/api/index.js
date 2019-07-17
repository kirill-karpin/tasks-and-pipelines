import express from 'express';
import tasks from './tasks';
import pipelines from './pipelines';

const router = express.Router();

router.use('/tasks', tasks);
router.use('/pipelines', pipelines);

router.get('/', async (req, res) => {
  res.send({ version: 0.1 });
});


module.exports = router;

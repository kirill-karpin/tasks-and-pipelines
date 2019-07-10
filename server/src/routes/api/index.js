import express from 'express';
import task from './task';

const router = express.Router();

router.use('/task', task);

router.get('/', async (req, res) => {
  res.send({ version: 0.1 });
});


module.exports = router;

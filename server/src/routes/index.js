import express from 'express';
import apiRouter from './api';
import container from '../config';

const router = express.Router();
const userService = container.find('user-service');

/** simple auth */
router.use('/api/', async (req, res, next) => {
  const user = await userService.getUserByToken(req.cookies.TOKEN);
  if (user.isSuccess()) {
    if (user.data.length === 1) {
      req.userContext = user.data;
      next();
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(500);
  }
}, apiRouter);

/* GET home page. */
router.get('/', (req, res) => {
  res.send({ title: 'hello' });
});

module.exports = router;

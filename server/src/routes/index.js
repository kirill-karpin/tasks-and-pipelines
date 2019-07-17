import express from 'express';
import apiRouter from './api';
import container from '../config';

const router = express.Router();
const userService = container.find('user-service');

/** simple auth */
router.use('/api/', async (req, res, next) => {
  req.userContext = null;
  let token;
  if (req.headers.authorization) {
    [, token] = req.headers.authorization.split(' ');
  }

  if (token) {
    const user = await userService.getUserByToken(token);
    if (user.isSuccess()) {
      if (user.data.length === 1) {
        req.userContext = user.data.pop();
        next();
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(500);
    }
  } else if (req.originalUrl === '/api/') {
    next();
  }
}, apiRouter);

/* GET home page. */
router.get('/', async (req, res) => {
  res.send({ index: 'hello world' });
});

module.exports = router;

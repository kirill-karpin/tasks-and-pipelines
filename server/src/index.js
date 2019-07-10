import express from 'express';
import morgan from 'morgan';
import createError from 'http-errors';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';
import apiRouter from './routes/api';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('port', '3000');
app.use(morgan('dev'));

app.listen(app.get('port'), () => {
  global.console.log(`[OK] Server is running on http:localhost:${app.get('port')}`);

  mongoose.connect('mongodb://localhost:27017/app-db', { useNewUrlParser: true })
    .then(() => {
      console.log('[OK] DB is running');
    });
});
app.use('/', indexRouter);
app.use('/api/', apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});
// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

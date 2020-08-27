import express from 'express';
import path from 'path';
import { TeacherList, HTMLCourses, CSSCourses, JSCourses, Topics } from './data.js';

const app = express();

app.use(express.static('dist'));

// localhost:4000/courses/html
app.get('/api/courses/:topic', (req, res) => {
  const { topic } = req.params;
  const courses =
    {
      html: HTMLCourses,
      css: CSSCourses,
      javascript: JSCourses,
    }[topic] || [];
  res.send({ courses });
});

app.get('/api/teachers', (_, res) => res.send({ teachers: TeacherList }));

// localhost:4000/teacher/teach-1
app.get('/api/teacher/:id', (req, res) => {
  const { id } = req.params;
  const teacher = TeacherList.find(teacher => id === teacher.id);
  res.send({ teacher });
});

app.get('/api/topics', (_, res) => res.send({ topics: Topics }));

app.get('/api/health-check', (_, res) => res.send({ ping: 'pong' }));

app.get('*', (_, res) => res.sendFile(path.join(path.resolve(), './dist', 'index.html')));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));

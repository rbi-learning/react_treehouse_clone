import express from 'express';
import { TeacherList, HTMLCourses, CSSCourses, JSCourses, Topics } from './data.js';

const app = express();

app.get('/courses/:topic', (req, res) => {
  const { topic } = req.params;
  const courses =
    {
      html: HTMLCourses,
      css: CSSCourses,
      javascript: JSCourses,
    }[topic] || [];
  res.send({ courses });
});

app.get('/teachers', (_, res) => res.send({ teachers: TeacherList }));

app.get('/teacher/:id', (req, res) => {
  const { id } = req.params;
  const teacher = TeacherList.find(teacher => id === teacher.id);
  res.send({ teacher });
});

app.get('/topics', (_, res) => res.send({ topics: Topics }));

app.get('/health-check', (_, res) => res.send({ ping: 'pong' }));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));

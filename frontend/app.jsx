import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import TeacherList from './pages/TeacherList';
import CourseList from './pages/CourseList';

const App = () => (
  <BrowserRouter>
    <div className='container'>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/teachers' component={TeacherList} />
      <Route path='/courses' component={CourseList} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));

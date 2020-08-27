import React from 'react';
import Topic from '../components/Topic';
import Course from '../components/Course';

const TOPICS = ['HTML', 'CSS', 'JavaScript'];

const CourseList = () => {
  const [courses, setCourses] = React.useState([]);
  const [activeTopic, setActiveTopic] = React.useState(TOPICS[0]);

  const fetchCourses = async () => {
    const response = await fetch(`/api/courses/${activeTopic.toLowerCase()}`);
    const data = await response.json();
    setCourses(data.courses);
  };

  const handleTopicChange = topic => {
    setActiveTopic(topic);
  };

  React.useEffect(() => {
    fetchCourses();
  }, [activeTopic]);

  return (
    <div className='main-content courses'>
      <div className='course-header group'>
        <h2>Courses</h2>
        <ul className='group course-nav'>
          {TOPICS.map(topic => (
            <Topic
              key={topic}
              topic={topic}
              activeTopic={activeTopic}
              handleTopicChange={handleTopicChange}
            />
          ))}
        </ul>
      </div>
      <ul className='group'>
        {courses.map(course => (
          <Course key={course.id} {...course} />
        ))}
      </ul>
    </div>
  );
};

export default CourseList;

import React from 'react';
import Teacher from '../components/Teacher';

const TeacherList = () => {
  const [teachers, setTeachers] = React.useState([]);

  const fetchTeachers = async () => {
    const response = await fetch('/api/teachers');
    const data = await response.json();

    // filtering out all invalid teacher records that are missing an img_src
    const validTeachers = data.teachers.filter(teacher => teacher.img_src);

    setTeachers(validTeachers);
  };

  React.useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <div className='main-content'>
      <h2>Teachers</h2>
      <ul className='group'>
        {teachers.map(teacher => (
          <Teacher key={teacher.id} {...teacher} />
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;

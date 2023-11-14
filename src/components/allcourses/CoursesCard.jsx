import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoursesCard = () => {
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3030/courses')
      .then((response) => {
        setCoursesData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {coursesData.map(course => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CoursesCard;

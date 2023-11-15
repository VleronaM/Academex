import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./courses.css";

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
    <section className='courses-card'>
      <div className='container grid2'>
        {coursesData.map(course => (
          <div key={course.id} className='course-item'>
            {/* Log the constructed image path */}
            {console.log(`${process.env.PUBLIC_URL}/images/${course.image}`)}
            <img src={`${process.env.PUBLIC_URL}/images/${course.image}`} alt={course.title} className='course-image' />
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <button className='outline-btn'>ENROLL NOW!</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesCard;
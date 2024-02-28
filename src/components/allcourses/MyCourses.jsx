import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoursesCard from './CoursesCard'; // Import the CoursesCard component

const MyCourses = () => {
  const [userEnrolledCourses, setUserEnrolledCourses] = useState([]);

  useEffect(() => {
    fetchUserEnrolledCourses();
  }, []);

  const fetchUserEnrolledCourses = async () => {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        console.error('User ID not found in localStorage');
        return;
      }

      const response = await axios.get(`http://localhost:3030/users/${userId}/courses`);
      const userCoursesData = response.data;
      setUserEnrolledCourses(userCoursesData.courses); 
    } catch (error) {
      console.error('Error fetching user enrolled courses:', error);
    }
  };

  return (
    <div>
      <h1>My Courses</h1>
      <div className="courses-container">
        {userEnrolledCourses.length > 0 ? (
          userEnrolledCourses.map(course => (
            <div className="coursesCard-item" key={course.id}>
              <div className="content">
                <h2 className="coursesCard-title">{course.title}</h2>
                <img src={course.image} alt={course.title} />
                <p className="coursesCard-lecturer">{course.lecturer}</p>
                <p className="coursesCard-description">{course.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No courses enrolled</p>
        )}
      </div>
    </div>
  );
};

export default MyCourses;

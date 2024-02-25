import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyCourses = () => {
  const [userCourses, setUserCourses] = useState([]);

  useEffect(() => {
    fetchUserCourses();
  }, []);

  const fetchUserCourses = async () => {
    try {
      // Assume you have the userId stored in localStorage
      const userId = localStorage.getItem('userId');
      if (!userId) {
        console.error('User ID not found in localStorage');
        return;
      }

      const response = await axios.get(`http://localhost:3030/users/${userId}/courses`);
      setUserCourses(response.data);
    } catch (error) {
      console.error('Error fetching user courses:', error);
    }
  };

  return (
    <div>
      <h1>My Courses</h1>
      <div className="courses-container">
        {userCourses.map(course => (
          <div className="course-card" key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            {/* You can display more information about the course */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;

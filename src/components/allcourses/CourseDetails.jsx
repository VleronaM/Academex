import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/courses/${id}`);
        setCourse(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };


    fetchCourse();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="course-detail-container">
      <div className="course-detail-header">
        <h2>{course.title}</h2>
        <p>Lecturer: {course.lecturer}</p>
      </div>
      <div className="course-detail-content">
        <div className="course-detail-video">
          {course.url && (
            <iframe
              title="YouTube Playlist"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/videoseries?list=${course.url}`}
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className="course-detail-description">
          <h3>Description</h3>
          <p>{course.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

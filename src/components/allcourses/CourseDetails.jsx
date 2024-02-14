import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [playlistItems, setPlaylistItems] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/courses/${id}`);
        setCourse(response.data);
        if (response.data.url) {
          fetchPlaylistItems(response.data.url);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchPlaylistItems = async (playlistId) => {
      try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
          params: {
            part: 'snippet',
            playlistId: playlistId,
            key: 'YOUR_YOUTUBE_API_KEY', // Replace with your YouTube API key
            maxResults: 10, // Adjust the number of results as needed
          }
        });
        setPlaylistItems(response.data.items);
      } catch (error) {
        console.error('Error fetching playlist items:', error);
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
      <div className="course-detail-chapters">
        <h3>Chapters</h3>
        <ul>
          {playlistItems.map(item => (
            <li key={item.id}>
              <a href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`} target="_blank" rel="noopener noreferrer">
                {item.snippet.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetail;

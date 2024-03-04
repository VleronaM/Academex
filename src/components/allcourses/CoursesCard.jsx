import React, { useState, useEffect } from "react";
import "./courses.css";
import axios from "axios";
import Categories from "./Categories";
import { Link } from "react-router-dom";

const CoursesCard = () => {
  const [coursesCard, setCoursesCard] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [showModal, setShowModal] = useState(false);
  const [enrolledCourse, setEnrolledCourse] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const coursesResponse = await axios.get("http://localhost:3030/courses");
      setCoursesCard(coursesResponse.data);

      const categoriesResponse = await axios.get(
        "http://localhost:3030/categories"
      );
      setCategories(categoriesResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const filtered = coursesCard.filter(
      (course) =>
        (selectedCategory === "" || course.category_id === selectedCategory) &&
        (searchQuery === "" ||
          course.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredCourses(filtered);
  }, [coursesCard, selectedCategory, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSelectCategory = (categoryId) => {
    if (categoryId === selectedCategory) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(categoryId);
    }
  };

  const handleEnroll = (course) => {
    setEnrolledCourse(course);
    setShowModal(true);
  };


  const handleConfirmEnroll = async () => {
    try {
      setShowModal(false);
      const userId = localStorage.getItem('userId');
      if (!userId) {
        alert('You need to be logged in to enroll in a course.');
        window.location.href = '/login';
        return;
      }
      await axios.post(`http://localhost:3030/users/${userId}/courses/create`, {
        userId: parseInt(userId), // Parse userId to ensure it's an integer
        courseId: enrolledCourse.id
      });
      alert('You have successfully enrolled in the course.');
      window.location.href = `/courses/${enrolledCourse.id}`;
    } catch (error) {
      console.error('Error enrolling user in course:', error);
    }
  };



  const handleCancelEnroll = () => {
    setShowModal(false);
  };

  // Logic for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="coursesCard">
      <Categories
        categories={categories}
        onSelectCategory={handleSelectCategory}
        onSearch={handleSearch}
        selectedCategory={selectedCategory}
      />
      <div className="coursesCard-container">
        {currentCourses.map((course) => (
          <div className="coursesCard-item" key={course.id}>
            <div className="coursesCard-content">
              <h2 className="coursesCard-title">{course.title}</h2>
              <img src={course.image} alt={course.title} />
              <p className="coursesCard-lecturer">{course.lecturer}</p>
              <p className="coursesCard-description">{course.description}</p>
              <button
                className="coursesCard-enroll-btn"
                onClick={() => handleEnroll(course)}
              >
                ENROLL NOW
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(filteredCourses.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
      ...
      {showModal && enrolledCourse && (
        <div className="modal">
          <div className="modal-content">
            <h2>Enroll Confirmation</h2>
            <p>Are you sure you want to enroll in {enrolledCourse.title}?</p>
            <div className="modal-buttons">
              <button className="modal_button" onClick={handleConfirmEnroll}>Yes</button>
              <button className="modal_button" onClick={handleCancelEnroll}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CoursesCard;

import React, { useState, useEffect } from "react";
import "./courses.css";
import axios from "axios";
import Categories from "./Categories";

const CoursesCard = () => {
  const [coursesCard, setCoursesCard] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); 

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

  const handleShowAll = () => {
    setSelectedCategory("");
  };

  // Logic for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="coursesCard">
      <Categories
        categories={categories}
        onSelectCategory={handleSelectCategory}
        onSearch={handleSearch}
        selectedCategory={selectedCategory}
      />
      <div className='coursesCard-container'>
        {currentCourses.map((course) => (
          <div className='coursesCard-item' key={course.id}>
            <div className='content'>
              <h2 className='coursesCard-title'>{course.title}</h2>
              <img src={course.image} alt={course.title} />
              <p className='coursesCard-lecturer'>{course.lecturer}</p>
              <p className='coursesCard-description'>{course.description}</p>
              <button className='coursesCard-enroll-btn'>ENROLL NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredCourses.length / itemsPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CoursesCard;

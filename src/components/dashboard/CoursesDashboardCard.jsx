import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from '../Common/title/Title';
import './dashboard.css';

const CoursesDashboardCard = () => {
    const [courses, setCourses] = useState([]);
    const [newCourse, setNewCourse] = useState({ title: '', description: '', image: '', lecturer: '', url: '', category_id: '' });
    const [editCourseId, setEditCourseId] = useState(null);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://localhost:3030/courses');
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCourse({ ...newCourse, [name]: value });
    };

    const addCourse = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:3030/courses/create', newCourse, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchCourses();
            setNewCourse({ title: '', description: '', image: '', lecturer: '', url: '', category_id: '' });
        } catch (error) {
            console.error('Error adding course:', error);
        }
    };

    const deleteCourse = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:3030/courses/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchCourses();
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    };

    const editCourse = async (id) => {
        setEditCourseId(id);
        const courseToEdit = courses.find(course => course.id === id);
        if (courseToEdit) {
            setNewCourse({ ...courseToEdit });
        }
    };

    const updateCourse = async () => {
        try {
            const token = localStorage.getItem('token');
            const updatedCourseData = {
                ...newCourse,
                courseId: editCourseId 
            };
            await axios.patch(`http://localhost:3030/courses/update/${editCourseId}`, updatedCourseData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchCourses();
            setEditCourseId(null);
            setNewCourse({ title: '', description: '', image: '', lecturer: '', url: '', category_id: '' });
        } catch (error) {
            console.error('Error updating course:', error);
        }
    };
    

    return (
        <section className='courses'>
            <div className="container">
                <Title subtitle="Dashboard/Courses" />
                <div className="content">
                    <h1>Courses</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Lecturer</th>
                                <th>URL</th>
                                <th>Category ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr key={course.id}>
                                    <td>{editCourseId === course.id ?
                                        <input
                                            type="text"
                                            name="title"
                                            value={newCourse.title}
                                            onChange={handleInputChange}
                                        /> :
                                        course.title
                                    }</td>
                                    <td>{editCourseId === course.id ?
                                        <input
                                            type="text"
                                            name="description"
                                            value={newCourse.description}
                                            onChange={handleInputChange}
                                        /> :
                                        course.description
                                    }</td>
                                    <td>{editCourseId === course.id ?
                                        <input
                                            type="text"
                                            name="image"
                                            value={newCourse.image}
                                            onChange={handleInputChange}
                                        /> :
                                        course.image
                                    }</td>
                                    <td>{editCourseId === course.id ?
                                        <input
                                            type="text"
                                            name="lecturer"
                                            value={newCourse.lecturer}
                                            onChange={handleInputChange}
                                        /> :
                                        course.lecturer
                                    }</td>
                                    <td>{editCourseId === course.id ?
                                        <input
                                            type="text"
                                            name="url"
                                            value={newCourse.url}
                                            onChange={handleInputChange}
                                        /> :
                                        course.url
                                    }</td>
                                    <td>{editCourseId === course.id ?
                                        <input
                                            type="text"
                                            name="category_id"
                                            value={newCourse.category_id}
                                            onChange={handleInputChange}
                                        /> :
                                        course.category_id
                                    }</td>
                                    <td>
                                        {editCourseId === course.id ?
                                            <>
                                                <button onClick={updateCourse}>Save</button>
                                                <button onClick={() => setEditCourseId(null)}>Cancel</button>
                                            </>
                                            :
                                            <>
                                                <button onClick={() => deleteCourse(course.id)}>Delete</button>
                                                <button onClick={() => editCourse(course.id)}>Edit</button>
                                            </>
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Remove the "Add New Course" section when editing */}
                    {editCourseId === null && (
                        <>
                            <h2>Add New Course</h2>
                            <div className="add-inputs">
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    value={newCourse.title}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="Description"
                                    value={newCourse.description}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="image"
                                    placeholder="Image URL"
                                    value={newCourse.image}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="lecturer"
                                    placeholder="Lecturer"
                                    value={newCourse.lecturer}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="url"
                                    placeholder="URL"
                                    value={newCourse.url}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="category_id"
                                    placeholder="Category ID"
                                    value={newCourse.category_id}
                                    onChange={handleInputChange}
                                />
                                <button onClick={addCourse}>Add Course</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CoursesDashboardCard;

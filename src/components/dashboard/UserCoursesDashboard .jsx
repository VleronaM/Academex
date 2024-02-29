import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "../Common/title/Title";
import "./dashboard.css";

const UserCoursesDashboard = () => {
  const [userCourses, setUserCourses] = useState([]);
  const [newUserCourse, setNewUserCourse] = useState({
    userId: "",
    courseId: "",
  });
  const [editUserCourseId, setEditUserCourseId] = useState(null);
  const [editedUserCourse, setEditedUserCourse] = useState({
    userId: "",
    courseId: "",
  });
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchUserCourses();
    fetchUsers();
    fetchCourses();
  }, []);

  const fetchUserCourses = async () => {
    try {
      const response = await axios.get("http://localhost:3030/user-courses");
      setUserCourses(response.data);
    } catch (error) {
      console.error("Error fetching user courses:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3030/users");
      const filteredUsers = response.data.filter(
        (user) => user.role === "user"
      );
      setUsers(filteredUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:3030/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserCourse((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditInputChange = (e, id) => {
    const { name, value } = e.target;
    setEditedUserCourse((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addUserCourse = async () => {
    try {
      await axios.post(
        `http://localhost:3030/users/${newUserCourse.userId}/courses/create`,
        newUserCourse
      );
      fetchUserCourses();
      setNewUserCourse({ userId: "", courseId: "" });
    } catch (error) {
      console.error("Error adding user course:", error);
    }
  };

  const deleteUserCourse = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:3030/user-courses/${id}/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchUserCourses();
    } catch (error) {
      console.error("Error deleting user course:", error);
    }
  };

  const editUserCourse = (id, userId, courseId) => {
    setEditUserCourseId(id);
    setEditedUserCourse({ userId, courseId });
  };

  const updateUserCourse = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `http://localhost:3030/user-courses/${editUserCourseId}/update`,
        editedUserCourse,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchUserCourses();
      setEditUserCourseId(null);
      setEditedUserCourse({ userId: "", courseId: "" });
    } catch (error) {
      console.error("Error updating user course:", error);
    }
  };

  const getUserNameById = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "";
  };

  const getCourseTitleById = (courseId) => {
    const course = courses.find((course) => course.id === courseId);
    return course ? course.title : "";
  };

  return (
    <section className="user-courses">
      <div className="container">
        <Title subtitle="Dashboard/User Courses" />
        <div className="content">
          <h1>User Courses</h1>
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>User Name</th>
                <th>Course ID</th>
                <th>Course Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userCourses.map((userCourse) => (
                <tr key={userCourse.id}>
                  <td>
                    {editUserCourseId === userCourse.id ? (
                      <select
                        name="userId"
                        value={editedUserCourse.userId}
                        onChange={(e) => handleEditInputChange(e, userCourse.id)}
                        style={{ width: "70px" }}
                      >
                        {users.map((user) => (
                          <option key={user.id} value={user.id}>
                            {user.name}
                          </option>
                        ))}
                      </select>
                    ) : (
                      userCourse.userId
                    )}
                  </td>
                  <td>{getUserNameById(userCourse.userId)}</td>
                  <td>
                    {editUserCourseId === userCourse.id ? (
                      <select
                        name="courseId"
                        value={editedUserCourse.courseId}
                        onChange={(e) => handleEditInputChange(e, userCourse.id)}
                        style={{ width: "70px" }}
                      >
                        {courses.map((course) => (
                          <option key={course.id} value={course.id}>
                            {course.title}
                          </option>
                        ))}
                      </select>
                    ) : (
                      userCourse.courseId
                    )}
                  </td>
                  <td>{getCourseTitleById(userCourse.courseId)}</td>
                  <td>
                    <button onClick={() => deleteUserCourse(userCourse.id)}>
                      Delete
                    </button>
                    {editUserCourseId === userCourse.id ? (
                      <>
                        <button onClick={updateUserCourse}>Save</button>
                        <button onClick={() => setEditUserCourseId(null)}>
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() =>
                          editUserCourse(
                            userCourse.id,
                            userCourse.userId,
                            userCourse.courseId
                          )
                        }
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Add New User Course</h2>
          <div className="add-inputs">
            <select
              name="userId"
              value={newUserCourse.userId}
              onChange={handleAddInputChange}
              style={{ width: "150px", marginRight: "10px" }}
            >
              <option value="">Select User</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>

            <select
              name="courseId"
              value={newUserCourse.courseId}
              onChange={handleAddInputChange}
              style={{ width: "150px", marginRight: "10px" }}
            >
              <option value="">Select Course</option>
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.title}
                </option>
              ))}
            </select>

            <button onClick={addUserCourse}>Add User Course</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserCoursesDashboard;

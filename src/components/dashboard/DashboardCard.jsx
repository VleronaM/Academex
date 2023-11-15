import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./dashboard.css";
import Title from "../Common/title/Title";

const DashboardCard = () => {
  const [data, setData] = useState({
    courses: [],
    students: [],
    teachers: [],
    categories: [],
    // Add other data as needed
  });

  useEffect(() => {
    axios
      .get("http://localhost:3030/allData")
      .then((response) => {
        console.log("Data fetched successfully:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const { courses, students, teachers, categories } = data;

  const deleteItem = async (type, id) => {
    try {
      // Send a DELETE request to the backend API to delete the item
      await axios.delete(`http://localhost:3030/${type}/delete/${id}`);

      // Update the local state to reflect the deleted item
      setData((prevData) => {
        const updatedData = { ...prevData };
        updatedData[type] = prevData[type].filter((item) => item.id !== id);
        return updatedData;
      });

      console.log(`${type} with ID ${id} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting ${type} with ID ${id}:`, error);
    }
  };

  // const editItem = async (type, id, updatedData) => {
  //     try {
  //         // Send a PATCH request to the backend API to edit the item
  //         await axios.patch(`http://localhost:3030/${type}/update/${id}`, updatedData);

  //         // Update the local state to reflect the edited item
  //         setData((prevData) => {
  //             const updatedData = { ...prevData };
  //             const index = updatedData[type].findIndex((item) => item.id === id);
  //             updatedData[type][index] = { ...updatedData[type][index], ...updatedData };
  //             return updatedData;
  //         });

  //         console.log(`${type} with ID ${id} edited successfully`);
  //     } catch (error) {
  //         console.error(`Error editing ${type} with ID ${id}:`, error);
  //     }
  // };

  const ref = useRef(null);
  const [item, setItem] = useState({ title: "", description: "", image: "" });

  const editItem = (data) => {
    ref.current.click();
    // setItem({etitle: currentItem.title, edescription: currentItem.description, eimage: currentItem.image})
  };

  const handleClick = (e) => {
    console.log("Updating the item...", item);
    e.preventDefault();
  };
  const onChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const addItem = async (type, newItem) => {
    try {
      // Send a POST request to the backend API to add a new item
      const response = await axios.post(
        `http://localhost:3030/${type}/create`,
        newItem
      );

      // Update the local state to include the newly added item
      setData((prevData) => {
        const updatedData = { ...prevData };
        updatedData[type] = [...prevData[type], response.data];
        return updatedData;
      });

      console.log(`${type} added successfully`);
    } catch (error) {
      console.error(`Error adding ${type}:`, error);
    }
  };

  const renderTable = (type, items) => {
    // Check if items is defined and not null
    if (!items || items.length === 0) {
      return (
        <div className="content">
          <h1>{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
          <p>No {type}s available</p>

          <h2>Add New {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
          <div className="add-inputs">
            {/* Add input fields and button for adding a new item */}
            <button
              onClick={() =>
                addItem(type, {
                  /* add new item data here */
                })
              }
            >
              Add {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="content">
        <h1>{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
        <table>
          <thead>
            <tr>
              {Object.keys(items[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                {Object.values(item).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
                <td>
                  <button onClick={() => deleteItem(type, item.id)}>
                    Delete
                  </button>
                  <button ref={ref} onClick={() => editItem(type, item.id)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Add New {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
        <div className="add-inputs">
          {/* Add input fields and button for adding a new item */}
          <button
            onClick={() =>
              addItem(type, {
                /* add new item data here */
              })
            }
          >
            Add {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="librat">
        <div className="container">{renderTable("courses", courses)}</div>
      </section>

      <section className="categories">
        <div className="container">{renderTable("categories", categories)}</div>
      </section>

      <section className="teachers">
        <div className="container">{renderTable("teachers", teachers)}</div>
      </section>

      <section className="students">
        <div className="container">{renderTable("students", students)}</div>
      </section>

      {/* Add sections for other types as needed */}
    </>
  );
};

export default DashboardCard;

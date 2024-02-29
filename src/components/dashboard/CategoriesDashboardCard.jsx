import React, { useState, useEffect } from 'react';
import "./dashboard.css";
import Title from '../Common/title/Title';
import axios from 'axios';

const CategoriesDashboardCard = () => {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState({ name: '' });
    const [editCategoryId, setEditCategoryId] = useState(null);
    const userRole = localStorage.getItem('userRole');

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:3030/categories');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCategory({ ...newCategory, [name]: value });
    };

    const addCategory = async () => {
        try {
            if (userRole !== 'admin') {
                console.error('User does not have admin privileges to create a category.');
                return;
            }
            const token = localStorage.getItem('token'); 
            await axios.post('http://localhost:3030/categories/create', newCategory, {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            });
            fetchCategories();
            setNewCategory({ name: '' });
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };

const deleteCategory = async (id) => {
    try {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:3030/categories/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        fetchCategories();
    } catch (error) {
        console.error('Error deleting category:', error);
    }
};

    const editCategory = async (id) => {
        setEditCategoryId(id);
        const categoryToEdit = categories.find(category => category.id === id);
        if (categoryToEdit) {
            setNewCategory({ ...categoryToEdit });
        }
    };

    const updateCategory = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.patch(`http://localhost:3030/categories/update/${editCategoryId}`, newCategory, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchCategories();
            setEditCategoryId(null);
            setNewCategory({ name: '' });
        } catch (error) {
            console.error('Error updating category:', error);
        }
    };
    
    return (
        <>
            <section className='categories'>
                <div className="container">
                    <Title subtitle="Dashboard/Categories" />
                    <div className="content">
                        <h1>Categories</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category) => (
                                    <tr key={category.id}>
                                        <td>{category.id}</td>
                                        <td>{editCategoryId === category.id ?
                                            <input
                                                type="text"
                                                name="name"
                                                value={newCategory.name}
                                                onChange={handleInputChange}
                                            /> :
                                            category.name
                                        }</td>
                                        <td>
                                            {editCategoryId === category.id ?
                                                <>
                                                    <button onClick={updateCategory}>Save</button>
                                                    <button onClick={() => setEditCategoryId(null)}>Cancel</button>
                                                </>
                                                :
                                                <>
                                                    <button onClick={() => deleteCategory(category.id)}>Delete</button>
                                                    <button onClick={() => editCategory(category.id)}>Edit</button>
                                                </>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {editCategoryId === null && (
                            <div className="add-inputs">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={newCategory.name}
                                    onChange={handleInputChange}
                                />
                                <button onClick={addCategory}>Add Category</button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default CategoriesDashboardCard;

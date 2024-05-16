import React, { useState, useEffect } from 'react';
import "./dashboard.css";
import Title from '../Common/title/Title';
import axios from 'axios';

const DirectorDashboardCard = () => {
    const [directors, setDirectors] = useState([]);
    const [newDirector, setNewDirector] = useState({ name: '', birthYear: '' });
    const [editDirectorId, setEditDirectorId] = useState(null);

    useEffect(() => {
        fetchDirectors();
    }, []);

    const fetchDirectors = async () => {
        try {
            const response = await axios.get('http://localhost:3030/directors');
            setDirectors(response.data);
        } catch (error) {
            console.error('Error fetching directors:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewDirector({ ...newDirector, [name]: value });
    };

    const addDirector = async () => {
        try {
            await axios.post('http://localhost:3030/directors/create', newDirector);
            fetchDirectors();
            setNewDirector({ name: '', birthYear: '' });
        } catch (error) {
            console.error('Error adding director:', error);
        }
    };

    const deleteDirector = async (id) => {
        try {
            await axios.delete(`http://localhost:3030/directors/delete/${id}`);
            fetchDirectors();
        } catch (error) {
            console.error('Error deleting director:', error);
        }
    };

    const editDirector = async (id) => {
        setEditDirectorId(id);
        const directorToEdit = directors.find(director => director.id === id);
        if (directorToEdit) {
            setNewDirector({ ...directorToEdit });
        }
    };

    const updateDirector = async () => {
        try {
            await axios.patch(`http://localhost:3030/directors/update/${editDirectorId}`, newDirector);
            fetchDirectors();
            setEditDirectorId(null);
            setNewDirector({ name: '', birthYear: '' });
        } catch (error) {
            console.error('Error updating director:', error);
        }
    };
    
    return (
        <>
            <section className='directors'>
                <div className="container">
                    <Title subtitle="Dashboard/Directors" />
                    <div className="content">
                        <h1>Directors</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Birth Year</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {directors.map((director) => (
                                    <tr key={director.id}>
                                        <td>{director.id}</td>
                                        <td>{editDirectorId === director.id ?
                                            <input
                                                type="text"
                                                name="name"
                                                value={newDirector.name}
                                                onChange={handleInputChange}
                                            /> :
                                            director.name
                                        }</td>
                                        <td>{editDirectorId === director.id ?
                                            <input
                                                type="text"
                                                name="birthYear"
                                                value={newDirector.birthYear}
                                                onChange={handleInputChange}
                                            /> :
                                            director.birthYear
                                        }</td>
                                        <td>
                                            {editDirectorId === director.id ?
                                                <>
                                                    <button onClick={updateDirector}>Save</button>
                                                    <button onClick={() => setEditDirectorId(null)}>Cancel</button>
                                                </>
                                                :
                                                <>
                                                    <button onClick={() => deleteDirector(director.id)}>Delete</button>
                                                    <button onClick={() => editDirector(director.id)}>Edit</button>
                                                </>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {editDirectorId === null && (
                            <div className="add-inputs">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={newDirector.name}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="birthYear"
                                    placeholder="Birth Year"
                                    value={newDirector.birthYear}
                                    onChange={handleInputChange}
                                />
                                <button onClick={addDirector}>Add Director</button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default DirectorDashboardCard;

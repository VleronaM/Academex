import React, { useState, useEffect } from 'react';
import "./dashboard.css";
import Title from '../Common/title/Title';
import axios from 'axios';

const MovieDashboard = () => {
    const [movies, setMovies] = useState([]);
    const [newMovie, setNewMovie] = useState({ title: '', releaseYear: '', director_id: '' });
    const [editMovieId, setEditMovieId] = useState(null);
    const [directors, setDirectors] = useState([]);

    useEffect(() => {
        fetchMovies();
        fetchDirectors();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await axios.get('http://localhost:3030/movies');
            setMovies(response.data);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

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
        setNewMovie({ ...newMovie, [name]: value });
    };

    const addMovie = async () => {
        try {
            await axios.post('http://localhost:3030/movies/create', newMovie);
            fetchMovies();
            setNewMovie({ title: '', releaseYear: '', director_id: '' });
        } catch (error) {
            console.error('Error adding movie:', error);
        }
    };

    const deleteMovie = async (id) => {
        try {
            await axios.delete(`http://localhost:3030/movies/delete/${id}`);
            fetchMovies();
        } catch (error) {
            console.error('Error deleting movie:', error);
        }
    };

    const editMovie = async (id) => {
        setEditMovieId(id);
        const movieToEdit = movies.find(movie => movie.id === id);
        if (movieToEdit) {
            setNewMovie({ ...movieToEdit });
        }
    };

    const updateMovie = async () => {
        try {
            await axios.patch(`http://localhost:3030/movies/update/${editMovieId}`, newMovie);
            fetchMovies();
            setEditMovieId(null);
            setNewMovie({ title: '', releaseYear: '', director_id: '' });
        } catch (error) {
            console.error('Error updating movie:', error);
        }
    };
    
    return (
        <>
            <section className='movies'>
                <div className="container">
                    <Title subtitle="Dashboard/Movies" />
                    <div className="content">
                        <h1>Movies</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Release Year</th>
                                    <th>Director</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map((movie) => (
                                    <tr key={movie.id}>
                                        <td>{movie.id}</td>
                                        <td>{editMovieId === movie.id ?
                                            <input
                                                type="text"
                                                name="title"
                                                value={newMovie.title}
                                                onChange={handleInputChange}
                                            /> :
                                            movie.title
                                        }</td>
                                        <td>{editMovieId === movie.id ?
                                            <input
                                                type="text"
                                                name="releaseYear"
                                                value={newMovie.releaseYear}
                                                onChange={handleInputChange}
                                            /> :
                                            movie.releaseYear
                                        }</td>
                                        <td>{movie.director ? movie.director.name : ''}</td>
                                        <td>
                                            {editMovieId === movie.id ?
                                                <>
                                                    <button onClick={updateMovie}>Save</button>
                                                    <button onClick={() => setEditMovieId(null)}>Cancel</button>
                                                </>
                                                :
                                                <>
                                                    <button onClick={() => deleteMovie(movie.id)}>Delete</button>
                                                    <button onClick={() => editMovie(movie.id)}>Edit</button>
                                                </>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {editMovieId === null && (
                            <div className="add-inputs">
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    value={newMovie.title}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="releaseYear"
                                    placeholder="Release Year"
                                    value={newMovie.releaseYear}
                                    onChange={handleInputChange}
                                />
                                <select
                                    name="director_id"
                                    value={newMovie.director_id}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Director</option>
                                    {directors.map(director => (
                                        <option key={director.id} value={director.id}>{director.name}</option>
                                    ))}
                                </select>
                                <button onClick={addMovie}>Add Movie</button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default MovieDashboard;

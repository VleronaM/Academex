import React, { useState, useEffect } from 'react';
import "./dashboard.css";
import Title from '../Common/title/Title';
import axios from 'axios';

const BooksDashboardCard = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({ title: '', image: '', author: '', link: '' });
    const [editBookId, setEditBookId] = useState(null);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:3030/books');
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook({ ...newBook, [name]: value });
    };

    const addBook = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:3030/books/create', newBook, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchBooks();
            setNewBook({ title: '', image: '', author: '', link: '' });
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    const deleteBook = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:3030/books/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchBooks();
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    const editBook = async (id) => {
        setEditBookId(id);
        const bookToEdit = books.find(book => book.id === id);
        if (bookToEdit) {
            setNewBook({ ...bookToEdit });
        }
    };

    
    const updateBook = async () => {
        try {
            const token = localStorage.getItem('token');
            const updatedBookData = {
                ...newBook,
                bookId: editBookId 
            };
            await axios.patch(`http://localhost:3030/books/update/${editBookId}`, updatedBookData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchBooks();
            setEditBookId(null);
            setNewBook({ title: '', image: '', author: '', link: '' });
        } catch (error) {
            console.error('Error updating book:', error);
        }
    };
    


    return (
        <>
            <section className='librat'>
                <div className="container">
                    <Title subtitle="Dashboard/Books" />
                    <div className="content">
                        <h1>Books</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Image</th>
                                    <th>Author</th>
                                    <th>Link</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((book) => (
                                    <tr key={book.id}>
                                        <td>{editBookId === book.id ?
                                            <input
                                                type="text"
                                                name="title"
                                                value={newBook.title}
                                                onChange={handleInputChange}
                                            /> :
                                            book.title
                                        }</td>
                                        <td>{editBookId === book.id ?
                                            <input
                                                type="text"
                                                name="image"
                                                value={newBook.image}
                                                onChange={handleInputChange}
                                            /> :
                                            book.image
                                        }</td>
                                        <td>{editBookId === book.id ?
                                            <input
                                                type="text"
                                                name="author"
                                                value={newBook.author}
                                                onChange={handleInputChange}
                                            /> :
                                            book.author
                                        }</td>
                                        <td>{editBookId === book.id ?
                                            <input
                                                type="text"
                                                name="link"
                                                value={newBook.link}
                                                onChange={handleInputChange}
                                            /> :
                                            book.link
                                        }</td>
                                        <td>
                                            {editBookId === book.id ?
                                                <>
                                                    <button onClick={updateBook}>Save</button>
                                                    <button onClick={() => setEditBookId(null)}>Cancel</button>
                                                </>
                                                :
                                                <>
                                                    <button onClick={() => deleteBook(book.id)}>Delete</button>
                                                    <button onClick={() => editBook(book.id)}>Edit</button>
                                                </>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Remove the "Add New Book" section when editing */}
                        {editBookId === null && (
                            <>
                                <h2>Add New Book</h2>
                                <div className="add-inputs">
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Title"
                                        value={newBook.title}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="text"
                                        name="image"
                                        placeholder="Image URL"
                                        value={newBook.image}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="text"
                                        name="author"
                                        placeholder="Author"
                                        value={newBook.author}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="text"
                                        name="link"
                                        placeholder="Link"
                                        value={newBook.link}
                                        onChange={handleInputChange}
                                    />
                                    <button onClick={addBook}>Add Book</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BooksDashboardCard;
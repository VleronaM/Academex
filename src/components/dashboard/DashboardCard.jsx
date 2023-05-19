import React, { useState } from 'react'
import "./dashboard.css"
import Title from '../Common/title/Title';

const DashboardCard = () => {
    const [books, setBooks] = useState([
        { id: 1, isbn: '123456789', coverImage: 'java1.jpg', title: 'Java Programming', author: 'Filan Fisteku' },
        { id: 2, isbn: '987654321', coverImage: 'python1.jpg', title: 'Python Programming', author: 'Filan Fisteku2' },
    ]);

    const [newBook, setNewBook] = useState({ isbn: '', coverImage: '', title: '', author: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook({ ...newBook, [name]: value });
    };

    const addBook = () => {
        setBooks([...books, { id: books.length + 1, ...newBook }]);
        setNewBook({ isbn: '', coverImage: '', title: '', author: '' });
    };

    const deleteBook = (id) => {
        setBooks(books.filter((book) => book.id !== id));
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
                                    <th>ISBN</th>
                                    <th>Cover Image</th>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((book) => (
                                    <tr key={book.id}>
                                        <td>{book.isbn}</td>
                                        <td>{book.coverImage}</td>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>
                                            <button onClick={() => deleteBook(book.id)}>Delete</button>
                                            <button>Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <h2>Add New Book</h2>
                        <div className="add-inputs">
                            <input
                                type="text"
                                name="isbn"
                                placeholder="ISBN"
                                value={newBook.isbn}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="coverImage"
                                placeholder="Cover Image URL"
                                value={newBook.coverImage}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                value={newBook.title}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="author"
                                placeholder="Author"
                                value={newBook.author}
                                onChange={handleInputChange}
                            />
                            <button onClick={addBook}>Add Book</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='categories'>
                <div className="container">
                    <Title subtitle="Dashboard/Categories" />
                    <div className="content">
                        <h1>Categories</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Cover Image</th>
                                    <th>Title</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>programming.jpg</td>
                                    <td>Programming</td>

                                    <td>
                                        <button >Delete</button>
                                        <button>Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <h2>Add New Category</h2>
                        <div className="add-inputs">
                            <input
                                type="text"
                                name="id"
                                placeholder="ID"

                            />
                            <input
                                type="text"
                                name="coverImage"
                                placeholder="Cover Image URL"
                            />
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"

                            />
                            <button>Add Category</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='courses'>
                <div className="container">
                    <Title subtitle="Dashboard/Courses" />
                    <div className="content">
                        <h1>Courses</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Cover Image</th>
                                    <th>Title</th>
                                    <th>Teacher</th>
                                    <th>Category</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>java.jpg</td>
                                    <td>Java Programming</td>
                                    <td>Filan Fisteku</td>
                                    <td>Programming</td>

                                    <td>
                                        <button >Delete</button>
                                        <button>Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <h2>Add New Course</h2>
                        <div className="add-inputs">
                            <input
                                type="text"
                                name="id"
                                placeholder="ID"

                            />
                            <input
                                type="text"
                                name="coverImage"
                                placeholder="Cover Image URL"
                            />
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                            />
                            <input
                                type="text"
                                name="teacher"
                                placeholder="Teacher"
                            />
                            <input
                                type="text"
                                name="category"
                                placeholder="Category"
                            />
                            <button>Add Course</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='teachers'>
                <div className="container">
                    <Title subtitle="Dashboard/Teachers" />
                    <div className="content">
                        <h1>Teachers</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>name</th>
                                    <th>surname</th>
                                    <th>email</th>
                                    <th>password</th>
                                    <th>birthday</th>
                                    <th>city</th>
                                    <th>address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Jones</td>
                                    <td>markjones@gmail.com</td>
                                    <td>***********</td>
                                    <td>19-03-1989</td>
                                    <td>Prishtine</td>
                                    <td>Dardani</td>

                                    <td>
                                        <button >Delete</button>
                                        <button>Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <h2>Add New Teacher</h2>
                        <div className="add-inputs">
                            <input
                                type="text"
                                name="id"
                                placeholder="ID"

                            />
                            <input
                                type="text"
                                name="name"
                                placeholder="Name.."
                            />
                            <input
                                type="text"
                                name="surname"
                                placeholder="Surname.."
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="Email.."
                            />
                            <input
                                type="text"
                                name="password"
                                placeholder="Password.."
                            />
                             <input
                                type="date"
                                name="birthday"
                                placeholder="Birthday.."
                            />
                             <input
                                type="text"
                                name="city"
                                placeholder="City.."
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Address.."
                            />
                            <button>Add Teachers</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='students'>
                <div className="container">
                    <Title subtitle="Dashboard/Students" />
                    <div className="content">
                        <h1>Students</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>name</th>
                                    <th>surname</th>
                                    <th>email</th>
                                    <th>password</th>
                                    <th>birthday</th>
                                    <th>city</th>
                                    <th>address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Isabella</td>
                                    <td>Mitchel</td>
                                    <td>isabellamitchel@gmail.com</td>
                                    <td>***********</td>
                                    <td>17-09-2000</td>
                                    <td>Prishtine</td>
                                    <td>Ulpiane</td>

                                    <td>
                                        <button >Delete</button>
                                        <button>Edit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Sophia</td>
                                    <td>Anderson</td>
                                    <td>sophiaanderson@gmail.com</td>
                                    <td>***********</td>
                                    <td>02-11-2003</td>
                                    <td>Prizren</td>
                                    <td>rruga 21</td>

                                    <td>
                                        <button >Delete</button>
                                        <button>Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DashboardCard;
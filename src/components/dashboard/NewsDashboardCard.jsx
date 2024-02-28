import React, { useState, useEffect } from 'react';
import "./dashboard.css";
import Title from '../Common/title/Title';
import axios from 'axios';

const NewsDashboardCard = () => {
    const [news, setNews] = useState([]);
    const [newNews, setNewNews] = useState({ title: '', content: '', imageUrl: '' });
    const [editNewsId, setEditNewsId] = useState(null);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await axios.get('http://localhost:3030/news');
            setNews(response.data);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewNews({ ...newNews, [name]: value });
    };

    const addNews = async () => {
        try {
            await axios.post('http://localhost:3030/news/create', newNews);
            fetchNews();
            setNewNews({ title: '', content: '', imageUrl: '' });
        } catch (error) {
            console.error('Error adding news:', error);
        }
    };

    const deleteNews = async (id) => {
        try {
            await axios.delete(`http://localhost:3030/news/delete/${id}`);
            fetchNews();
        } catch (error) {
            console.error('Error deleting news:', error);
        }
    };

    const editNews = async (id) => {
        setEditNewsId(id);
        const newsToEdit = news.find(newsItem => newsItem.id === id);
        if (newsToEdit) {
            setNewNews({ ...newsToEdit });
        }
    };

    const updateNews = async () => {
        try {
            await axios.patch(`http://localhost:3030/news/update/${editNewsId}`, newNews);
            fetchNews();
            setEditNewsId(null);
            setNewNews({ title: '', content: '', imageUrl: '' });
        } catch (error) {
            console.error('Error updating news:', error);
        }
    };

    return (
        <>
            <section className='news'>
                <div className="container">
                    <Title subtitle="Dashboard/News" />
                    <div className="content">
                        <h1>News</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Content</th>
                                    <th>Image</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {news.map((newsItem) => (
                                    <tr key={newsItem.id}>
                                        <td>{editNewsId === newsItem.id ?
                                            <input
                                                type="text"
                                                name="title"
                                                value={newNews.title}
                                                onChange={handleInputChange}
                                            /> :
                                            newsItem.title
                                        }</td>
                                        <td>{editNewsId === newsItem.id ?
                                            <input
                                                type="text"
                                                name="content"
                                                value={newNews.content}
                                                onChange={handleInputChange}
                                            /> :
                                            newsItem.content
                                        }</td>
                                        <td>{editNewsId === newsItem.id ?
                                            <input
                                                type="text"
                                                name="imageUrl"
                                                value={newNews.imageUrl}
                                                onChange={handleInputChange}
                                            /> :
                                            newsItem.imageUrl
                                        }</td>
                                        <td>
                                            {editNewsId === newsItem.id ?
                                                <>
                                                    <button onClick={updateNews}>Save</button>
                                                    <button onClick={() => setEditNewsId(null)}>Cancel</button>
                                                </>
                                                :
                                                <>
                                                    <button onClick={() => deleteNews(newsItem.id)}>Delete</button>
                                                    <button onClick={() => editNews(newsItem.id)}>Edit</button>
                                                </>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Remove the "Add New News" section when editing */}
                        {editNewsId === null && (
                            <>
                                <h2>Add New News</h2>
                                <div className="add-inputs">
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Title"
                                        value={newNews.title}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="text"
                                        name="content"
                                        placeholder="Content"
                                        value={newNews.content}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="text"
                                        name="imageUrl"
                                        placeholder="Image URL"
                                        value={newNews.imageUrl}
                                        onChange={handleInputChange}
                                    />
                                    <button onClick={addNews}>Add News</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
            {/* Other sections */}
        </>
    );
};

export default NewsDashboardCard;

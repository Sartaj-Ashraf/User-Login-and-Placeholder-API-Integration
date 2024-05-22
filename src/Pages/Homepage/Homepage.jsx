import "./styles.css";
import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import { RiH1 } from "react-icons/ri";


const ShowUsers = lazy(() => import("../../Components/ShowUsers/ShowUsers.jsx"));

function Homepage() {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState('');


    useEffect(() => {
        // Fetching data from JSONPlaceholder API using axios
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
                handleStoreData();
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleStoreData = () => {
        if (users.length > 0) {
            users.forEach(user => {
                localStorage.setItem(`User ${user.id}`, JSON.stringify(user));
            });
        }
    };




    // Filtering Functions 
    const handleSearchInput = (event) => {
        setQuery(event.target.value);
    };

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleUpdateUser = (updatedUser) => {
        setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="container">
            <div className="search-items">
                <input
                    type="text"
                    id='search'
                    name='search'
                    onChange={handleSearchInput}
                    value={query}
                    placeholder='Search by name'
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <Suspense fallback={'Loading Data'}>
                        <ShowUsers users={filteredUsers} onDelete={handleDelete} onEdit={handleUpdateUser} />
                    </Suspense>
                </tbody>
            </table>
        </div>
    );
}

export default Homepage;

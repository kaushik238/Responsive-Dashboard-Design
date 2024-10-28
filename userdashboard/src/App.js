import React, { useState, useEffect } from "react";
import "./index.css";

const App = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("name");
    const [selectedUser, setSelectedUser] = useState(null);

    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setFilteredUsers(data);
            });
    }, []);

    
    useEffect(() => {
        let updatedUsers = [...users];
        if (searchTerm) {
            updatedUsers = updatedUsers.filter(user =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.username.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (sortBy) {
            updatedUsers = updatedUsers.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
        }
        setFilteredUsers(updatedUsers);
    }, [searchTerm, sortBy, users]);

   
    const Usercard = ({ user, onClick }) => {
        return (
            <div className="user-card">
                <h3>{user.name}</h3>
                <p>@{user.username}</p>
                <div className="view-details" onClick={onClick}>View Details</div>
            </div>
        );
    };

  
    const Usermodal = ({ user, onClose }) => {
        return (
            <div className="modal" onClick={onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <span className="close" onClick={onClose}>&times;</span>
                    <h2>{user.name}</h2>
                    <p>@{user.username}</p>
                    <p>Address: {user.address.street}, {user.address.city}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="container">
            <h1>User Dashboard</h1>
            <input
                type="text"
                placeholder="Search by name or username..."
                onChange={e => setSearchTerm(e.target.value)}
            />
            <select onChange={e => setSortBy(e.target.value)}>
                <option value="name">Sort by Name</option>
                <option value="username">Sort by Username</option>
            </select>
            <div className="user-list">
                {filteredUsers.map(user => (
                    <Usercard key={user.id} user={user} onClick={() => setSelectedUser(user)} />
                ))}
            </div>
            {selectedUser && <Usermodal user={selectedUser} onClose={() => setSelectedUser(null)} />}
        </div>
    );
};

export default App;

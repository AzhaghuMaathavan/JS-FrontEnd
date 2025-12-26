import React, { useEffect, useState } from 'react';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL;
        console.log("API URL:", apiUrl);
        const fetchData = () => {
            if (!apiUrl) return;
            fetch(`${apiUrl}/users`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setUsers(data);
                })
                .catch((err) => console.error("Error fetching data:", err));
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Data from API:</h1>
            {users.map((user) => (
                <ul key={user.id} style={{ borderBottom: "1px solid #ccc" }}>
                    <li>ID: {user.id}</li>
                    <li>Name: {user.name}</li>
                    <li>Username: {user.username}</li>
                    <li>Email: {user.email}</li>
                    <li>City: {user.address.city}</li>
                    <li>Phone: {user.phone}</li>
                    <li>Website: {user.website}</li>
                    <li>Company: {user.company.name}</li>
                </ul>
            ))}
        </div>
    );
}

export default App;
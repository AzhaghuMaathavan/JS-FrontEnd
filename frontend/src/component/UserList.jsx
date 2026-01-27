import React, {useState, useEffect} from 'react';

import {List, ListItem, ListItemText } from '@mui/material';

import { getAllUsers } from '../services/UserApi.jsx';

const UserList = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res= await getAllUsers();
                setUserList(res.data);
            } catch (error) {
                console.error('API request failed', error);
            }
        };
        fetchData();
    }, []);

    return (
        <List>
            {userList.map((user) => (
                <ListItem key={user.id} role="listitem">
                    <ListItemText primary={user.name} secondary={user.email} />
                </ListItem>
            ))}
        </List>
    );
}
export default UserList;
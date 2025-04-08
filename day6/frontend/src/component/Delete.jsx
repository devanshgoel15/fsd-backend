import React from 'react';
import axios from 'axios';
const Delete =() => {
    const handledelete = async (id) => {
        await axios.delete(`http://localhost:9000/users/${id}`);
        alert('User deleted successfully');
    }
    return (
        <div>
            
        </div>
    )
}
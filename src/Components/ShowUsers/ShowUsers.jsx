import "./styles.css";
import React, { useState } from 'react';
import { FaRegEdit, FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function ShowUsers({ users, onDelete, onEdit }) {

    const [editingUserId, setEditingUserId] = useState(null);
    const [editedUser, setEditedUser] = useState({});

    const handleEditClick = (user) => {
        setEditingUserId(user.id);
        setEditedUser(user);
    };

    const handleSaveClick = () => {
        onEdit(editedUser);
        setEditingUserId(null);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedUser({ ...editedUser, [name]: value });
    };

    return (
        <>
            {users.map((user) => (
                <tr key={user.id}>
                    <td>
                        {editingUserId === user.id ? (
                            <input
                                type="text"
                                name="name"
                                value={editedUser.name}
                                onChange={handleChange}
                            />
                        ) : (
                            user.name
                        )}
                    </td>
                    <td>
                        {editingUserId === user.id ? (
                            <input
                                type="text"
                                name="email"
                                value={editedUser.email}
                                onChange={handleChange}
                            />
                        ) : (
                            user.email
                        )}
                    </td>
                    <td>Active</td>
                    <td className='table-actions'>
                        {editingUserId === user.id ? (
                            <FaSave onClick={handleSaveClick} />
                        ) : (
                            <FaRegEdit onClick={() => handleEditClick(user)} />
                        )}
                        <MdDelete onClick={() => onDelete(user.id)} />
                    </td>
                </tr>
            ))}
        </>
    );
}

export default ShowUsers;

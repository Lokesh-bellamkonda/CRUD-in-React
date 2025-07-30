import React from "react";

function ItemList({ items, updateItem, deleteItem }) {
    const handleEdit = (id) => {
        const newName = prompt('Enter new name:');
        if (newName !== null && newName !== '') {
            updateItem(id, newName);
        }
    };
    return (
        <div>  
            <h2>Items List</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => handleEdit(item.id)}>Edit</button>
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ItemList;
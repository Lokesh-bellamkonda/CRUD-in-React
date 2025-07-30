import React, { useState } from 'react';
import ItemList from './ItemList';
import AddItemForm from './AddItemForm';

function App() {
    const [items, setItems] = useState([]);

    const addItem = (name) => {
        const newItem = {
            id: Date.now(),
            name,
        };
        setItems([...items, newItem]);
    };

    const updateItem = (id, newName) => {
        const updatedItems = items.map((item) =>
            item.id === id ? { ...item, name: newName } : item
        );
        setItems(updatedItems);
    };

    const deleteItem = (id) => {
        const filteredItems = items.filter((item) => item.id !== id);
        setItems(filteredItems);
    };

    return (
        <div className="App">
            <h1>My CRUD App</h1>
            <AddItemForm addItem={addItem} />
            <ItemList items={items} updateItem={updateItem} deleteItem={deleteItem} />
        </div>
    );
}

export default App;

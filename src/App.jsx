import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'; // Import useParams
import ItemList from './components/ItemList';
import ItemDetails from './components/ItemDetails';
import { fetchItems } from './services/api';

const App = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchItems();
                setItems(data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchData();
    }, []);

    const handleUpdateItem = (updatedItem) => {
        const updatedItems = items.map((item) =>
            item.id === updatedItem.id ? updatedItem : item
        );
        setItems(updatedItems);
    };

    return (
        <div className="App container-sm">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<ItemList items={items} onUpdateItem={handleUpdateItem} />}
                    />
                    {/* Use useParams to get the id parameter */}
                    <Route path="/feed_items/:id" element={<ItemDetailsWrapper />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

// Create a wrapper component to extract the id parameter using useParams
const ItemDetailsWrapper = () => {
    const { id } = useParams();
    console.log('ID:', id);
    return <ItemDetails itemId={id} />;
};

export default App;




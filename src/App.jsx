import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
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
        <div className="App">
            <div className="bg-blue-600">
                <h1 className="text-white text-center py-4 text-4xl font-bold">/Slashdot RSS Reader</h1>
            </div>
            <div className="container mx-auto px-4">
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={<ItemList items={items} onUpdateItem={handleUpdateItem} />}
                        />
                        <Route path="/feed_items/:id" element={<ItemDetailsWrapper />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
};

const ItemDetailsWrapper = () => {
    const { id } = useParams();
    console.log('ID:', id);
    return <ItemDetails itemId={id} />;
};

export default App;

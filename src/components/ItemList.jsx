import React from 'react';
import { Link } from 'react-router-dom';
import { updateItemReadStatus } from '../services/api';
import ReadButton from './ReadButton';
import FormatDate from './FormatDate';

const ItemList = ({ items, onUpdateItem }) => {
    const handleUpdateReadStatus = async (item) => {
        try {
            const newReadStatus = item.read === 'Read' ? 'Unread' : 'Read';

            const updatedItem = await updateItemReadStatus(item.id, newReadStatus, () => {});
            onUpdateItem(updatedItem);
        } catch (error) {
            console.error('Error updating read status:', error);
        }
    };

    return (
        <div>
            <ul style={{ listStyleType: 'none', margin: 'auto' }}>
                {items && items.map(item => (
                    <li key={item.id} style={{ margin: 10 }}>
                        <div className="card text-dark bg-light mb-3" style={{ maxWidth: '100rem' }}>
                            {item.subject && (
                                <div className="card-header">
                                    {item.subject.charAt(0).toUpperCase() + item.subject.slice(1)} : {FormatDate(item.publication_date)}
                                </div>
                            )}
                            <Link to={`/feed_items/${item.id}`} className="card-body">
                                <h2 className="card-title">{item.title}</h2>
                            </Link>
                            <div className="card-footer">
                                <ReadButton
                                    item={item}
                                    onUpdateRead={() => handleUpdateReadStatus(item)}
                                />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;

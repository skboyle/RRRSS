import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
            // Handle error gracefully
        }
    };

    return (
        <div className="container mx-auto">
            <ul className="space-y-2"> {/* Adjusted space-y class */}
                {items && items.map(item => (
                    <li key={item.id} className="py-4 flex justify-center">
                        <div className="w-2/3 border border-gray-300 rounded-md p-4 hover:shadow-lg transition duration-300">
                            {item.subject && (
                                <div className="text-lg text-gray-900 mb-2">
                                    {item.subject.charAt(0).toUpperCase() + item.subject.slice(1)} : {FormatDate(item.publication_date)}
                                </div>
                            )}
                            <div>
                                <Link to={`/feed_items/${item.id}`} className="text-blue-500 text-lg mb-2 block hover:text-blue-700">
                                    <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                                </Link>
                            </div>
                            <div>
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

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    onUpdateItem: PropTypes.func.isRequired
};

export default ItemList;

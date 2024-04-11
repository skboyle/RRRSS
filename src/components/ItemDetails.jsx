import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemDetails, updateItemReadStatus } from '../services/api';
import ReadButton from './ReadButton';
import CustomRichTextRenderer from './CustomRichTextRenderer';

const ItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    const fetchData = async () => {
        try {
            if (!id) {
                throw new Error('Item ID is missing');
            }
            const data = await fetchItemDetails(id);
            setItem(data);
        } catch (error) {
            console.error('Error fetching item details:', error);
        }
    };

    const updateReadStatus = async () => {
        try {
            if (!id || !item) {
                throw new Error('Item ID or item is missing');
            }
            
            const newReadStatus = item.read === 'Read' ? 'Unread' : 'Read';
    
            await updateItemReadStatus(id, newReadStatus, fetchData);
        } catch (error) {
            console.error('Error updating read status:', error);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    if (!item) {
        return <div className="text-center mt-8">Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
            <CustomRichTextRenderer text={item.description} />
            <div className="mt-4">
                <p className="text-sm text-gray-600">
                    Creator: {item.creator} | Publication Date: {new Date(item.publication_date).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600">
                    Subject: {item.subject} | Section: {item.section}
                </p>
                <p className="text-sm text-gray-600">
                    Department: {item.department} | Comments: {item.comments}
                </p>
            </div>
            <div className="mt-4">
                <ReadButton item={item} onUpdateRead={updateReadStatus} />
            </div>
        </div>
    );
};

export default ItemDetails;

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
        return <div>Loading...</div>;
    }

    return (
        <div className="card text-dark bg-light mb-3" style={{ margin: "auto", marginTop: 20, padding: "10px", maxWidth: '100rem' }}>
            <h2>{item.title}</h2>
            <CustomRichTextRenderer text={item.description} />
            <p>Creator: {item.creator} | Publication Date: {new Date(item.publication_date).toLocaleDateString()}</p>
            <p>Subject: {item.subject} | Section: {item.section}</p>
            <p>Department: {item.department} | Comments: {item.comments}</p>
            <ReadButton
                item={item}
                onUpdateRead={updateReadStatus}
            />
        </div>
    );
};

export default ItemDetails;



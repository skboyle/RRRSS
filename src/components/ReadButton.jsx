import React from 'react';

const ReadButton = ({ item, onUpdateRead }) => {
    const handleClick = async () => {
        const updatedItem = { ...item, read: item.read === 'Read' ? 'Unread' : 'Read' };
        onUpdateRead(updatedItem);
    }

    return (
        <div>
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                style={{ marginBottom: 10 }} 
                type="button" 
                data-testid={`read-button-${item.id}`} 
                onClick={handleClick}
            >
                {item.read}
            </button>
        </div>
    );
}

export default ReadButton;

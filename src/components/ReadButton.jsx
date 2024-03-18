import React from 'react';

const ReadButton = ({ item, onUpdateRead }) => {
    const handleClick = async () => {
        const updatedItem = { ...item, read: item.read === 'Read' ? 'Unread' : 'Read' };
        onUpdateRead(updatedItem);
    }

    return (
        <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button" data-testid={`read-button-${item.id}`} onClick={handleClick}>
                {item.read}
            </button>
        </div>
    );
}

export default ReadButton;


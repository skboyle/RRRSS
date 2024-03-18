export const fetchItems = async () => {
    try {
        const response = await fetch('http://localhost:3001/feed_items', {
            method: "GET",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch items');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
}

export const fetchItemDetails = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:3001/feed_items/${id}`, {
            method: "GET",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch item details');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching item details:', error);
        throw error;
    }
};


export const updateItemReadStatus = async (id: string, readStatus: string, callback: () => void) => {
    try {
        console.log(readStatus)
        const url = `http://localhost:3001/feed_items/${id}`;
        const body = JSON.stringify({ read: readStatus });
        const headers = {
            'Content-Type': 'application/json',
        };

        console.log('Update request:', {
            method: 'PATCH',
            url,
            headers,
            body,
        });

        const response = await fetch(url, {
            method: 'PATCH',
            headers,
            body,
        });

        console.log('Response status:', response.status);
        console.log('Response:', response);


        if (!response.ok) {
            throw new Error('Error updating item read status');
        }
        
        callback();

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating item read status:', error);
        throw error;
    }
};

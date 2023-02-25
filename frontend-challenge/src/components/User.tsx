import React, {useState} from 'react'

export default function User() {
    /**
     * @description fetch data from api
     * @returns {Promise}
     */
    const fetchData = async () => {
        let data = null;
        // cancel request after 3 seconds
        const controller = new AbortController();
        const timeOut = setTimeout(() => controller.abort(), 3000);

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            data = await response.json();
            console.log(data);
            return data;
        } catch (err) {
            console.log(err);
            return data;
        } finally {
            clearTimeout(timeOut);
        }
    }

    const [users, setUsers] = useState(fetchData());
    return (
        <h1>User</h1>
    )
}
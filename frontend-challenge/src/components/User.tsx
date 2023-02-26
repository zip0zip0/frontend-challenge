import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import {useEffect, useState} from 'react'
import { Users } from '../types/user';

export default function User() {
    const [users, setUsers] = useState<Users>([]);

    /**
     * @description fetch data from api
     * @returns {Promise}
     */
    const fetchData = async () => {
        let data = [];
        // cancel request after 3 seconds
        const controller = new AbortController();
        const timeOut = setTimeout(() => controller.abort(), 3000);

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            data = await response.json() as Users;
            console.log(data);
            setUsers(data);
        } catch (err) {
            console.log(err);
            console.log(data);
        } finally {
            clearTimeout(timeOut);
        }
    }

    useEffect(() => {
    fetchData();
    }, []);

    return (
        <div>
            <button onClick={() => console.log(users)}>Fetch Data</button>
        </div>
    )
}

// based on this datastructure, with React and Typescript, use Material UI v5 card component to display 

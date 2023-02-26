import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import {useEffect, useState} from 'react'
import { Users } from '../types/user';

export default function User() {
    const [users, setUsers] = useState<Users>([]);

    useEffect(() => {
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
    fetchData();
    }, []);

    return (
        // create a table to display data using material-ui
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Username</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Website</TableCell>
                        <TableCell align="right">Company</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.username}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">
                                {row.address.street}
                                {row.address.suite}
                                {row.address.city}
                                {row.address.zipcode}
                                {row.address.geo.lat}
                                {row.address.geo.lng}
                            </TableCell>
                            <TableCell align="right">{row.phone}</TableCell>
                            <TableCell align="right">{row.website}</TableCell>
                            <TableCell align="right">
                                {row.company.name}
                                {row.company.catchPhrase}
                                {row.company.bs}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        
    )
}

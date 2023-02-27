import { Card, CardContent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Users } from '../types/user';
import * as css from './UsersOverview.module.scss';

export default function UsersOverview() {
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
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            );
            data = (await response.json()) as Users;
            console.log(data);
            setUsers(data);
        } catch (err) {
            console.log(err);
            console.log(data);
        } finally {
            clearTimeout(timeOut);
        }
    };

    // fetch data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={css.main}>
            <div className={css.dataGrid}>
                {users.map((user) => (
                    <Card
                        key={user.id}
                        sx={{ maxWidth: 345, marginBottom: 2, borderRadius: 5 }}
                    >
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {user.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {user.company.name}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

// based on this datastructure, with React and Typescript, use Material UI v5 card component to display

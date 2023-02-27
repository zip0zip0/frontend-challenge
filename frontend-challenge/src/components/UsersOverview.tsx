import { SetStateAction, useEffect, useState } from 'react';
import { Users } from '../types/user';
import UserCard from './UserCard';
import * as css from './UsersOverview.module.scss';

export default function UsersOverview() {
    const [users, setUsers] = useState<Users>([]);

    /**
     * @description fetch data from api
     * @returns {Promise}
     */
    const fetchData = async () => {
        let data: SetStateAction<Users> = [];
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
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

// based on this datastructure, with React and Typescript, use Material UI v5 card component to display

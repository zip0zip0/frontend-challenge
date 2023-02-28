import { SetStateAction, useEffect, useState } from 'react';
import { Users } from '../types/user';
import UserCard from './UserCard';
import { makeStyles } from '@material-ui/core/styles';
import SearchAndSort from './SearchAndSort';


const useStyles = makeStyles({
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
    },
    dataGrid: {
        display: 'grid',
        marginTop: '20px',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '10px',
    },
});

export default function UsersOverview() {
    const css = useStyles();
    const [users, setUsers] = useState<Users>([]);

    /**
     * @description fetch data from api
     * @returns {Promise}
     */
    const fetchData = async () => {
        let data: SetStateAction<Users> = [];
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
            // TODO: handle error
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
            <SearchAndSort />
            <div className={css.dataGrid}>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

// based on this datastructure, with React and Typescript, use Material UI v5 card component to display

import { SetStateAction, useEffect, useState } from 'react';
import { Users } from '../types/user';
import UserCard from './UserCard';
import { makeStyles } from '@material-ui/core/styles';
import SearchAndSort from './SearchAndSort';
import { sortBy as sortByLodash } from 'lodash';

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
        gridGap: '20px',
    },
});

export default function UsersOverview() {
    const css = useStyles();
    const [users, setUsers] = useState<Users>([]);
    const [usersToView, setUsersToView] = useState<Users>([]);
    const [search, setSearch] = useState<string>('');
    const [sortBy, setSortBy] = useState<'name' | 'city' | 'company'>('name');
    const [applySort, setApplySort] = useState<boolean>(false);

    useEffect(() => {
        setUsersToView(users);
        setApplySort(true);
    }, [users]);

    useEffect(() => {
        setApplySort(true);
    }, [sortBy]);

    // applies search on 'name'
    useEffect(() => {
        if (search) {
            const filteredUsers = users.filter((user) =>
                user.name.toLowerCase().includes(search.toLowerCase())
            );
            setUsersToView(filteredUsers);
        } else {
            setUsersToView(users);
        }
    }, [search, users]);

    // applies sort, based on 'name', 'city' or 'company'
    useEffect(() => {
        if (applySort) {
            if (sortBy === 'name') {
                const sortedUsers = sortByLodash(usersToView, 'name');
                setUsersToView(sortedUsers);
            } else if (sortBy === 'city') {
                const sortedUsers = sortByLodash(usersToView, 'address.city');
                setUsersToView(sortedUsers);
            } else if (sortBy === 'company') {
                const sortedUsers = sortByLodash(usersToView, 'company.name');
                setUsersToView(sortedUsers);
            }
            setApplySort(false);
        }
    }, [sortBy, usersToView, applySort]);

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
            <SearchAndSort
                search={search}
                setSearch={setSearch}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
            <div className={css.dataGrid}>
                {usersToView.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

// based on this datastructure, with React and Typescript, use Material UI v5 card component to display

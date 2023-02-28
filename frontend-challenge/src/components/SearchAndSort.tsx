import {
    Paper,
    InputBase,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useRef, useState } from 'react';

type Props = {
    search: string;
    setSearch: (search: string) => void;
    sortBy: string;
    setSortBy: (sortBy: string) => void;
};

const useStyles = makeStyles((theme: Theme) => ({
    main: {
        display: 'flex',
        alignItems: 'center',
        width: 400,
        margin: '40px 0px 40px 0px',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function SearchAndSort({
    search,
    setSearch,
    sortBy,
    setSortBy,
}: Props) {
    const css = useStyles();
    const anchorRef = useRef<HTMLButtonElement>(null);
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <Paper
            className={css.main}
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: 400,
                height: '60px',
            }}
        >
            <SearchIcon />
            <InputBase
                className={css.input}
                sx={{ ml: 1, flex: 1 }}
                size="medium"
                placeholder="Search contacts"
                inputProps={{ 'aria-label': 'search contacts' }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
                onKeyUp={(e) => e.key === 'Escape' && setSearch('')}
            />
            <Divider
                sx={{ height: 28, m: 0.5 }}
                orientation="vertical"
                className={css.divider}
            />
            <Tooltip title="Sort contact by" placement="top" arrow>
                <IconButton
                    sx={{ p: '10px' }}
                    aria-label="directions"
                    className={css.iconButton}
                    ref={anchorRef}
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    <MenuIcon />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorRef.current}
                open={openMenu}
                onClose={() => setOpenMenu(false)}
            >
                <MenuItem
                    onClick={() => {
                        setOpenMenu(false);
                        setSortBy('name');
                    }}
                    selected={sortBy === 'name'}
                >
                    Name
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        setOpenMenu(false);
                        setSortBy('company');
                    }}
                    selected={sortBy === 'company'}
                >
                    Company
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        setOpenMenu(false);
                        setSortBy('city');
                    }}
                    selected={sortBy === 'city'}
                >
                    City
                </MenuItem>
            </Menu>
        </Paper>
    );
}

import { Card, CardContent, Typography } from '@mui/material';
import { User } from '../types/user';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
    user: User;
    setSelectedUser: (user: User) => void;
    setOpenDialog: (opened: boolean) => void;
};

const useStyles = makeStyles({
    card: {
        backgroundColor: 'offwhite !important',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out !important',
        boxShadow: '4px 4px 10px 0.5px rgba(0, 0, 0, 0.2) !important',
        '&:hover': {
            transform: 'scale(1.03)',
            boxShadow: '5px 5px 10px 0.5px rgba(0, 0, 0, 0.4) !important',
        },
    },
});

export default function UserCard({ user, setSelectedUser, setOpenDialog }: Props) {
    const css = useStyles();

    return (
        <Card
            className={css.card}
            sx={{ maxWidth: 345, marginBottom: 2, borderRadius: 5 }}
            onClick={() => {
                setSelectedUser(user);
                setOpenDialog(true);
            }}
        >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {user.company.name}
                </Typography>
            </CardContent>
        </Card>
    );
}

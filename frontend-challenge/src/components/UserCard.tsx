import { Card, CardContent, Typography } from '@mui/material';
import { User } from '../types/user';
import { makeStyles } from '@material-ui/core/styles';

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

export default function UserCard({ user }: { user: User }) {
    const css = useStyles();

    return (
        <Card
            className={css.card}
            sx={{ maxWidth: 345, marginBottom: 2, borderRadius: 5 }}
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

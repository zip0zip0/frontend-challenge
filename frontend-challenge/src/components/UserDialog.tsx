import { Card, CardContent, Typography, Dialog, Button } from '@mui/material';
import { User } from '../types/user';
import { makeStyles } from '@material-ui/core/styles';
import { DialogTitle } from '@material-ui/core';

type Props = {
    open: boolean;
    onClose: () => void;
    user: User;
};

const useStyles = makeStyles({
    main: {
        width: '85vw',
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        margin: '40px 0px 40px 0px',
        overflow: 'auto',
    },
    mainCard: {
        minWidth: 275,
        margin: '16px',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function UserDialog({ open, onClose, user }: Props) {
    const css = useStyles();

    const renderCards = (obj: User | User['address'] | User['company']) => {
        return Object.keys(obj).map((key, index) => {
            const value = obj[key];
            if (typeof value === 'object') {
                return (
                    <Card key={key} className={css.mainCard}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {key}
                            </Typography>
                            {renderCards(value)}
                        </CardContent>
                    </Card>
                );
            } else {
                return (
                    <Card key={key} className={css.mainCard}>
                        <CardContent>
                            <Typography
                                className={css.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                {key}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {value}
                            </Typography>
                        </CardContent>
                    </Card>
                );
            }
        });
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle id={user.id.toString()}>{user.name}</DialogTitle>
            <div className={css.content}>
                <div>{renderCards(user)}</div>
                <div>
                    <Button variant='contained' color='success' onClick={onClose}>Close</Button>
                </div>
            </div>
        </Dialog>
    );
}

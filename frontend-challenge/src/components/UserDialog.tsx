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
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    content: {
        margin: '50px',
    },
    footer: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '20px',
    },
});

export default function UserDialog({ open, onClose, user }: Props) {
    const css = useStyles();

    const loremCreator = (nr: number) => {
        const lorem = [];
        for (let i = 0; i < nr; i++) {
            lorem.push(
                <>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Pariatur, quaerat. Cupiditate facilis sequi labore
                        fugit eum veniam beatae, molestiae vero praesentium
                        natus harum ipsa ipsum accusamus. Repudiandae quidem id
                        blanditiis.
                    </p>
                    <br />
                </>
            );
        }
        return lorem;
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
            <DialogTitle id={user.id.toString()}>{user.name}</DialogTitle>
            <div className={css.main}>
                <div className={css.content} >{loremCreator(10)}</div>
                <div className={css.footer}>
                    <Button
                        size="large"
                        variant="contained"
                        color="success"
                        onClick={onClose}
                    >
                        Close
                    </Button>
                </div>
            </div>
        </Dialog>
    );
}

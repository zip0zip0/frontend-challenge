import {
    Typography,
    Dialog,
    Button,
    DialogContent,
    DialogActions,
    Paper,
} from '@mui/material';
import { User } from '../types/user';
import { makeStyles } from '@material-ui/core/styles';
import { DialogTitle } from '@material-ui/core';

type Props = {
    open: boolean;
    onClose: () => void;
    user: User;
};

const useStyles = makeStyles({
    content: {
        display: 'grid',
        marginTop: '20px',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '20px',
    },
    title: {
        fontSize: 14,
        marginTop: '20px',
    },
});

export default function UserDialog({ open, onClose, user }: Props) {
    const css = useStyles();

    const fieldCreator = (label: string, value: string) => {
        return (
            <Paper>
                <Typography
                    className={css.title}
                    color="textSecondary"
                    gutterBottom
                >
                    {label}
                </Typography>
                <Typography variant="h5" component="h2">
                    {value}
                </Typography>
            </Paper>
        );
    };

    const subFieldCreator = (label: string, value: string) => {
        return (
            <div>
                <Typography
                    className={css.title}
                    color="textSecondary"
                    gutterBottom
                >
                    {label}
                </Typography>
                <Typography variant="h5" component="h3">
                    {value}
                </Typography>
            </div>
        );
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
            <DialogTitle id={user.id.toString()}>Info</DialogTitle>
            <DialogContent>
                <div className={css.content}>
                    {fieldCreator('Name', user.name)}
                    {fieldCreator('Username', user.username)}
                    {fieldCreator('Email', user.email)}
                    {fieldCreator('Phone', user.phone)}
                    {fieldCreator('Website', user.website)}
                    {fieldCreator('Id', user.id.toString())}

                    <Paper className={css.content}>
                        <Typography variant="h5" component="h2">
                            Address
                        </Typography>
                        <br />
                        {subFieldCreator('Street', user.address.street)}
                        {subFieldCreator('Suite', user.address.suite)}
                        {subFieldCreator('City', user.address.city)}
                        {subFieldCreator('Zipcode', user.address.zipcode)}

                        <Paper>
                            <Typography variant="h5" component="h2">
                                Geo-location
                            </Typography>
                            <div className={css.content}>
                                {subFieldCreator('Lat', user.address.geo.lat)}
                                {subFieldCreator('Lng', user.address.geo.lng)}
                            </div>
                        </Paper>
                    </Paper>

                    <Paper className={css.content}>
                        <Typography variant="h5" component="h2">
                            Company
                        </Typography>
                        <br />
                        {subFieldCreator('Name', user.company.name)}
                        {subFieldCreator(
                            'Catch Phrase',
                            user.company.catchPhrase
                        )}
                        {subFieldCreator('Bs', user.company.bs)}
                    </Paper>
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    size="large"
                    variant="contained"
                    color="success"
                    onClick={onClose}
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}

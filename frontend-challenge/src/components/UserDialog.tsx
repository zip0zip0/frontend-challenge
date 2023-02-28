import { Card, CardContent, Typography, Dialog } from '@mui/material';
import { User } from '../types/user';
type Props = {
    open: boolean;
    onClose: () => void;
    user: User;
};

export default function UserDialog({ open, onClose, user }: Props) {
    return (
        <Dialog open={open} onClose={onClose}>
            <Card sx={{ maxWidth: 345, marginBottom: 2, borderRadius: 5 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {user.company.name}
                    </Typography>
                </CardContent>
            </Card>
        </Dialog>
    );
}

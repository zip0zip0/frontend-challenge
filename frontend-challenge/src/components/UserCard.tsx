import { Card, CardContent, Typography } from '@mui/material';
import { User } from '../types/user';

export default function UserCard({ user }: {user: User}) {
    return (
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
    );
}

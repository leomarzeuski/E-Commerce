import { Divider, Grid } from '@mui/material';

interface IComments {
    comments: {
        postId: number;
        id: number;
        name: string;
        email: string;
        body: string;
    }
}

export default function CommentBox({ comments }: IComments) {
    return (
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <h3>user: {comments.name}</h3>
            </Grid>
            <Grid item>
                <h5>email: {comments.email}</h5>
            </Grid>
            <Grid item>
                <p> comentário: {comments.body}</p>
            </Grid>
            <Grid item>
                <Divider />
            </Grid>
        </Grid>
    )
}

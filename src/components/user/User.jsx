import styles from "./User.module.scss";
import classNames from "classnames";
import { Avatar, Container, Grid, Typography } from "@mui/material";

export default function User({ avatar, username, size }) {
    return (
        <div className={classNames(styles['user-container'])}>
            <Container maxWidth="xs">
                <Grid container spacing={1}>
                    <Grid item>
                        <Avatar alt="Avatar picture" src={avatar} sx={{ width: size, height: size }} />
                    </Grid>
                    <Grid item className={classNames(styles['username-container'])}>
                        <Typography fontWeight={"bold"}>{username}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
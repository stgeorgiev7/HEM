import styles from "./User.module.scss";
import classNames from "classnames";
import { Avatar, Container, Grid, Typography } from "@mui/material";

export default function User({ avatar, name, size = 55, headingSize, hasWelcome = false }) {
    return (
        <div className={classNames(styles['user-container'])}>
            <Container disableGutters maxWidth="xs">
                <Grid container spacing={1}>
                    <Grid item>
                        <Avatar alt="Avatar picture" src={avatar ? avatar : 'images/avatar.png'} sx={{ width: size, height: size }} />
                    </Grid>
                    <Grid item className={classNames(styles['username-container'])}>
                        <Typography variant={headingSize} fontWeight={"bold"}>{name}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
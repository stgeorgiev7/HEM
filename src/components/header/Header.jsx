import classNames from "classnames";
import styles from "./Header.module.scss";
import { Paper, Grid, Typography } from "@mui/material";

export default function Header({ left, right }) {

    return (
        <div className={classNames(styles["header-wrapper"])}>
            <Paper className={classNames(styles["header-paper"])}>
                <Grid container direction="row" columns={12}>
                    <Grid item xs={6} className={classNames(styles["left"])}>
                        <Typography className={classNames(styles["hello"])}>Welcome home</Typography>
                        {left}
                    </Grid>

                    <Grid item xs={6} className={classNames(styles["right"])}>
                        {right}
                    </Grid>
                </Grid>

            </Paper>
        </div>
    )
}
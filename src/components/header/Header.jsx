import classNames from "classnames";
import styles from "./Header.module.scss";
import { Paper, Grid, Typography } from "@mui/material";

export default function Header({ left, right }) {

    return (
        <div className={classNames(styles["header-wrapper"])}>
            <Paper className={classNames(styles["header-paper"])}>
                <Grid container direction='row'>
                    <Grid item xs={6}>
                        <Typography className={classNames(styles["hello"])}>Welcome home,</Typography>
                        {left}
                    </Grid>

                    {right}            

                </Grid>


            </Paper>
        </div>
    )
}
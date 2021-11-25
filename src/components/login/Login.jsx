import styles from "./Login.module.scss";
import classNames from "classnames";
import { Button, Paper, TextField } from "@mui/material";

export default function Login() {
    return (
        <div className={classNames(styles['login-form'])}>
            <Paper className={classNames(styles.paper)}>
                <TextField sx={{ margin: "15px 15px 7.5px 15px" }} variant="outlined" />
                <TextField sx={{ margin: "7.5px 15px" }} variant="outlined" />
                <Button variant="contained" sx={{ margin: "7.5px 15px 15px 15px" }} > Login</Button>
            </Paper>
        </div>
    )
}
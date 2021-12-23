import styles from "./Login.module.scss";
import classNames from "classnames";
import { Button, InputAdornment, Paper, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

export default function Login() {
    return (
        <div className={classNames(styles["login-form"])}>
            <Paper className={classNames(styles.paper)}>
                <TextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon
                                    className={classNames(styles["icon"])}
                                />
                            </InputAdornment>
                        ),
                    }}
                    required
                    placeholder="Email"
                    variant="outlined"
                />

                <TextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon
                                    className={classNames(styles["icon"])}
                                />
                            </InputAdornment>
                        ),
                    }}
                    required
                    placeholder="Password"
                    variant="outlined"
                />
                <Button variant="contained"> Login</Button>
            </Paper>
        </div>
    );
}

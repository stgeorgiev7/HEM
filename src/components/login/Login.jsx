import styles from "./Login.module.scss";
import classNames from "classnames";
import { Button, InputAdornment, Paper, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

export default function Login({ onSubmit, setEmail, setPassword }) {
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    return (
        <div className={classNames(styles["login-form"])}>
            <Paper className={classNames(styles.paper)}>
                <TextField
                    onChange={handleEmail}
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
                    type="email"
                    placeholder="Email"
                    variant="outlined"
                />

                <TextField
                    onChange={handlePassword}
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
                    type="password"
                    placeholder="Password"
                    variant="outlined"
                />
                <Button onClick={onSubmit} variant="contained">
                    {" "}
                    Login
                </Button>
            </Paper>
        </div>
    );
}

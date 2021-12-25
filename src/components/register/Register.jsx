import { useState } from "react";
import styles from "./Register.module.scss";
import classNames from "classnames";
import { Button, InputAdornment, Paper, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

export default function Register({ onSubmit }) {
    const [userName, setUser] = useState();
    const [password, setPassword] = useState();
    const [retypedpass, setRetype] = useState();

    function handleUserChange(event) {
        setUser(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleRetypedPassChange(event) {
        setRetype(event.target.value);
    }

    async function registerUser() {
        const user = {
            email: userName,
            password: password,
        };

        await fetch("https://hem-api.herokuapp.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        }).then((response) => {
            response.status === 200
                ? alert(`Success! User ${userName} Registered`)
                : alert("Failed, try again!");
        });
    }

    return (
        <div className={classNames(styles["register-form"])}>
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
                    type="email"
                    placeholder="Email"
                    variant="outlined"
                    value={userName}
                    onChange={handleUserChange}
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
                    type="password"
                    placeholder="Password"
                    variant="outlined"
                    value={password}
                    onChange={handlePasswordChange}
                />

                <TextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" label="qsa">
                                <LockIcon
                                    className={classNames(styles["icon"])}
                                />
                            </InputAdornment>
                        ),
                    }}
                    required
                    type="password"
                    placeholder="Retype Password"
                    variant="outlined"
                    value={retypedpass}
                    onChange={handleRetypedPassChange}
                />
                <Button
                    variant="contained"
                    onClick={registerUser}
                    onSubmit={onSubmit}>
                    Register
                </Button>
            </Paper>
        </div>
    );
}

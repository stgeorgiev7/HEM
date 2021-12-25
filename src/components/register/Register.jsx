import { useState, useEffect } from "react";
import styles from "./Register.module.scss";
import classNames from "classnames";
import { Button, InputAdornment, Paper, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

export default function Register({ onSubmit, setUser, setPassword, setRetype }) {

    function handleUserChange(event) {
        setUser(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleRetypedPassChange(event) {
        setRetype(event.target.value);
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
                    onChange={handleRetypedPassChange}
                />
                <Button
                    variant="contained"
                    onSubmit={onSubmit}>
                    Register
                </Button>
            </Paper>
        </div>
    );
}

import { useState, useEffect } from "react";
import styles from "./RegisterPage.module.scss";
import classNames from "classnames";
import { Paper, Container, Typography } from "@mui/material";
import Register from "../../src/components/register/Register";
import Link from "../../src/components/link/Link";

export default function RegisterPage() {
    const [userName, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [retypedpass, setRetype] = useState("");

    async function registerUser() {
        if (password === retypedpass) {
            await fetch("https://hem-api.herokuapp.com/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    'email': `${userName}`,
                    'password': `${password}`,
                }),
            })
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    alert(`Success ! ${userName} Registered!`);
                }
            });
        } else {
            alert("Password doesn`t match!")
        }

        
    }

    return (
        <div className={classNames(styles["wrapper"])}>
            <Container
                className={classNames(styles["container"])}
                maxWidth="xl">
                <Paper className={classNames(styles["paper"])}>
                    <Register
                        onSubmit={registerUser}
                        setUser={setUser}
                        setPassword={setPassword}
                        setRetype={setRetype}
                    />
                </Paper>
                <Typography className={classNames(styles["text"])}>
                    Already registered? <Link href="/login">Go to login.</Link>
                </Typography>
            </Container>
        </div>
    );
}

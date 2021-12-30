import styles from "./LoginPage.module.scss";
import classNames from "classnames";
import { Paper, Container } from "@mui/material";
import Login from "../../src/components/login/Login";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function loginUser() {
        const res = await fetch("https://hem-api.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: `${email}`,
                password: `${password}`,
            }),
        });

        if (res.ok) {
            const data = await res.json();
            localStorage.setItem("accessToken", data["accessToken"]);
        }
    }

    return (
        <div className={classNames(styles.wrapper)}>
            <Container className={classNames(styles.container)} maxWidth="xl">
                <Paper className={classNames(styles.paper)}>
                    <Login
                        onSubmit={loginUser}
                        setEmail={setEmail}
                        setPassword={setPassword}
                    />
                </Paper>
            </Container>
        </div>
    );
}

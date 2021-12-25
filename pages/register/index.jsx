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
        await fetch("https://hem-api.herokuapp.com/register", {
            method: "POST",
            body: JSON.stringify({
                "email": `${userName}`,
                "password": `${password}`,
            }),
        }).then((response) => {
            if (response.status === 200) {
                alert(`Success ! ${userName} Registered!`);
            }
        });
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

import styles from "./RegisterPage.module.scss";
import classNames from "classnames";
import { Paper, Container, Typography } from "@mui/material";
import Register from "../../src/components/register/Register";
import Link from "../../src/components/link/Link";

export default function RegisterPage() {
    return (
        <div className={classNames(styles["wrapper"])}>
            <Container
                className={classNames(styles["container"])}
                maxWidth="xl">
                <Paper className={classNames(styles["paper"])}>
                    <Register />
                </Paper>
                <Typography className={classNames(styles["text"])}>
                    Already registered? <Link href="/login">Go to login.</Link>
                </Typography>
            </Container>
        </div>
    );
}

import styles from "./RegisterPage.module.scss";
import classNames from "classnames";
import { Paper, Container } from "@mui/material";
import Register from "../../src/components/register/Register";

export default function RegisterPage() {
    return (
        <div className={classNames(styles["wrapper"])}>
            <Container
                className={classNames(styles["container"])}
                maxWidth="xl">
                <Paper className={classNames(styles["paper"])}>
                    <Register />
                </Paper>
            </Container>
        </div>
    );
}

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Weather from "../weather/Weather";
import User from "../user/User";

export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Paper className={classNames(styles.paper)}>
            <Weather type={"rainy"} degrees={22}/>
        </Paper>
      </Container>
    </div>
  );
}

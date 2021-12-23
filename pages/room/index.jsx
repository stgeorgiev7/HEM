import styles from "./Room.module.scss";
import classNames from "classnames";
import { Container, Grid, Paper, Typography } from "@mui/material";
import Navigation from "../../src/components/navigation/Navigation.jsx";
import Header from "../../src/components/header/Header.jsx";
import Devices from "../../src/components/devices/Devices.jsx";
import Cameras from "../../src/components/cameras/Cameras.jsx";

export default function Index() {
    const room = <Typography variant="h1">Living room</Typography>;

    return (
        <Container className={classNames(styles["container-wrapper"])}>
            <Paper className={classNames(styles["paper"])}></Paper>
            <Navigation />
            <Grid container className={classNames(styles["grid-wrapper"])}>
                <Grid
                    item
                    xs={12}
                    className={classNames(styles["header-container"])}>
                    <Header left={room} />
                </Grid>
                <Grid item xs={6}>
                    <Typography
                        variant="h4"
                        className={classNames(styles["title"])}>
                        Devices
                    </Typography>
                    <Devices
                        devices={[
                            { iconUrl: "/images/bulb.svg", title: "off" },
                            { iconUrl: "/images/bulb.svg", title: "off" },
                            { iconUrl: "/images/bulb.svg", title: "off" },
                            { iconUrl: "/images/bulb.svg", title: "off" },
                            { iconUrl: "/images/bulb.svg", title: "off" },
                        ]}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography
                        variant="h4"
                        className={classNames(styles["title"])}>
                        Cameras
                    </Typography>
                    <Cameras />
                </Grid>
            </Grid>
        </Container>
    );
}

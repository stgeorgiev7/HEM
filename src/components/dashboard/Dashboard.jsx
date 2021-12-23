import styles from "./Dashboard.module.scss";
import classNames from "classnames";
import { Container, Grid, Typography } from "@mui/material";
import Navigation from "../navigation/Navigation";
import Header from "../header/Header";
import Weather from "../weather/Weather";
import Time from "../time/Time";
import User from "../user/User";
import Thermostat from "../thermostat/Thermostat";
import Scenes from "../scenes/Scenes";
import Cameras from "../cameras/Cameras";
import Energy from "../energy/Energy";

export default function Dashboard() {
    return (
        <div className={classNames(styles["dashboard"])}>
            <Container
                className={classNames(styles["container"])}
                maxWidth="xl">
                <Grid container>
                    <Grid item>
                        <Navigation />
                    </Grid>

                    <Grid item xs={12}>
                        <Header
                            left={<User name={"John Doe"} />}
                            right={[
                                <Weather
                                    degrees={3}
                                    type="snowy"
                                    key={"weather"}
                                />,
                                <Time key={"time"} />,
                            ]}
                        />
                    </Grid>
                </Grid>

                <Grid container maxWidth="xl">
                    <Grid item xs={6}>
                        <Thermostat
                            data={[
                                { temperature: 25, hour: 12 },
                                { temperature: 13, hour: 13 },
                                { temperature: 14, hour: 14 },
                                { temperature: 15, hour: 15 },
                                { temperature: 15, hour: 16 },
                                { temperature: 10, hour: 17 },
                            ]}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Scenes
                            cards={[
                                { iconUrl: "/images/morning.svg" },
                                { iconUrl: "/images/alarm-clock.svg" },
                                { iconUrl: "/images/shower.svg" },
                                { iconUrl: "/images/tea-cup.svg" },
                                { iconUrl: "/images/rock.svg" },
                                { iconUrl: "/images/plus.svg", outlined: true },
                            ]}
                        />
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={6} md={6}>
                        <Cameras />
                    </Grid>

                    <Grid item xs={6} md={6}>
                        <Energy
                            data={[
                                { energy: 25, hour: 12 },
                                { energy: 13, hour: 13 },
                                { energy: 14, hour: 14 },
                                { energy: 15, hour: 15 },
                                { energy: 15, hour: 16 },
                                { energy: 10, hour: 17 },
                            ]}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

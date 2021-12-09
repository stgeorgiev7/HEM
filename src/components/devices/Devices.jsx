import styles from "./Devices.module.scss"
import classNames from "classnames"
import { Grid, Typography } from "@mui/material";
import Card from "../card/Card";

export default function Devices({ devices }) {
    return (
        <div className={classNames(styles["devices-wrapper"])}>
            <Typography variant="h4" className={classNames(styles["devices-title"])}>Devices</Typography>
            <Grid container spacing={3} >
                <Grid item >
                    <Card iconUrl={"images/bulb.svg"} variant="on"></Card>
                </Grid>
                <Grid item >
                    <Card iconUrl={"images/bulb.svg"} variant="off"></Card>
                </Grid>
                <Grid item >
                    <Card iconUrl={"images/plug.svg"} variant="off"></Card>
                </Grid>
                <Grid item>
                    <Card iconUrl={"images/plug.svg"} variant="offline"></Card>
                </Grid>
                <Grid item>
                    <Card iconUrl={"images/plus.svg"} outlined></Card>
                </Grid>
            </Grid>
        </div>
    )
}
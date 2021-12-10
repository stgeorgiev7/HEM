import styles from "./Devices.module.scss"
import classNames from "classnames"
import { Grid, Typography } from "@mui/material";
import Card from "../card/Card";

export default function Devices({ devices }) {
    return (
        <div className={classNames(styles["devices-wrapper"])}>
            <Typography variant="h4" className={classNames(styles["devices-title"])}>Devices</Typography>
            <Grid container spacing={3} >
                {devices && devices.map(device => {
                    return <Grid item >
                        <Card iconUrl={device.iconUrl} variant={device.title} title={device.title}></Card>
                    </Grid>
                })
                }
                {/* <Grid item>
                    <Card iconUrl={"images/plus.svg"} outlined></Card>
                </Grid> */}
            </Grid>
        </div>
    )
}
import styles from "./Devices.module.scss"
import classNames from "classnames"
import { Grid, Typography } from "@mui/material";
import Card from "../card/Card";

export default function Devices({ devices }) {
    return (
        <div className={classNames(styles["devices-wrapper"])}>
            <Grid container spacing={2} >
                {devices && devices.map(device => {
                    return <Grid item sx={{ width: "13rem", height: "12rem" }}>
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
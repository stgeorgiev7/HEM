import styles from "./Rooms.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";
import Card from "../card/Card";

export default function Rooms({ rooms }) {
    return (
        <div className={classNames(styles["rooms-wrapper"])}>
            <Grid container spacing={3}>
                <Grid item>
                    <Card iconUrl={"images/rock.svg"} title="add room"></Card>
                </Grid>
                <Grid item>
                    <Card iconUrl={"images/shower.svg"} title="add room"></Card>
                </Grid>
                <Grid item>
                    <Card iconUrl={"images/tea-cup.svg"} title="add room"></Card>
                </Grid>
                <Grid item>
                    <Card iconUrl={"images/morning.svg"} title="add room"></Card>
                </Grid>
                <Grid item>
                    <Card iconUrl={"images/morning.svg"} title="add room"></Card>
                </Grid>
                <Grid item>
                    <Card iconUrl={"images/plus.svg"} outlined title="add room"></Card>
                </Grid>
            </Grid>
        </div>
    )
}
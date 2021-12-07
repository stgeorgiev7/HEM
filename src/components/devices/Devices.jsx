import styles from "./Devices.module.scss"
import classNames from "classnames"
import { Grid } from "@mui/material";
import Card from "../card/Card";

export default function Devices({ devices }) {
    return (
        <Grid container spacing={3} maxWidth="850px">
            <Grid item >
                <Card iconUrl={"images/rock.svg"} title="add room"></Card>
            </Grid>
            <Grid item >
                <Card iconUrl={"images/rock.svg"} title="add room"></Card>
            </Grid>
            <Grid item >
                <Card iconUrl={"images/plus.svg"} outlined></Card>
            </Grid>
            <Grid item>
                <Card iconUrl={"images/plus.svg"} outlined></Card>
            </Grid>
            <Grid item>
                <Card iconUrl={"images/plus.svg"} outlined></Card>
            </Grid>
        </Grid>
    )
}
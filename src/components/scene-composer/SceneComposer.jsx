import styles from "./SceneComposer.module.scss"
import classNames from "classnames"
import { Grid } from "@mui/material"
import roomsData from "../../../data/rooms.json"
import devicesData from "../../../data/devices.json"
import Scenes from "../scenes/Scenes"

export default function SceneComposer({ devices, rooms, selected, onScene }) {
    return (
        <Grid container>
            <Scenes cards={devicesData.devices} />
        </Grid>
    )
}
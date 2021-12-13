import styles from "./SceneComposer.module.scss"
import classNames from "classnames"
import { Grid, Typography } from "@mui/material"

import Scenes from "../scenes/Scenes"
import { useMemo } from "react"

export default function SceneComposer({ devices, rooms, selected, onScene }) {

    // useMemo(() => {
    //     rooms.rooms.map(room => {
    //         const devicesInRoom = devices.devices.filter(device => room.id === device.roomId)
    //         const cards = []

    //         devicesInRoom.forEach(dev => {
    //             cards.push({
    //                 "iconUrl": dev.iconUrl,
    //                 "title": dev.name,
    //                 "variant": "on"
    //             })
    //             cards.push({
    //                 "iconUrl": dev.iconUrl,
    //                 "title": dev.name,
    //                 "variant": "off"
    //             })
    //         })
    //     })
    // })

    return (
        <Grid container>
            {rooms.rooms.map(room => {
                const filteredDevices = devices.devices.filter(device => room.id === device.roomId)
                const cards = []

                filteredDevices.forEach(dev => {
                    cards.push({
                        "iconUrl": dev.iconUrl,
                        "title": dev.name,
                        "variant": "on"
                    })
                    cards.push({
                        "iconUrl": dev.iconUrl,
                        "title": dev.name,
                        "variant": "off"
                    })
                })

                return (
                    <Grid item xs={12} key={room.id}>
                        <Typography variant="h4">{room.name}</Typography>
                        <Scenes cards={cards} />
                    </Grid>
                )
            })}
        </Grid>
    )
}
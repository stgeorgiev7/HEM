import styles from "./SceneComposer.module.scss"
import classNames from "classnames"
import { Grid, Typography } from "@mui/material"
import Scenes from "./Scenes"
import { useMemo } from "react"
import { useState } from "react"

export default function SceneComposer({ devices, rooms, selected, onScene }) {
    const [roomCards, setRoomCards] = useState();

    useMemo(() => {
        const data = rooms.map(room => {
            return {
                "id": room.id,
                "name": room.name,
                "cards": getCardsForRoom(room.id)
            }
        })

        setRoomCards(data)
    }, [devices, rooms])

    function getCardsForRoom(roomId) {
        const devicesInRoom = devices.filter(device => device.roomId === roomId)
        const cards = []

        devicesInRoom.forEach(dev => {
            cards.push({
                "iconUrl": dev.iconUrl,
                "outlined": selected ? true : false,
                "title": dev.name,
                "variant": "on"
            })
            cards.push({
                "iconUrl": dev.iconUrl,
                "title": dev.name,
                "variant": "off"
            })
        })
        return cards;
    }

    return (
        <Grid container>
            {roomCards && roomCards.map(room => {
                return (
                    <Grid item xs={12} key={room.id}>
                        <Typography variant="h4">{room.name}</Typography>
                        <Scenes cards={room.cards} />
                    </Grid>
                )
            })}
        </Grid>
    )
}
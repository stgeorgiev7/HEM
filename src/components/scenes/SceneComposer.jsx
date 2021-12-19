import styles from "./SceneComposer.module.scss"
import classNames from "classnames"
import { Grid, Typography } from "@mui/material"
import Scenes from "./Scenes"
import { useMemo } from "react"

export default function SceneComposer({ devices, rooms, selected, onScene }) {

    const roomCards = useMemo(() => {
        return rooms.map(room => {
            return {
                "id": room.id,
                "name": room.name,
                "cards": getDevicesCardsForCurrentRoom(room.id, devices),
            }
        })

        function getDevicesCardsForCurrentRoom(roomId, devices) {
            const devicesInRoom = devices.filter(device => device.roomId === roomId)
            const cards = []
            let id = 1;

            devicesInRoom.forEach(dev => {
                cards.push({
                    "id": id++,
                    "iconUrl": dev.iconUrl,
                    "title": dev.name,
                    "variant": "on",
                    "outline": dev.id === selected?.id ? true : false 
                })
                cards.push({
                    "id": id++,
                    "iconUrl": dev.iconUrl,
                    "title": dev.name,
                    "variant": "off",
                })
            })
            return cards;
        }
    }, [devices, rooms])

    return (
        <Grid container>
            {roomCards && roomCards.map(room => {
                return (
                    <Grid item xs={12} key={room.id}>
                        <Typography variant="h4">{room.name}</Typography>
                        <Scenes cards={room.cards} selected={selected} onClick={() => console.log("dsadsadas")}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}
import styles from "./SceneComposer.module.scss"
import classNames from "classnames"
import { Grid, Typography } from "@mui/material"
import Scenes from "./Scenes"
import { useMemo } from "react"
import { useState } from "react"

export default function SceneComposer({ devices, rooms, selected, onScene, checkSelect }) {
    const [roomCards, setRoomCards] = useState();

    console.log(selected);

    function handleClick(e) {
        console.log(e.target);
        checkSelect(e.target.id);
    };

    useMemo(() => {
        const data = rooms.map(room => {

            return {
                "id": room?.id,
                "name": room?.name,
                "cards": getCardsForRoom(room.id),
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
                "title": dev.name,
                "variant": "on",
                "outlined": selected?.id === dev?.id ? true : false

            })
            cards.push({
                "iconUrl": dev.iconUrl,
                "title": dev.name,
                "variant": "off",
                "outlined": selected?.id === dev?.id ? true : false

            })
        })
        return cards;
    }

    console.log(roomCards);
    console.log(selected)

    return (
        <Grid container>
            {roomCards && roomCards.map(room => {
                return (
                    <Grid item xs={12} key={room.id}>
                        <Typography variant="h4">{room.name}</Typography>
                        <Scenes cards={room.cards} onClick={handleClick} />
                    </Grid>
                )
            })}
        </Grid>
    )
}
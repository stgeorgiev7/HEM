import styles from "./SceneComposer.module.scss"
import classNames from "classnames"
import { Grid, Typography } from "@mui/material"
import Scenes from "./Scenes"
import { useMemo, useEffect } from "react"

export default function SceneComposer({ devices, rooms, selected, onScene }) {

    const roomCards = useMemo(() => {
        let id = 1;

        const roomDiveces = rooms.map(room => {
            const cards = [];
            const cardsForCurrentRoom = devices.filter(device => device?.roomId === room?.id);
       
            // const cards = [...cardsForCurrentRoom];

            cardsForCurrentRoom.forEach(device => {
                cards.push(
                    {
                        "id": id++,
                        "iconUrl": device.iconUrl,
                        "title": device.name,
                        "variant": "on"
                    },
                    {
                        "id": id++,
                        "iconUrl": device.iconUrl,
                        "title": device.name,
                        "variant": "off"
                    },
                )
            })

            return {
                "id": room.id,
                "name": room.name,
                "cards": cards
            }
        });
       

        return roomDiveces
    }, [devices, rooms])

    console.log(roomCards);


    return (
        <Grid container>
            {roomCards && roomCards.map(room => {
                return (
                    <Grid item xs={12} key={room.id}>
                        <Typography variant="h4">{room.name}</Typography>
                        <Scenes cards={room} selected={selected} />
                    </Grid>
                )
            })}
        </Grid>
    )
}
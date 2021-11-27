import styles from "./Time.module.scss";
import classNames from "classnames";
import { Container, Typography } from "@mui/material";
import { useState, useEffect } from 'react'

export default function Time() {
    const [date, setDate] = useState(new Date());
    const [hours, setHours] = useState(date.getHours());
    const [mins, setMins] = useState(date.getMinutes());

    function refreshClock() {
        setDate(new Date());
        setHours(date.getHours())
        setMins(date.getMinutes())
    }

    useEffect(() => {
        setInterval(refreshClock, 1000);
    }, []);

    return (
        <div className={classNames(styles['time-wrapper'])}>
            <Container sx={{ display: "flex" }} className={classNames(styles['time-container'])} maxWidth="xs">
                <Typography className={classNames(styles['time-text'])}>Time</Typography>
                <Typography variant={"h1"}>{hours}:{mins}</Typography>
            </Container>
        </div>
    )
}
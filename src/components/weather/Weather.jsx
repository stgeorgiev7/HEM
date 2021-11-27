import { Typography, Stack } from "@mui/material";
import classNames from "classnames";
import styles from "./Weather.module.scss";

export default function Weather({ degrees, type }) {

    const icons = {
        cloudy: "/images/cloudy.svg",
        rainy: "/images/rainy.svg",
        stormy: "/images/stormy.svg",
        snowy: "/images/snowy.svg",
        sunny: "/images/sunny.svg"
    };

    return (
        <div className={classNames(styles["weather-wrapper"])}>
            <img src={icons[type]} className={classNames(styles["weather-icon"])}></img>
            <Stack>
                <Typography className={classNames(styles["weather"])}>Weather</Typography>
                <Typography sx={{ fontSize: "60px", fontWeight: 900, lineHeight:"70px" }}>{degrees}&deg;</Typography>
            </Stack>

        </div>);

}
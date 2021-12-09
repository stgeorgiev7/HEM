import styles from "./Card.module.scss"
import classNames from "classnames"
import { Card as CardContainer, Chip, Typography } from "@mui/material";

export default function Card({ iconUrl, outlined = false, onClick, title, variant }) {
    const variantMap = {
        "on": "device-on",
        "off": "device-off",
        "offline": "device-offline"
    }

    return (
        <div className={classNames(styles["card"])}>
            <CardContainer className={classNames(styles[variantMap[variant]])}
                onClick={onClick}
                sx={outlined ? { border: "5px solid #7441F3", width: "100%" } : { border: 'none', width: "100%" }}>
                {variant === "offline" && <Chip icon label="!" />}
                {iconUrl && <img src={iconUrl} ></img>}
                {title && <Typography className={classNames(styles["text"])}>{title}</Typography>}
                {variant && <Typography className={classNames(styles["text"])}>{variant}</Typography>}
            </CardContainer>
        </div >
    )
}
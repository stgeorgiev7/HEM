import styles from "./Card.module.scss"
import classNames from "classnames"
import { Card as CardContainer, CardMedia, Typography } from "@mui/material";
import { CardContent } from "@mui/material";

export default function Card({ iconUrl, outlined = false, onClick, title, variant }) {

    return (
        <div className={classNames(styles["card"])}>
            <CardContainer
                onClick={onClick}
                sx={outlined ? { border: "5px solid #7441F3", width: "100%" } : { border: 'none', width: "100%" }}>
                {iconUrl && <img src={iconUrl} className={classNames(styles["card-image"])}></img>}
                {title && <Typography className={classNames(styles["title"])}>{title}</Typography>}
            </CardContainer>
        </div>
    )
}
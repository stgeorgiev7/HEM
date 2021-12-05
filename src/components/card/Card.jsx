import styles from "./Card.module.scss"
import classNames from "classnames"
import { Card as CardContainer, CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";

export default function Card({ iconUrl, outlined = false, onClick, videoUrl }) {

    return (
        <div className={classNames(styles["card"])}>
            <CardContainer
                onClick={onClick}
                sx={outlined ? { border: "5px solid #7441F3", width: "100%" } : { border: 'none', width: "100%" }}>
                {videoUrl && <video src={videoUrl} className={classNames(styles["card-video"])} />}
                {iconUrl && <img src={iconUrl} className={classNames(styles["card-image"])}></img>}
            </CardContainer>
        </div>
    )
}
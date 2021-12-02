import styles from "./Card.module.scss"
import classNames from "classnames"
import { Card as CardContainer} from "@mui/material";
import { CardContent } from "@mui/material";

export default function Card({iconUrl, outlined=false}) {

    return (
        <div className={classNames(styles["card"])}>
            <CardContainer
             sx={ outlined ? {border: "3px solid #7441F3"} : {border:'none'}}>
                <CardContent>
                    {iconUrl ? <img className={classNames(styles["card-image"])} src={iconUrl}></img> : <img></img> }
                </CardContent>
            </CardContainer>
        </div>
    )
}
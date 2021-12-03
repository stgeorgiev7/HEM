import styles from "./Scenes.module.scss";
import classNames from "classnames";
import Card from "../card/Card";
import { Grid } from "@mui/material";

export default function Scenes({ cards = [] }) {

    return (
        <div className={classNames(styles["scenes-container"])}>
            <Grid container>
                {
                    cards.map((card, index) => {
                        return (
                            <Grid item>
                                <Card iconUrl={card.iconUrl} outlined={card.outlined} key={index} />

                            </Grid>
                        );
                    })
                }

            </Grid>
        </div>
    )
}
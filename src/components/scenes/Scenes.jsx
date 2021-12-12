import styles from "./Scenes.module.scss";
import classNames from "classnames";
import Card from "../card/Card";
import { Grid, Container } from "@mui/material";

export default function Scenes({ cards = [] }) {

    return (
        <div className={classNames(styles["scenes-container"])}>
            <Grid container>
                {
                    cards.map((card, index) => {
                        return (
                            <Grid item xs={4} justifyContent="space-between" className={classNames(styles["card"])} key={index}>
                                    <Card iconUrl={card.iconUrl} outlined={card.outlined} key={index} />
                            </Grid>
                        );
                    })
                }

            </Grid>
        </div>
    )
}
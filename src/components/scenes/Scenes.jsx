import styles from "./Scenes.module.scss";
import classNames from "classnames";
import Card from "../card/Card";
import { Grid } from "@mui/material";

export default function Scenes({ cards = [], selected }) {
    return (
        <div className={classNames(styles["scenes-container"])}>
            <Grid container >
                {cards.map((card, index) => {
                    return (
                        <Grid item xs={4} className={classNames(styles["card"])} key={index}>
                            <Card
                                iconUrl={card.iconUrl}
                                variant={card.variant}
                                title={card.title}
                                outlined={card.id === selected?.id ? true : false} />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    )
} 
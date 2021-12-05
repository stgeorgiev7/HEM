import styles from "./Cameras.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";
import Card from "../card/Card";
import { useEffect, useState } from "react";

export default function Cameras({ cameras, hasButton = false }) {
    const [video, setVideo] = useState('videos/bathroom.mp4') // default state should be the first video from cameras arr ??? 

    const changeVideo = (event) => {
        const src = event.target.getAttribute('src')
        event.target.setAttribute("autoplay", true);
        setVideo(src)
    }

    return (
        <div className={classNames(styles["container"])}>
            <Grid container className={classNames(styles["cameras-container"])}>
                <Grid item xs={8} className={classNames(styles["video-player"])}>
                    <Card videoUrl={video}></Card>
                </Grid>
                <Grid container item xs={4} className={classNames(styles["items"], hasButton ? styles['scrolable'] : '')}>
                    {/* {cameras && cameras.map(el =>
                    (<Grid item xs={5} onClick={getSrc} className={classNames(styles["video-item"])}>
                        <Card videoUrl={el.videoUrl}></Card>
                    </Grid>))} */}
                    <Grid item xs={5} onClick={changeVideo} className={classNames(styles["video-item"])}>
                        <Card videoUrl={'videos/front-door.mp4'}></Card>
                    </Grid>
                    <Grid item xs={5} onClick={changeVideo} className={classNames(styles["video-item"])}>
                        <Card videoUrl={'videos/front-door.mp4'}></Card>
                    </Grid>
                    <Grid item xs={5} onClick={changeVideo} className={classNames(styles["video-item"])}>
                        <Card videoUrl={'videos/front-door.mp4'}></Card>
                    </Grid>
                    <Grid item xs={5} onClick={changeVideo} className={classNames(styles["video-item"])}>
                        <Card videoUrl={'videos/garden.mp4'}></Card>
                    </Grid>
                    <Grid item xs={5} onClick={changeVideo} className={classNames(styles["video-item"])}>
                        <Card videoUrl={'videos/kitchen.mp4'} ></Card>
                    </Grid>
                    <Grid item xs={5} onClick={changeVideo} className={classNames(styles["video-item"])}>
                        <Card videoUrl={'videos/balcony.mp4'} ></Card>
                    </Grid>
                    {hasButton &&
                        <Grid item className={classNames(styles["btn"])}>
                            <Card iconUrl={'images/plus.svg'} outlined></Card>
                        </Grid>}
                </Grid>
            </Grid>
        </div>
    )
}
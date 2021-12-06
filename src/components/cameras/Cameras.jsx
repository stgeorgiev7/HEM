import styles from "./Cameras.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";
import Card from "../card/Card";
import { useEffect, useState } from "react";

export default function Cameras({ cameras, hasButton }) {
    const [videoUrl, setVideoUrl] = useState('videos/bathroom.mp4') // default state should be the first video from cameras arr ??? 

    const changeVideo = (event) => {
        const src = event.target.getAttribute('src')
        setVideoUrl(src)
    }

    useEffect(() => {
        const video = document.querySelector('video')
        video.autoplay = true;
        video.load();
    }, [videoUrl])

    return (
        <div className={classNames(styles["container"])}>
            <Grid container className={classNames(styles["cameras-container"])}>
                <Grid item xs={8} >
                    <video src={videoUrl} className={classNames(styles["video-player"])}></video>
                </Grid>
                <Grid container item xs={4} className={classNames(styles["items"], hasButton ? styles['scrolable'] : '')}>
                    <Grid item xs={5} onClick={changeVideo}>
                        <video src={'videos/front-door.mp4'} className={classNames(styles["video-item"])}></video>
                    </Grid>
                    <Grid item xs={5} onClick={changeVideo} >
                        <video src={'videos/front-door.mp4'} className={classNames(styles["video-item"])}></video>
                    </Grid>
                    <Grid item xs={5} onClick={changeVideo} >
                        <video src={'videos/front-door.mp4'} className={classNames(styles["video-item"])}></video>
                    </Grid>
                    <Grid item xs={5} onClick={changeVideo} >
                        <video src={'videos/garden.mp4'} className={classNames(styles["video-item"])}></video>
                    </Grid>
                    <Grid item xs={5} onClick={changeVideo} >
                        <video src={'videos/kitchen.mp4'} className={classNames(styles["video-item"])}></video>
                    </Grid>
                    <Grid item xs={5} onClick={changeVideo} >
                        <video src={'videos/balcony.mp4'} className={classNames(styles["video-item"])}></video>
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
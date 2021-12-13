import styles from "./Cameras.module.scss";
import classNames from "classnames";
import { Grid, Typography } from "@mui/material";
import Card from "../card/Card";
import { useEffect, useState, useRef } from "react";

export default function Cameras({ cameras, hasButton }) {
    const [videoUrl, setVideoUrl] = useState('videos/bathroom.mp4') // default state should be the first video from cameras arr ??? 
    const [selectedElement, setSelectedElement] = useState();
    const element = useRef();

    const changeVideo = (event) => {
        getVideoUrl(event);
        selectVideo(event);
    }

    const getVideoUrl = (event) => {
        const src = event.target.getAttribute('src')
        setVideoUrl(src)
    }

    const selectVideo = (event) => {
        selectedElement.classList.remove(styles["selected"])
        event.target.classList.add(classNames(styles["selected"]));
        setSelectedElement(event.target)
    }

    useEffect(() => {
        const selected = document.querySelector("[class*='Cameras_selected']")
        setSelectedElement(selected)
    }, [])

    return (
        <div className={classNames(styles["container"])}>
            <Grid container className={classNames(styles["cameras-container"])}>
                <Grid item xs={8} >
                    <video src={videoUrl} className={classNames(styles["video-player"])} autoPlay muted></video>
                </Grid>
                <Grid container item xs={4} className={classNames(styles["items"], hasButton ? styles['scrolable'] : '')}>
                    <Grid item xs={5}>
                        <video ref={element} onClick={changeVideo} src={'videos/front-door.mp4'} className={classNames(styles["video-item"], styles["selected"])}></video>
                    </Grid>
                    <Grid item xs={5}>
                        <video onClick={changeVideo} src={'videos/front-door.mp4'} className={classNames(styles["video-item"])}></video>
                    </Grid>
                    <Grid item xs={5}>
                        <video onClick={changeVideo} src={'videos/front-door.mp4'} className={classNames(styles["video-item"])}></video>
                    </Grid>
                    <Grid item xs={5}>
                        <video onClick={changeVideo} src={'videos/garden.mp4'} className={classNames(styles["video-item"])}></video>
                    </Grid>
                    <Grid item xs={5}>
                        <video onClick={changeVideo} src={'videos/kitchen.mp4'} className={classNames(styles["video-item"])}></video>
                    </Grid>
                    <Grid item xs={5}>
                        <video onClick={changeVideo} src={'videos/balcony.mp4'} className={classNames(styles["video-item"])}></video>
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
import styles from "./Cameras.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";
import Card from "../card/Card";
import { useEffect, useRef } from "react";

export default function Cameras({ cameras, hasButton }) {
    const selectedElement = useRef(null);
    const videoElement = useRef(null);

    const selectVideo = (event) => {
        const selectedVideoSrc = event.target.getAttribute("src");
        videoElement.current.setAttribute("src", selectedVideoSrc);

        selectedElement.current.classList.remove(styles["selected"]);
        selectedElement.current = event.target;
        selectedElement.current.classList.add(classNames(styles["selected"]));
    };

    useEffect(() => {
        // default state should be the first video from cameras arr ???
        videoElement.current.setAttribute("src", "videos/bathroom.mp4");
        //the first selected element should be the first video from cameras arr???
        selectedElement.current.classList.add(classNames(styles["selected"]));
    }, []);

    return (
        <div className={classNames(styles["container"])}>
            <Grid container className={classNames(styles["cameras-container"])}>
                <Grid item xs={8}>
                    <video
                        className={classNames(styles["video-player"])}
                        ref={videoElement}
                        autoPlay
                        muted></video>
                </Grid>
                <Grid
                    container
                    item
                    xs={4}
                    className={classNames(
                        styles["items"],
                        hasButton ? styles["scrolable"] : ""
                    )}>
                    <Grid item xs={5}>
                        <video
                            ref={selectedElement}
                            onClick={selectVideo}
                            src={"videos/front-door.mp4"}
                            className={classNames(
                                styles["video-item"]
                            )}></video>
                    </Grid>
                    <Grid item xs={5}>
                        <video
                            onClick={selectVideo}
                            src={"videos/front-door.mp4"}
                            className={classNames(
                                styles["video-item"]
                            )}></video>
                    </Grid>
                    <Grid item xs={5}>
                        <video
                            onClick={selectVideo}
                            src={"videos/front-door.mp4"}
                            className={classNames(
                                styles["video-item"]
                            )}></video>
                    </Grid>
                    <Grid item xs={5}>
                        <video
                            onClick={selectVideo}
                            src={"videos/garden.mp4"}
                            className={classNames(
                                styles["video-item"]
                            )}></video>
                    </Grid>
                    <Grid item xs={5}>
                        <video
                            onClick={selectVideo}
                            src={"videos/kitchen.mp4"}
                            className={classNames(
                                styles["video-item"]
                            )}></video>
                    </Grid>
                    <Grid item xs={5}>
                        <video
                            onClick={selectVideo}
                            src={"videos/balcony.mp4"}
                            className={classNames(
                                styles["video-item"]
                            )}></video>
                    </Grid>
                    {hasButton && (
                        <Grid item className={classNames(styles["btn"])}>
                            <Card iconUrl={"images/plus.svg"} outlined></Card>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </div>
    );
}

import { useState, useEffect } from "react"
import styles from "./EditScene.module.scss";
import classNames from "classnames";
import SceneComposer from "./SceneComposer";
import Modal from "../modal/Modal";
import { TextField } from "@mui/material";
import roomsData from "../../../data/rooms.json";
import devicesData from "../../../data/devices.json";

export default function EditScene({ onSubmit, ...rest }) {
    // console.log(props)
    return (
        <div className={classNames(styles.modal)}>
            <Modal
                open={true}
                onClose={() => { }}
                handleSubmit={onSubmit}
                title="EDIT SCENE"
                buttonText="SAVE CHANGES">
                <TextField placeholder="Back Home"></TextField>
                <SceneComposer {...rest} />
            </Modal>
        </div>
    )
}
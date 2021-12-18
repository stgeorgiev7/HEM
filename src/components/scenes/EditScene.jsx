import { useState, useEffect } from "react"
import styles from "./EditScene.module.scss";
import classNames from "classnames";
import SceneComposer from "./SceneComposer";
import Modal from "../modal/Modal";
import { TextField } from "@mui/material";
import roomsData from "../../../data/rooms.json";
import devicesData from "../../../data/devices.json";

export default function EditScene({ open = true, handleClose, devices, rooms, onScene = () => {console.log("brr brr brr")}, onSubmit, selected }) {

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                handleSubmit={onSubmit}
                title="EDIT SCENE"
                buttonText="SAVE CHANGES">
                <TextField placeholder="Back Home"></TextField>
                <SceneComposer devices={devices} rooms={rooms} selected={selected} onScene={onScene} />
            </Modal>
        </div>
    )
}
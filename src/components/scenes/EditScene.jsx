import {useState, useEffect} from "react"
import styles from "./EditScene.module.scss";
import classNames from "classnames";
import SceneComposer from "./SceneComposer";
import Modal from "../modal/Modal";
import { TextField } from "@mui/material";
import roomsData from "../../../data/rooms.json";
import devicesData from "../../../data/devices.json";

export default function EditScene({open, handleClose, devices, rooms, onScene, onSubmit, selected}) {



    console.log(selected.id);
    
    const sceneCompaser = <SceneComposer devices={devices} rooms={rooms} selected={selected} />;
    const newTitle = <TextField placeholder="Back Home"></TextField>;

    return(
        <div>
            <Modal
             open={open} 
             onClose={handleClose}
             handleSubmit={onSubmit}  
             title="EDIT SCENE"
             buttonText="SAVE CHANGES"
             children={[newTitle, sceneCompaser]} />
        </div>
    )
}

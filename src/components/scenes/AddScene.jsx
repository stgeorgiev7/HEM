import Modal from "../modal/Modal";
import SceneComposer from "./SceneComposer"
import styles from "./AddScene.module.scss";
import classnames from "classnames";
import { TextField } from "@mui/material";
import roomsData from "../../../data/rooms.json";
import devicesData from "../../../data/devices.json";

export default function AddScene({open, handleClose, devices, rooms, onScene, onSubmit}) {
    

    const sceneCompaser = <SceneComposer devices={devicesData?.devices} rooms={roomsData.rooms}></SceneComposer>;
    const newTitle = <TextField placeholder="Scene name"></TextField>

    return(
        <div>
            <Modal
             open={open} 
             onClose={handleClose}
             handleSubmit={onSubmit}  
             title="ADD SCENE"
             buttonText="ADD NEW SCENE"
             children={[newTitle, sceneCompaser]} />
        </div>
    )
}
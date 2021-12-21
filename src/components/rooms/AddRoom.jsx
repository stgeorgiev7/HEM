import styles from "./AddRoom.module.scss";
import classNames from "classnames";
import Modal from "../modal/Modal";
import { TextField } from "@mui/material";

export default function AddRoom({ open, title, buttonText, handleSubmit, handleClose }) {
    return (
        <Modal
            open={open} // set this to "true" for testing
            title={"Add Room"}
            buttonText={"Add New Room"}
            handleClose={handleClose}
            handleSubmit={handleSubmit}>
            <TextField hiddenLabel label="Add room" variant="outlined" sx={{ marginY: "2rem" }} />
        </Modal>
    )
}
import styles from "./ChangeRoom.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";
import Modal from "../modal/Modal";
import Card from "../card/Card";

export default function ChangeRoom({ open, handleClose, rooms = [], onSubmit, selected }) {

    return (
        <Modal
            open={open}
            title="CHANGE ROOM"
            buttonText="SAVE CHANGES"
            handleClose={handleClose}
            onSubmit={onSubmit}>
            <Grid container
             spacing={3}
             justifyContent="center">
                {rooms?.map((crrRoom, index) => {
                    return (
                        <Grid item key={index}>
                            <Card
                                iconUrl={"images/bed.svg"}
                                title={crrRoom?.name}
                                outlined={crrRoom?.id === selected?.id}
                            />
                        </Grid>
                    )
                })}

            </Grid>

        </Modal>

    )
}
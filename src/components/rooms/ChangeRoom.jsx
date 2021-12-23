import styles from "./ChangeRoom.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";
import Modal from "../modal/Modal";
import Card from "../card/Card";

export default function ChangeRoom({
    open,
    handleClose,
    rooms = [],
    onSubmit,
    selected,
}) {
    const buttonProps = {
        buttonText: "SAVE CHANGES",
        color: "secondary",
        variant: "outlined",
    };

    return (
        <Modal
            open={open}
            title="CHANGE ROOM"
            buttonProps={buttonProps}
            onSubmit={onSubmit}
            handleClose={handleClose}>
            <Grid container spacing={3} justifyContent="center">
                {rooms?.map((crrRoom, index) => {
                    return (
                        <Grid item key={index}>
                            <Card
                                iconUrl={"images/bed.svg"}
                                title={crrRoom?.name}
                                variant={
                                    crrRoom?.id === selected?.id ? "off" : "on"
                                }
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Modal>
    );
}

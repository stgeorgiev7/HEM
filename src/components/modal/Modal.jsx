import styles from "./Modal.module.scss";
import classnames from "classnames";
import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import classNames from "classnames";

export default function Modal({ open, title, handleSubmit, handleClose, children, buttonProps }) {
    const [openDialog, setOpenDialog] = useState(open);

    handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <div >
            <Dialog open={open} onClose={handleClose} className={classNames(styles["modal-container"])}>
                <DialogTitle className={classNames(styles["title"])}>{title}</DialogTitle>
                <DialogContent className={classNames(styles["content"])}>
                    {children}
                </DialogContent>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    color={buttonProps?.color}
                    display="none"
                    sx={{ marginBottom: "37px", maxWidth: "33%", alignSelf: "center", display: buttonProps.display }} // this maxWidth is not correct !!!
                >
                    {buttonProps?.buttonText}
                </Button>
            </Dialog>
        </div>
    )
}

//remove inline css 
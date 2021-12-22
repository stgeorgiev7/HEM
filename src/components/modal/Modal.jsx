import styles from "./Modal.module.scss";
import classnames from "classnames";
import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import classNames from "classnames";

export default function Modal({ open, handleSubmit, handleClose, children, title, buttonProps }) {
    const [openDialog, setOpenDialog] = useState(open);

    handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <div >
            <Dialog open={open} onClose={handleClose} className={classNames(styles["modal-container"])}>
                <DialogTitle className={classNames(styles.title)}>{title}</DialogTitle>
                <DialogContent className={classNames(styles.content)}>
                    {children}
                </DialogContent>
                <Button
                 onClick={handleSubmit}
                 color={buttonProps?.color}
                 variant={buttonProps?.variant}
                 >{buttonProps?.buttonText}
                 </Button>
            </Dialog>
        </div>
    )
}
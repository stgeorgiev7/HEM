import styles from "./Modal.module.scss";
import classnames from "classnames";
import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import classNames from "classnames";

export default function Modal({open=true, title="modal title", buttonText="modal action", handleSubmit, handleClose, children=[]}) {
    const [openDialog, setOpen]=useState(open);
    
    handleClose = () => {
        setOpen(false);
    };

    return(
        <div >
            <Dialog open={open} onClose={handleClose} className={classNames(styles["modal-container"])}>
                <DialogTitle className={classNames(styles.title)}>{title}</DialogTitle>
                <DialogContent className={classNames(styles.content)}>
                    {children.map((element) => {
                        return element;
                } )}
                </DialogContent>
                <Button onClick={handleSubmit}>{buttonText}</Button>
            </Dialog>
        </div>
    )
}
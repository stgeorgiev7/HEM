import style from "./Modal.module.scss";
import classnames from "classnames";
import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";

export default function Modal({open=true, title="modal title", buttonText="modal action", handleSubmit, handleClose}) {
    const [openDialog, setOpen]=useState(open);
    
    handleClose = () => {
        setOpen(false);
    };

    return(
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>Modal Content</DialogContent>
                <Button onClick={handleSubmit}>{buttonText}</Button>
            </Dialog>

        </div>
    )
}
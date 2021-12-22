import styles from "./AddDevice.module.scss"
import classNames from "classnames"
import Modal from "../modal/Modal"
import { CircularProgress, Box, Typography } from '@mui/material/';

export default function AddDevice({ open, handleClose, handleSubmmit, searching = true, found = false, failed, onDevice }) {
    const buttonProps = {
        buttonText: "TRY AGAIN",
        color: "primary",
        display: searching ? "none" : "inline-block"
    }

    return (
        <Modal
            open={open}
            handleClose={handleClose}
            handleSubmit={handleSubmmit}
            title={"ADD DEVICE"}
            buttonProps={buttonProps}>
            <Box sx={{ position: 'relative', display: 'flex', flexDirection: "column", textAlign: "center", overflow: "hidden" }} >
                <CircularProgress size={"24.6rem"} sx={{ opacity: "0.3" }} variant={failed ? "determined" : searching ? "indetermined" : ""} value={0} />
                <CircularProgress size={"24.6rem"} sx={{ opacity: "0.15", position: "absolute", color: searching ? "" : "rgba(232, 233, 234)" }} value={100} variant="determinate" />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <img src={searching ? "images/search.svg" : "images/no-connection.svg"} ></img>
                </Box>
            </Box>
            <Typography sx={{ color: "#7441F3", fontWeight: "700", textAlign: "center", fontWeight: "700", marginTop: "45px" }}>{searching ? "Searching..." : failed ? "NO DEVICE FOUND..." : ""}</Typography>
        </Modal>
    )
}
// remove invisible button at the buttom

//variant="determinate" value={100} 
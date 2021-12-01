import styles from "./Navigation.module.scss";
import classNames from "classnames";
import { Badge, Drawer, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined'
import User from "../user/User";
import { useState } from 'react'
import { Box } from "@mui/system";

export default function Navigation() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Drawer variant="permanent" className={classNames(styles['drawer'])}>
            <Grid container spacing={2} className={classNames(styles['user'])}>
                <Grid item>
                    <User name="John Doe" headingSize={"h5"} />
                </Grid>
                <Grid item>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls="long-menu"
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        className={classNames(styles['menu-ul'])}
                        id="long-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose} >
                        <MenuItem className={classNames(styles['menu-item'])}>
                            Logout
                        </MenuItem>
                    </Menu>
                </Grid>
            </Grid>
            <List>
                <ListItemButton className={classNames(styles['list-item'], styles['building-list-item'])} >
                    <ListItemIcon>
                        <HomeOutlinedIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Apartment" />
                    <Badge className={classNames(styles['badge'], styles['building-badge'])}>5</Badge>
                </ListItemButton>
                <ListItemButton className={classNames(styles['list-item'])}>
                    <ListItemIcon>
                        <BedOutlinedIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Living room" />
                </ListItemButton>
                <ListItemButton className={classNames(styles['list-item'])}>
                    <ListItemIcon>
                        <BedOutlinedIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Bedroom" />
                    <Badge className={classNames(styles['badge'], styles['room-badge'])}>!</Badge>
                </ListItemButton>
                <ListItemButton className={classNames(styles['list-item'])}>
                    <ListItemIcon>
                        <BedOutlinedIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Bathroom" />
                </ListItemButton>
                <ListItemButton className={classNames(styles['list-item'])}>
                    <ListItemIcon>
                        <BedOutlinedIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Toilet" />
                </ListItemButton>
                <ListItemButton className={classNames(styles['list-item'])}>
                    <ListItemIcon>
                        <BedOutlinedIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Patio" />
                </ListItemButton>
            </List>
            <List>
                <ListItemButton className={classNames(styles['list-item'], styles['building-list-item'])} >
                    <ListItemIcon>
                        <HomeOutlinedIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="House" />
                    <Badge className={classNames(styles['badge'], styles['building-badge'])}>7</Badge>
                </ListItemButton>
                <ListItemButton className={classNames(styles['list-item'])}>
                    <ListItemIcon>
                        <BedOutlinedIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Living room" />
                </ListItemButton>
                <ListItemButton className={classNames(styles['list-item'])}>
                    <ListItemIcon>
                        <BedOutlinedIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Bedroom 1" />
                </ListItemButton>
                <ListItemButton className={classNames(styles['list-item'])}>
                    <ListItemIcon>
                        <BedOutlinedIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Bedroom 2" />
                </ListItemButton>
                <ListItemButton className={classNames(styles['list-item'])}>
                    <ListItemIcon>
                        <BedOutlinedIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Bedroom 3" />
                </ListItemButton>
                <ListItemButton className={classNames(styles['list-item'])}>
                    <ListItemIcon>
                        <BedOutlinedIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Bathroom" />
                </ListItemButton>
                <ListItemButton className={classNames(styles['list-item'])}>
                    <ListItemIcon>
                        <BedOutlinedIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Toilet" />
                </ListItemButton>
                <ListItemButton className={classNames(styles['list-item'])}>
                    <ListItemIcon>
                        <BedOutlinedIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Patio" />
                </ListItemButton>
            </List>
        </Drawer >
    )
}
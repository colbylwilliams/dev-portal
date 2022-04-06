// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { DevBox } from '../../model/msdev/DevBox';

import windows11 from '../../img/windows11.jpg'
import { ReactComponent as WindowsLogo } from '../../img/windows_info.svg'

import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MemoryIcon from '@mui/icons-material/Memory';
import StorageIcon from '@mui/icons-material/Storage';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import TableRowsIcon from '@mui/icons-material/TableRows';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SvgIcon from '@mui/material/SvgIcon'
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import StopIcon from '@mui/icons-material/StopOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import ListItemText from '@mui/material/ListItemText';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useTheme } from '@mui/material/styles';
import Popover from '@mui/material/Popover';

export interface IDevBoxCardProps {
    devbox: DevBox;
}

// const options = ['Open in browser', 'Download RDP client'];

export const DevBoxCard: React.FunctionComponent<IDevBoxCardProps> = (props) => {

    const { devbox } = props;

    const theme = useTheme();

    const [menuAnchorEl, setMenuAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [popoverAnchorEl, setPopoverAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const menuOpen = Boolean(menuAnchorEl);
    const popoverOpen = Boolean(popoverAnchorEl);

    const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setPopoverAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setPopoverAnchorEl(null);
    };

    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchorEl(null);
    };

    return (
        <Card>
            <CardMedia component='img' src={windows11} alt='Windows 11' height='200' />
            <CardHeader
                action={
                    <IconButton onClick={handleMenuClick} aria-label='settings'>
                        <MoreVertIcon />
                    </IconButton>
                }
                title={(<strong>{devbox.name}</strong>)}
                subheader={(<strong>{devbox.project}</strong>)} />
            <CardContent sx={{ padding: theme.spacing(0, 2) }}>
                <List dense>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: '38px' }}>
                            <SvgIcon component={WindowsLogo} />
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ color: theme.palette.info.main }} primary={devbox.spec.os} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: '38px' }}>
                            <SelectAllIcon />
                        </ListItemIcon>
                        <ListItemText primary={devbox.spec.cpu} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: '38px' }}>
                            <MemoryIcon />
                        </ListItemIcon>
                        <ListItemText primary={devbox.spec.ram} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: '38px' }}>
                            <StorageIcon />
                        </ListItemIcon>
                        <ListItemText primary={devbox.spec.storage} />
                    </ListItem>
                </List>

                <Typography variant='body2' display='block' gutterBottom py={theme.spacing(2)}>
                    {devbox.state}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end', paddingBottom: theme.spacing(2) }}>
                <ButtonGroup color='inherit' variant='outlined' size='small'>
                    <Button startIcon={<OpenInNewIcon />}>
                        Open in browser
                    </Button>
                    <Button size='small' onClick={handlePopoverClick}>
                        {/* <ArrowDropDownIcon /> */}
                        <KeyboardArrowDownIcon />
                    </Button>
                </ButtonGroup>
                <Menu
                    open={menuOpen}
                    anchorEl={menuAnchorEl}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}>
                    <MenuItem onClick={handleMenuClose}>
                        <StopIcon sx={{ marginRight: theme.spacing(1) }} fontSize='medium' color='info' />
                        Stop
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <DeleteIcon sx={{ marginRight: theme.spacing(1) }} fontSize='medium' color='info' />
                        Delete
                    </MenuItem>
                </Menu>
                <Popover
                    open={popoverOpen}
                    anchorEl={popoverAnchorEl}
                    onClose={handlePopoverClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}>
                    <Button size='small' color='inherit' sx={{ padding: theme.spacing(1, 2) }} startIcon={<DownloadIcon color='info' />}>
                        Download RDP client
                    </Button>
                </Popover>

            </CardActions>

        </Card>
    );
}

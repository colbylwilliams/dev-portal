// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { DevBox } from '../../model/msdev/DevBox';

import windows11 from '../../img/windows11.jpg'
import { ReactComponent as WindowsLogo } from '../../img/windows_info.svg'

import SvgIcon from '@mui/material/SvgIcon'
import ListItemIcon from '@mui/material/ListItemIcon';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import StopIcon from '@mui/icons-material/StopOutlined';
import StartIcon from '@mui/icons-material/PlayArrow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MemoryIcon from '@mui/icons-material/Memory';
import StorageIcon from '@mui/icons-material/Storage';
import SelectAllIcon from '@mui/icons-material/SelectAll';

import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';
import ButtonGroup from '@mui/material/ButtonGroup';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Theme, useTheme } from '@mui/material/styles';
import Popover from '@mui/material/Popover';

import { getDevBoxBrowserUrl } from '../../API'

export interface IDevBoxCardProps {
    devbox: DevBox;
}

// const options = ['Open in browser', 'Download RDP client'];

const getStateColor = (theme: Theme, state?: string) => {
    switch (state?.toLowerCase()) {
        case 'running': return theme.palette.success.main;
        case 'starting': return theme.palette.info.main;
        case 'stopping': return theme.palette.warning.main;
        case 'stopped': return theme.palette.error.main;
    };
    return theme.palette.text.primary;
};

const getStateText = (state?: string) => {
    switch (state?.toLowerCase()) {
        case 'running': return 'Running';
        case 'starting': return 'Starting...';
        case 'stopping': return 'Stopping...';
        case 'stopped': return 'Stopped';
    };
    return undefined;
}

export const DevBoxCard: React.FC<IDevBoxCardProps> = (props) => {

    const { devbox } = props;

    const devBoxBrowserUrl = getDevBoxBrowserUrl();

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
                action={<IconButton onClick={handleMenuClick} aria-label='settings'>
                    <MoreVertIcon />
                </IconButton>}
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

                <Typography color={getStateColor(theme, devbox.state)} variant='body1' display='block' gutterBottom py={theme.spacing(2)}>
                    {getStateText(devbox.state)}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end', paddingBottom: theme.spacing(2) }}>
                <ButtonGroup color='inherit' variant='outlined' >
                    <Button href={devBoxBrowserUrl} target='_blank' rel='noopener noreferrer'
                        startIcon={devbox.state.toLowerCase() === 'stopped' ? <StartIcon /> : <OpenInNewIcon />}>
                        {devbox.state.toLowerCase() === 'stopped' ? 'Start Dev Box' : 'Open in browser'}
                    </Button>
                    <Button onClick={handlePopoverClick}>
                        {/* <ArrowDropDownIcon /> */}
                        <KeyboardArrowDownIcon />
                    </Button>
                </ButtonGroup>
                <Menu
                    open={menuOpen}
                    anchorEl={menuAnchorEl}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
                    <MenuItem onClick={handleMenuClose}>
                        {devbox.state.toLowerCase() === 'stopped' ?
                            <StartIcon sx={{ marginRight: theme.spacing(1) }} fontSize='medium' color='info' /> :
                            <StopIcon sx={{ marginRight: theme.spacing(1) }} fontSize='medium' color='info' />
                        }
                        {/* <StopIcon sx={{ marginRight: theme.spacing(1) }} fontSize='medium' color='info' /> */}
                        {devbox.state.toLowerCase() === 'stopped' ? 'Start' : 'Stop'}
                        {/* Stop */}
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
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right', }}>
                    <Button color='inherit' sx={{ padding: theme.spacing(1, 2) }} startIcon={<DownloadIcon color='info' />}>
                        Download RDP client
                    </Button>
                </Popover>

            </CardActions>

        </Card>
    );
}

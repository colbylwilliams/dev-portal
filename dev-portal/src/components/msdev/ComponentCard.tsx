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
import { ReactComponent as AzureLogo } from '../../img/azure.svg'
import { ReactComponent as GitHubLogo } from '../../img/github.svg'
import AddCircleIcon from '@mui/icons-material/AddCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import OpenInNewIcon from '@mui/icons-material/OpenInNew';
// import DownloadIcon from '@mui/icons-material/Download';
// import DeleteIcon from '@mui/icons-material/DeleteOutline';
// import StopIcon from '@mui/icons-material/StopOutlined';


import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
// import MemoryIcon from '@mui/icons-material/Memory';
// import StorageIcon from '@mui/icons-material/Storage';
// import SelectAllIcon from '@mui/icons-material/SelectAll';
// import TableRowsIcon from '@mui/icons-material/TableRows';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SvgIcon from '@mui/material/SvgIcon'

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
import { ComponentTemplate } from 'teamcloud';
import ListItemIcon from '@mui/material/ListItemIcon';

const titleRe = /^(?:#+.*)$/gm
const deviderRe = /^(?:-{3,})$/gm
const imageOrLinkRe = /^(?:!?\[[^\]]*\]\([^[\]()]*\))$/gm

const getTypeIcon = (type?: string) => {
    switch (type?.toLowerCase()) {
        case 'environment': return <SvgIcon fontSize='inherit' component={AzureLogo} />
        // case 'repository': return <SvgIcon fontSize='inherit' component={GitHubLogo} />
        case 'repository': return <GitHubIcon fontSize='inherit' />
    }
    return undefined;
}

const getDescription = (description?: string) => {
    const cleanDesc = description?.replace(imageOrLinkRe, '').replace(titleRe, '').replace(deviderRe, '');
    return { description: cleanDesc, truncated: cleanDesc && cleanDesc.length > 347 ? `${cleanDesc.substring(0, 347)}...` : cleanDesc };
}

export interface IComponentCardProps {
    template: ComponentTemplate;
}

export const ComponentCard: React.FunctionComponent<IComponentCardProps> = (props) => {

    const { template } = props;

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
            {/* <CardMedia component='img' src={windows11} alt='Windows 11' height='200' /> */}
            <CardHeader sx={{ pt: theme.spacing(3) }}
                action={<IconButton onClick={handleMenuClick} aria-label='settings'>
                    <MoreVertIcon />
                </IconButton>}
                // title={(<Stack pt={theme.spacing(2)} pb={theme.spacing(1)} direction='row' spacing={1} alignItems='center'>
                //     {getTypeIcon(template.type)}
                //     <strong>{template.displayName}</strong>
                // </Stack>)}
                // subheader={(<strong>{template.type}</strong>)} />
                // titleTypographyProps={{ py: theme.spacing(1) }}
                title={(<strong>{template.displayName}</strong>)}
                subheader={(<Stack pt={theme.spacing(1)} direction='row' spacing={1} alignItems='center'>
                    {getTypeIcon(template.type)}
                    <div>{template.type}</div>
                </Stack>)} />
            <CardContent >


                {/* <Typography variant='overline' display='block'>
                    Description
                </Typography> */}
                <Typography variant='subtitle2' gutterBottom component='div' minHeight='160px' maxHeight='160px'>
                    {/* {template.description?.replace(imageOrLinkRe, '').replace(titleRe, '').replace(deviderRe, '')} */}
                    {getDescription(template.description).truncated}
                </Typography>

                <List dense>
                    <ListItem disablePadding>
                        <ListItemText
                            primary='Version'
                            secondary={template.repository.version}
                            primaryTypographyProps={{ variant: 'caption' }}
                            secondaryTypographyProps={{ color: theme.palette.info.main }} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText
                            primary='Source'
                            secondary={template.repository.repository}
                            primaryTypographyProps={{ variant: 'caption' }}
                            secondaryTypographyProps={{ color: theme.palette.info.main }} />
                    </ListItem>
                </List>

                <Typography variant='body2' display='block' gutterBottom py={theme.spacing(2)}>
                    {/* {devbox.state} */}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end', paddingBottom: theme.spacing(2) }}>
                <ButtonGroup color='inherit' variant='outlined'>
                    <Button startIcon={<AddIcon />}>
                        {/* <Button variant='contained'> */}
                        Create...
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
                        <LibraryBooksIcon sx={{ marginRight: theme.spacing(1) }} fontSize='medium' color='info' />
                        View docs
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <ManageSearchIcon sx={{ marginRight: theme.spacing(1) }} fontSize='medium' color='info' />
                        See existing
                    </MenuItem>
                </Menu>
                <Popover
                    open={popoverOpen}
                    anchorEl={popoverAnchorEl}
                    onClose={handlePopoverClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right', }}>
                    <Button color='inherit' sx={{ padding: theme.spacing(1, 2) }} startIcon={<LibraryBooksIcon color='info' />}>
                        View docs
                    </Button>
                </Popover>
            </CardActions>

        </Card>
    );
}
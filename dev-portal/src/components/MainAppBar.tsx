// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useLocation } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import { MemberDetails } from './msdev/MemberDetails';
import { useGraphUser } from '../hooks';
import { MemberAvatar } from './msdev/MemberAvatar';

const drawerWidth = 240;

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    lineHeight: 1,
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        // [theme.breakpoints.up('md')]: {
        //     width: '20ch',
        // },
    },
}));


export interface IMainAppBarProps { }

const MainAppBar: React.FC<IMainAppBarProps> = (props) => {

    const { pathname } = useLocation();

    const { data: user } = useGraphUser();

    const [org, setOrg] = useState('contoso');

    const [popoverAnchorEl, setPopoverAnchorEl] = useState<HTMLButtonElement | null>(null);

    const popoverOpen = Boolean(popoverAnchorEl);

    const handleOrgChange = (event: SelectChangeEvent) => {
        setOrg(event.target.value as string);
    };

    const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setPopoverAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setPopoverAnchorEl(null);
    };

    return (
        // <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <AppBar
            position="fixed"
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
            <Toolbar disableGutters sx={{ paddingLeft: '14px', paddingRight: '14px' }}>

                {/* <ContosoLogo height='36px' width='172px' style={{ width: 'inherit', height: 'inherit' }} /> */}

                {/* <Typography>
                    Dev Boxes
                </Typography> */}


                <Box sx={{ flexGrow: 1 }} />
                {pathname !== '/orgs/contoso' && (

                    <Search sx={{ flexGrow: 1, mx: 2 }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder='Search…'
                            inputProps={{ 'aria-label': 'search' }} />
                    </Search>
                )}
                <Box sx={{ flexGrow: 1 }} />

                <Box minWidth='116px' textAlign='end'>

                    <Select
                        value={org}
                        sx={{ border: 'none', '& fieldset': { border: 'none' } }}
                        SelectDisplayProps={{ style: { border: 'none' } }}
                        MenuProps={{ style: { border: 'none' } }}
                        // label="Age"
                        onChange={handleOrgChange}
                        IconComponent={KeyboardArrowDownIcon}>
                        <MenuItem value={'contoso'}>Contoso</MenuItem>
                        <MenuItem value={'fabrikam'}>Fabrikam</MenuItem>
                    </Select>
                </Box>

                <Box sx={{ paddingLeft: '12px', flexGrow: 0 }}>
                    <IconButton onClick={handlePopoverClick} sx={{ p: 0 }}>
                        <MemberAvatar user={user} />
                    </IconButton>
                    <Popover
                        open={popoverOpen}
                        anchorEl={popoverAnchorEl}
                        onClose={handlePopoverClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right', }}>
                        {user && <MemberDetails user={user} signout />}
                    </Popover>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default MainAppBar;
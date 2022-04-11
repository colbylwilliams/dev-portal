// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import Account from '@mui/icons-material/AccountTree';
import AddCircle from '@mui/icons-material/AddCircleOutline';
// import ElectricalServices from '@mui/icons-material/ElectricalServices'
// import MiscellaneousServices from '@mui/icons-material/MiscellaneousServices'
import Cable from '@mui/icons-material/Cable';
import Cloud from '@mui/icons-material/Cloud';
import Code from '@mui/icons-material/Code';
import Computer from '@mui/icons-material/Computer';
import Dashboard from '@mui/icons-material/Dashboard';
import Extension from '@mui/icons-material/Extension';
import Group from '@mui/icons-material/Group';
import LibraryBooks from '@mui/icons-material/LibraryBooks';
import Settings from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as ContosoLogo } from '../img/contoso_logo.svg';
import { ReactComponent as ContosoLogoDark } from '../img/contoso_logo_dark.svg';



const drawerWidth = 240;

const sections = [
    [
        { label: 'New...', icon: <AddCircle />, href: '/orgs/contoso/new' }
    ],
    [
        { label: 'Dashboard', icon: <Dashboard />, href: '/orgs/contoso' }
    ],
    [
        { label: 'Services', icon: <Cable />, href: '/orgs/contoso/services' }
    ],
    [
        { label: 'Projects', icon: <Account />, href: '/orgs/contoso/projects' },
        { label: 'My teams', icon: <Group />, href: '/orgs/contoso/teams' }
    ],
    [
        { label: 'Dev boxes', icon: <Computer />, href: '/orgs/contoso/devboxes' },
        { label: 'Source code', icon: <Code />, href: '/orgs/contoso/sourcecode' },
        // { label: 'Environments', icon: <Cloud />, href: '/orgs/contoso/environments' }
        { label: 'Environments', icon: <Cloud />, href: '/orgs/contoso/projects/project-alpha/environments' }
    ],
    [
        { label: 'Docs', icon: <LibraryBooks />, href: '/orgs/contoso/docs' },
        { label: 'APIs', icon: <Extension />, href: '/orgs/contoso/apis' }
    ]
];

export interface IMainDrawerProps { }


const MainDrawer: React.FC<IMainDrawerProps> = (props) => {

    const theme = useTheme();

    const navigate = useNavigate();

    const { pathname } = useLocation();

    console.log('pathname', pathname);

    return (
        <Drawer
            anchor='left'
            variant='permanent'
            // PaperProps={{
            //     style: {
            //         backgroundColor: '#121212',
            //         color: '#b5b5b5',
            //         backgroundImage: 'linear - gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))',
            //     }
            // }}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}>
            <Toolbar disableGutters sx={{ px: '14px' }}>
                {/* <ContosoLogo height='36px' width='172px' style={{ width: 'inherit', height: 'inherit' }} /> */}
                {theme.palette.mode === 'dark' ?
                    <ContosoLogo height='36px' width='172px' style={{ width: 'inherit', height: 'inherit' }} /> :
                    <ContosoLogoDark height='36px' width='172px' style={{ width: 'inherit', height: 'inherit' }} />
                }
            </Toolbar>
            {/* <Divider /> */}
            <Stack sx={{ flex: '1 0 auto', justifyContent: 'space-between' }}>
                <Box sx={{ overflow: 'auto', pt: theme.spacing(2) }} >
                    {sections.map((section, index) => (
                        <div key={index}>
                            <List>
                                {section.map((item, _) => (
                                    <ListItemButton sx={{ pl: theme.spacing(3) }} key={item.label} onClick={() => navigate(item.href)} selected={pathname === item.href}>
                                        {/* <ListItem button key={item.label} onClick={() => navigate(item.href)}> */}
                                        {/* <ListItemIcon sx={{ minWidth: '42px', color: '#b5b5b5' }}>{item.icon}</ListItemIcon> */}
                                        <ListItemIcon sx={{ minWidth: '42px' }}>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.label} />
                                    </ListItemButton>
                                ))}
                            </List>
                            {/* {index < sections.length - 1 && <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }} />} */}
                            {index < sections.length - 1 && <Divider />}
                        </div>
                    ))}
                </Box>
                <Box sx={{ overflow: 'auto', pt: theme.spacing(2) }} >
                    {/* <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }} /> */}
                    <Divider />
                    <List>
                        <ListItemButton sx={{ pl: theme.spacing(3) }} onClick={() => navigate(`/orgs/contoso/settings`)} selected={pathname === '/orgs/contoso/settings'}>
                            {/* <ListItem button key={item.label} onClick={() => navigate(item.href)}> */}
                            {/* <ListItemIcon sx={{ minWidth: '42px', color: '#fff' }}> */}
                            <ListItemIcon sx={{ minWidth: '42px' }}>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary='Settings' />
                        </ListItemButton>

                    </List>
                </Box>
            </Stack>
        </Drawer >
    );
};

export default MainDrawer;
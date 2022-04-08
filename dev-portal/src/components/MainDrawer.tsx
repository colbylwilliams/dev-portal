// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LibraryBooks from '@mui/icons-material/LibraryBooks';
import Extension from '@mui/icons-material/Extension';
import Dashboard from '@mui/icons-material/Dashboard';
import Account from '@mui/icons-material/AccountTree';
import AddCircle from '@mui/icons-material/AddCircleOutline';
import Computer from '@mui/icons-material/Computer';
import Code from '@mui/icons-material/Code';
import Cloud from '@mui/icons-material/Cloud';
import Group from '@mui/icons-material/Group';
import { useLocation, useNavigate } from 'react-router-dom';
import { ListItemButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ReactComponent as ContosoLogo } from '../img/contoso_logo.svg'

const drawerWidth = 240;

const sections = [
    [
        { label: 'New...', icon: <AddCircle />, href: '/new' }
    ],
    [
        { label: 'Dashboard', icon: <Dashboard />, href: '/orgs/contoso' }
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
        { label: 'Docs', icon: <LibraryBooks />, href: '/docs' },
        { label: 'APIs', icon: <Extension />, href: '/apis' }
    ]
]

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
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}>
            <Toolbar disableGutters sx={{ px: '14px' }}>
                <ContosoLogo height='36px' width='172px' style={{ width: 'inherit', height: 'inherit' }} />
            </Toolbar>
            {/* <Divider /> */}
            <Box sx={{ overflow: 'auto', pt: theme.spacing(2) }} >
                {sections.map((section, index) => (
                    <div key={index}>
                        <List>
                            {section.map((item, _) => (
                                <ListItemButton key={item.label} onClick={() => navigate(item.href)} selected={pathname === item.href}>
                                    {/* <ListItem button key={item.label} onClick={() => navigate(item.href)}> */}
                                    <ListItemIcon sx={{ minWidth: '46px' }}>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            ))}
                        </List>
                        {index < sections.length - 1 && <Divider />}
                    </div>
                ))}
            </Box>
        </Drawer>
    );
}

export default MainDrawer;
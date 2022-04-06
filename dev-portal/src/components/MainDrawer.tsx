import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LibraryBooks from '@mui/icons-material/LibraryBooks';
import Extension from '@mui/icons-material/Extension';
import Dashboard from '@mui/icons-material/Dashboard';
import Account from '@mui/icons-material/AccountTree';
import AddCircle from '@mui/icons-material/AddCircleOutline';
import CategoryIcon from '@mui/icons-material/Category';
import Computer from '@mui/icons-material/Computer';
import Code from '@mui/icons-material/Code';
import Cloud from '@mui/icons-material/Cloud';
import Group from '@mui/icons-material/Group';
import { useNavigate } from 'react-router-dom';


const drawerWidth = 240;

const sections = [
    [
        { label: 'New...', icon: <AddCircle />, href: '/' }
    ],
    [
        { label: 'Dashboard', icon: <Dashboard />, href: '/' }
    ],
    [
        { label: 'Projects', icon: <Account />, href: '/projects' },
        { label: 'My teams', icon: <Group />, href: '/' }
    ],
    [
        { label: 'Dev boxes', icon: <Computer />, href: '/devboxes' },
        { label: 'Source code', icon: <Code />, href: '/sourcecode' },
        { label: 'Environments', icon: <Cloud />, href: '/' }
    ],
    [
        { label: 'Docs', icon: <LibraryBooks />, href: '/' },
        { label: 'APIs', icon: <Extension />, href: '/' }
    ]
]

export interface IMainDrawerProps { }


const MainDrawer: React.FC<IMainDrawerProps> = (props) => {


    // const r = useLanguages('microsoft', 'TeamCloud');
    // const r = useLanguages('colbylwilliams', 'dev-portal');
    const navigate = useNavigate();

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}>
            <Toolbar />
            <Box sx={{ overflow: 'auto' }} >
                {sections.map((section, index) => (
                    <div key={index}>
                        <List>
                            {section.map((item, _) => (
                                <ListItem button key={item.label} onClick={() => navigate(item.href)}>
                                    <ListItemIcon sx={{ minWidth: '46px' }}>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.label} />
                                </ListItem>
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
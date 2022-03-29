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


const drawerWidth = 240;

const sections = [
    [
        { label: 'New...', icon: <AddCircle /> }
    ],
    [
        { label: 'Dashboard', icon: <Dashboard /> }
    ],
    [
        { label: 'Projects', icon: <Account /> },
        { label: 'My teams', icon: <Group /> }
    ],
    [
        { label: 'Dev boxes', icon: <Computer /> },
        { label: 'Code spaces', icon: <Code /> },
        { label: 'Environments', icon: <Cloud /> }
    ],
    [
        { label: 'Docs', icon: <LibraryBooks /> },
        { label: 'APIs', icon: <Extension /> }
    ]
]

export interface IMainDrawerProps { }

const MainDrawer: React.FC<IMainDrawerProps> = (props) => {

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
                                <ListItem button key={item.label}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
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
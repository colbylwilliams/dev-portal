// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { useEffect, useState } from 'react';
import { useProject } from '../../hooks/teamcloud';
import { DefaultDevBoxes, DevBox } from '../../model/msdev/DevBox';
import { RepoView } from '../github/RepoView';
import { TeamsView } from '../github/TeamsView';
import { MainView } from '../MainView';
import { ComponentsView } from './ComponentsView';
import { DevBoxesView } from './DevBoxesView';

export interface IProjectViewProps {

}

interface TabPanelProps {
    children?: React.ReactNode;
    index: string;
    value: string;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            {...other}>
            {value === index && (
                <MainView title={index === 'Source Code' ? undefined : index}>
                    {children}
                </MainView>
            )}
        </div>
    );
}


export const ProjectView: React.FC<IProjectViewProps> = (props) => {

    const [value, setValue] = React.useState('Overview');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const { data: project } = useProject();

    const [devboxes, setDevboxes] = useState<DevBox[]>([]);

    useEffect(() => {
        if (project?.displayName)
            setDevboxes(DefaultDevBoxes.filter(devbox => devbox.project === project.displayName));
        else
            setDevboxes([]);
    }, [project]);


    return (
        <Box>
            <Tabs value={value} onChange={handleChange} >
                <Tab value='Overview' label='Overview' />
                <Tab value='Source Code' label='Source Code' />
                <Tab value='Dev Boxes' label='Dev Boxes' />
                <Tab value='Environments' label='Environments' />
                <Tab value='Workflows' label='Workflows' />
                <Tab value='Team' label='Team' />
            </Tabs>
            <TabPanel value={value} index={'Overview'}>

            </TabPanel>
            <TabPanel value={value} index={'Source Code'} >
                <RepoView org='microsoft' repo='TeamCloud' />
            </TabPanel>
            <TabPanel value={value} index={'Dev Boxes'} >
                <DevBoxesView devboxes={devboxes} />
            </TabPanel>
            <TabPanel value={value} index={'Environments'} >
                <ComponentsView />
            </TabPanel>
            <TabPanel value={value} index={'Workflows'} />
            <TabPanel value={value} index={'Team'} >
                <TeamsView />
            </TabPanel>
        </Box>
    );
};
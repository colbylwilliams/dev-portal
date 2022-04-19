// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import CalendarToday from '@mui/icons-material/CalendarToday';
import Cancel from '@mui/icons-material/Cancel';
import CheckCircle from '@mui/icons-material/CheckCircle';
import DoNotDisturbAlt from '@mui/icons-material/DoNotDisturbAlt';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import TimerOutlined from '@mui/icons-material/TimerOutlined';
import { Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { useWorkflowRuns } from '../../hooks/github';
import { WorkflowRun } from '../../model/github';
import { SettingsCheck } from '../SettingsCheck';

export interface IWorkflowRunsListProps {
    org: string;
    repo: string;
}

const getIcon = (run: WorkflowRun) => {
    return run.conclusion === 'success' ? <CheckCircle color='success' /> : run.conclusion === 'failure' ? <Cancel color='error' /> : <DoNotDisturbAlt />;
};

const getPrimaryText = (run: WorkflowRun) => {

    if (run.event === 'push') {
        return run.head_commit?.message?.split('\n')[0] ?? run.name;
    }
    return run.name;
};

const getSecondaryText = (run: WorkflowRun) => {

    let text = `${run.name} #${run.run_number}:`;

    if (run.event === 'push') {
        text += ` Commit ${run.head_sha.substring(0, 7)} pushed`;
    } else if (run.event === 'workflow_dispatch') {
        text += ' Manually run';
    }

    text += ` by ${run.actor?.login}`;

    return text;
};

const getDurationText = (run: WorkflowRun) => {
    const created = new Date(run.created_at);
    // const started = new Date(run.run_started_at);
    const updated = new Date(run.updated_at);
    const duration = updated.getTime() - created.getTime();

    return `${Math.floor(duration / 1000 / 60)}m ${Math.floor(duration / 1000 % 60)}s`;
};

const getChip = (run: WorkflowRun) => {
    if (run.event === 'push') {
        return <Chip color='info' size='small' label={run.head_branch} />;
    }
    return <></>;
};
export const WorkflowRunsList: React.FC<IWorkflowRunsListProps> = (props) => {


    const theme = useTheme();
    const { org, repo } = props;

    const { data: runs } = useWorkflowRuns(org, repo);

    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // setMenuAnchorEl(event.currentTarget);
    };


    return (
        <SettingsCheck github>
            <Card>
                <CardContent>
                    <List>
                        {runs?.map(run => (
                            <ListItem divider key={run.id} sx={{ justifyContent: 'space-between' }}>
                                {/* <ListItem key={run.id} sx={{ justifyContent: 'space-between' }}> */}
                                <ListItemIcon>
                                    {getIcon(run)}
                                </ListItemIcon>
                                <ListItemText primary={getPrimaryText(run)} secondary={getSecondaryText(run)} />
                                <ListItemIcon>
                                    {getChip(run)}
                                </ListItemIcon>
                                <ListItemText sx={{ display: 'block', width: '250px', flex: 'none' }} />
                                <ListItemText sx={{ color: theme.palette.text.secondary, display: 'block', width: '250px', flex: 'none' }}
                                    primary={<Stack direction='row' alignItems='center' spacing={1}><CalendarToday fontSize='inherit' /> <span>{run.created_at}</span></Stack>}
                                    secondary={<Stack direction='row' alignItems='center' spacing={1}><TimerOutlined fontSize='inherit' /> <span>{getDurationText(run)}</span></Stack>} />
                                {/* <ListItemText sx={{ display: 'block', width: '200px', flex: 'none' }} primary={run.created_at} secondary={getDurationText(run)} /> */}
                                <ListItemSecondaryAction >
                                    <IconButton onClick={handleMenuClick}>
                                        <MoreHoriz />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </SettingsCheck>
    );
};
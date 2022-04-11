// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import { styled, useTheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import { useLanguages } from '../../hooks/github';
import { colors } from '../../model/github/colors';

export interface ILanguageCardProps {
    org: string;
    repo: string;
}

const LanguageChip = styled(Chip)(t => ({
    label: {
        color: 'inherit',
    },
    margin: '2px',
}));

export const LanguageCard: React.FC<ILanguageCardProps> = (props) => {

    let barWidth = 0;

    const { org, repo } = props;

    const { data: languages, isLoading } = useLanguages(org, repo);

    const theme = useTheme();

    if (isLoading) {
        return <LinearProgress />;
    }

    return languages ? (
        <Card>
            <CardHeader title='Languages' />
            <Divider />
            <CardContent>
                <Box
                    sx={{
                        height: theme.spacing(2),
                        marginBottom: theme.spacing(2),
                        borderRadius: '4px',
                        backgroundColor: 'transparent',
                        overflow: 'hidden',
                    }}>
                    {Object.entries(languages).map((language, index: number) => {
                        barWidth = barWidth + (language[1] / Object.values(languages as Record<string, number>).reduce((a, b) => a + b,)) * 100;
                        return (
                            <Tooltip
                                title={language[0]}
                                placement="bottom-end"
                                key={language[0]}>
                                <Box
                                    key={language[0]}
                                    sx={{
                                        height: '100%',
                                        position: 'relative',
                                    }}
                                    style={{
                                        marginTop: index === 0 ? '0' : `-16px`,
                                        zIndex: Object.keys(languages).length - index,
                                        backgroundColor: colors[language[0]]?.color || '#333',
                                        width: `${barWidth}%`,
                                    }} />
                            </Tooltip>
                        );
                    })}
                </Box>
                {Object.entries(languages).map(language => (
                    <LanguageChip
                        label={
                            <>
                                <Box
                                    component="span"
                                    sx={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        marginRight: theme.spacing(1),
                                        display: 'inline-block',
                                    }}
                                    style={{
                                        backgroundColor: colors[language[0]]?.color || '#333',
                                    }}
                                />
                                {language[0]} -{' '}
                                {((language[1] / Object.values(languages as Record<string, number>).reduce((a, b) => a + b,)) * 100).toFixed(2)}
                                %
                            </>
                        }
                        variant="outlined"
                        key={language[0]}
                    />
                ))}
            </CardContent>
        </Card>
    ) : (
        <></>
    );
};
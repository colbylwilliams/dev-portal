// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { styled, useTheme } from '@mui/material/styles';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'
import { useReadme } from '../../hooks/github';

export interface IReadmeCardProps {
    org: string;
    repo: string;
}

const getDefaultBranch = (url: string) => {
    const repositoryUrl = new URL(url).searchParams.get('ref');
    return repositoryUrl;
};

function b64DecodeUnicode(str: string): string {
    return decodeURIComponent(
        Array.prototype.map
            // eslint-disable-next-line func-names
            .call(atob(str), function (c) {
                // eslint-disable-next-line prefer-template
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join(''),
    );
}


const Readme = styled(ReactMarkdown)(t => ({
    '& table': {
        borderCollapse: 'collapse',
        border: `1px solid ${t.theme.palette.divider}`,
    },
    '& th, & td': {
        border: `1px solid ${t.theme.palette.divider}`,
        padding: t.theme.spacing(1),
    },
    '& td': {
        wordBreak: 'break-word',
        overflow: 'hidden',
        verticalAlign: 'middle',
        lineHeight: '1',
        margin: 0,
        padding: t.theme.spacing(3, 2, 3, 2.5),
        borderBottom: 0,
    },
    '& th': {
        backgroundColor: t.theme.palette.background.paper,
    },
    '& tr': {
        backgroundColor: t.theme.palette.background.paper,
    },
    // '& tr:nth-child(odd)': {
    //     backgroundColor: t.theme.palette.background.default,
    // },

    '& a': {
        color: t.theme.palette.info.main,
    },
    '& img': {
        maxWidth: '100%',
    },
    maxHeight: '1000px',
    overflowY: 'auto',
    paddingRight: '8px',
    '&::-webkit-scrollbar-track': {
        backgroundColor: '#F5F5F5',
        borderRadius: '5px',
    },
    '&::-webkit-scrollbar': {
        width: '5px',
        backgroundColor: '#F5F5F5',
        borderRadius: '5px',
    },
    '&::-webkit-scrollbar-thumb': {
        border: '1px solid #555555',
        backgroundColor: '#555',
        borderRadius: '4px',
    },
}));

export const ReadmeCard: React.FC<IReadmeCardProps> = (props) => {

    const hostname = 'github.com';

    const { org, repo } = props;

    const { data: readme, isLoading } = useReadme(org, repo);

    const theme = useTheme();

    console.log(theme.palette.info.main)

    return (
        <Card>
            <CardHeader title='README' />
            <Divider />
            <CardContent>
                {isLoading && (
                    <Stack spacing={1}>
                        <Skeleton width='60%' />
                        <Skeleton />
                        <Skeleton variant='rectangular' height={200} />
                        <Skeleton /><Skeleton />
                        <Skeleton width='60%' />
                        <Skeleton width='80%' />
                        <Skeleton /><Skeleton />
                        <Skeleton width='70%' />
                    </Stack>
                )}

                {(!isLoading && readme?.content) && (

                    <Readme remarkPlugins={[gfm]}>
                        {b64DecodeUnicode(readme.content)
                            .replace(
                                /\[([^[\]]*)\]\((?!https?:\/\/)(.*?)(\.png|\.jpg|\.jpeg|\.gif|\.webp)(.*)\)/gim,
                                '[$1]' +
                                `(//${hostname}/${org}/${repo}/raw/${getDefaultBranch(
                                    readme.url,
                                )}/` +
                                '$2$3$4)',
                            )
                            .replace(
                                /\[([^[\]]*)\]\((?!https?:\/\/)docs\/(.*?)(\.md)\)/gim,
                                '[$1](docs/$2/)',
                            )
                            .replace(
                                /\[([^[\]]*)\]\((?!https?:\/\/)(.*?)(\.md)\)/gim,
                                '[$1]' +
                                `(//${hostname}/${org}/${repo}/blob/${getDefaultBranch(
                                    readme.url,
                                )}/` +
                                '$2$3)',
                            )}
                    </Readme>
                )}

                {(!isLoading && !readme?.content) && (
                    'error'
                )}

            </CardContent>
        </Card>
    );
}
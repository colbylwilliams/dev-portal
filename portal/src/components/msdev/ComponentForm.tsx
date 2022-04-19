// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import GitHubIcon from '@mui/icons-material/GitHub';
import LibraryBooks from '@mui/icons-material/LibraryBooks';
import RocketLaunch from '@mui/icons-material/RocketLaunch';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { styled, useTheme } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ISubmitEvent } from '@rjsf/core';
import { MuiForm5 as Form } from '@rjsf/material-ui';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';
import gfm from 'remark-gfm';
import { ComponentDefinition, ComponentTemplate, DeploymentScope } from 'teamcloud';
import { useUrl } from '../../hooks';
import { useCreateProjectComponent, useDeploymentScopes, useProjectComponentTemplates } from '../../hooks/teamcloud';
import { ReactComponent as AzureLogo } from '../../img/azure.svg';

// const titleRe = /^(?:#+.*)$/gm;
// const deviderRe = /^(?:-{3,})$/gm;
// const imageOrLinkRe = /^(?:!?\[[^\]]*\]\([^[\]()]*\))$/gm;

const getTypeIcon = (type?: string) => {
    switch (type?.toLowerCase()) {
        case 'environment': return <SvgIcon fontSize='inherit' component={AzureLogo} />;
        // case 'repository': return <SvgIcon fontSize='inherit' component={GitHubLogo} />
        case 'repository': return <GitHubIcon fontSize='inherit' />;
    }
    return undefined;
};

// const getDescription = (description?: string) => {
//     const cleanDesc = description?.replace(imageOrLinkRe, '').replace(titleRe, '').replace(deviderRe, '');
//     return { description: cleanDesc, truncated: cleanDesc && cleanDesc.length > 347 ? `${cleanDesc.substring(0, 347)}...` : cleanDesc };
// };

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
    '& pre': {
        padding: t.theme.spacing(1),
        overflow: 'scroll',
        backgroundColor: t.theme.palette.mode === 'light' ? '#eee' : '#333',
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
        backgroundColor: t.theme.palette.mode === 'light' ? '#F5F5F5' : '#424242',
        borderRadius: '5px',
    },
    '&::-webkit-scrollbar': {
        width: '5px',
        backgroundColor: t.theme.palette.mode === 'light' ? '#F5F5F5' : '#424242',
        borderRadius: '5px',
    },
    '&::-webkit-scrollbar-thumb': {
        border: '1px solid #555555',
        backgroundColor: '#555',
        borderRadius: '4px',
    },
}));


export interface IComponentFormProps {

}

export const ComponentForm: React.FC<IComponentFormProps> = (props) => {

    const theme = useTheme();
    const navigate = useNavigate();

    const [template, setTemplate] = useState<ComponentTemplate>();
    const [formEnabled, setFormEnabled] = useState<boolean>(true);
    const [deploymentScopeId, setDeploymentScopeId] = useState<string>();
    const [displayName, setDisplayName] = useState<string>();
    const [scopes, setScopes] = useState<DeploymentScope[]>();

    // const { data: templates } = useProjectComponentTemplates();
    // const { data: templates, isLoading } = useComponentTemplatesForProject('contoso', 'project-alpha');
    // const { data: templates, isLoading } = useComponentTemplatesForProject('c5d3b3f2-bba6-48cf-a0ac-241c00bee9d7', 'ae1336fd-58e6-4cdc-bc57-1d857e0ac40e');
    // const { data: allScopes, isLoading: scopesIsLoading } = useDeploymentScopes();
    // const { data: templates, isLoading: templatesIsLoading } = useProjectComponentTemplates();

    const { data: allScopes } = useDeploymentScopes();
    const { data: templates } = useProjectComponentTemplates();

    const createComponent = useCreateProjectComponent();

    const { orgId, itemId } = useUrl() as { orgId: string, projectId: string, settingId: string, navId: string, subnavId: string, itemId: string, subitemId: string; };



    useEffect(() => {
        if (template && allScopes) {
            const _scopes = allScopes.filter(s => s.authorized && s.componentTypes && s.componentTypes.includes(template?.type as string));
            setScopes(_scopes);
            if (_scopes.length === 1) {
                setDeploymentScopeId(_scopes[0].id);
            }
        }
    }, [template, deploymentScopeId, allScopes]);

    useEffect(() => {
        if (templates && itemId) {
            const template = templates.find(t => t.id === itemId);
            if (template)
                setTemplate(template);
        }
    }, [templates, itemId]);

    const _submitForm = async (e: ISubmitEvent<any>) => {
        if (template && displayName && (e.formData || template.inputJsonSchema === null)) {
            setFormEnabled(false);

            const componentDef: ComponentDefinition = {
                displayName: displayName,
                templateId: template.id,
                inputJson: JSON.stringify(e.formData),
                deploymentScopeId: deploymentScopeId
            };

            await createComponent(componentDef);
        }
    };

    return template ? (
        <Stack>
            <Typography variant='h4' fontWeight='600' component='h1' mb='26px' gutterBottom>New {template.type}</Typography>

            <Card>
                <CardContent sx={{ px: 4 }}>

                    <Grid container spacing={3} alignItems='center' justifyContent='center'>
                        <Grid item xs={12} md={4} lg={3} >
                            <Typography variant='subtitle1'>
                                {template.displayName}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={2} >
                            <Stack direction='row' spacing={1} alignItems='center'>
                                {getTypeIcon(template.type)}
                                <Typography variant='subtitle1'>
                                    {template.type}
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4} lg={2} >
                            <Button color='inherit' size='small' sx={{ py: '2px' }} startIcon={<LibraryBooks color='info' />}>
                                <Typography variant='subtitle1' sx={{ textTransform: 'none' }}>
                                    View docs
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={5} >
                            <Stack pt={theme.spacing(1)} direction='row' spacing={1} alignItems='center'>
                                <GitHubIcon fontSize='inherit' />
                                <Typography variant='subtitle1'>

                                    {template.repository.repository?.replaceAll('-', ' ') ?? template.repository.url}
                                    {' '}
                                    ({template.repository.version})
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <Grid container pt={4} spacing={4}>


                <Grid item xs={12} xl={4}>
                    <Card elevation={0}>
                        <CardHeader sx={{ pt: 4, px: 4 }} title={'New ' + template.displayName}>
                            {/* New {template.displayName} */}
                        </CardHeader>
                        <CardContent sx={{ p: 4 }}>

                            <Stack>
                                <TextField sx={{ mb: 2 }} fullWidth label='Name' required disabled={!formEnabled} value={displayName} onChange={e => setDisplayName(e.target.value)} />
                                {scopes && (
                                    <FormControl required fullWidth>
                                        <InputLabel id='scope-select-label'>Deployment scope</InputLabel>
                                        <Select labelId='scope-select-label' label='Deployment scope' required disabled={!formEnabled} value={deploymentScopeId} onChange={e => setDeploymentScopeId(e.target.value as string)}>
                                            {scopes?.map(s => <MenuItem key={s.id} value={s.id}>{s.displayName ?? s.id}</MenuItem>)}
                                        </Select>
                                    </FormControl>
                                )}
                                <Form
                                    disabled={!formEnabled}
                                    onSubmit={_submitForm}
                                    // FieldTemplate={TCFieldTemplate}
                                    schema={template?.inputJsonSchema ? JSON.parse(template.inputJsonSchema) : {}}>
                                    <Divider />
                                    <Stack direction='row' pt={4} spacing={3} justifyContent='flex-end'>
                                        {/* <Button type='submit' text='Create component' disabled={!formEnabled || !(template) || (deploymentScopeOptions?.length ?? 0) === 0} styles={{ root: { marginRight: 8 } }} /> */}
                                        <Button variant='outlined' disabled={!formEnabled} onClick={() => navigate(`/org/${orgId}`)} >Cancel</Button>
                                        <Button variant='outlined' type='submit' disabled={!formEnabled || !(template)} startIcon={<RocketLaunch />}>Create {template.type}</Button>
                                    </Stack>
                                </Form>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} xl={8} >
                    <Card >
                        <CardContent sx={{ px: 4 }}>

                            <Readme remarkPlugins={[gfm]}>{template?.description ?? undefined as any}</Readme>
                        </CardContent>
                    </Card>

                </Grid>






            </Grid>

        </Stack>

    ) : <> </>;
};
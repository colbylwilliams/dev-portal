// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export interface DevBox {
    id: string;
    name: string;
    project: string;
    spec: DevBoxSpec;
    state: string;

}

export interface DevBoxSpec {
    os: string;
    cpu: string;
    ram: string;
    storage: string;
}


export const DefaultDevBoxSpec: DevBoxSpec = {
    os: 'Windows 11',
    cpu: '16 vCPU',
    ram: '64GB RAM',
    storage: '1024 Premium SSD'
}


export const DefaultDevBoxes: DevBox[] = [
    {
        id: 'dcb71189-254c-47aa-937f-3e6541523c94',
        name: 'Front end dev box',
        project: 'Project Alpha',
        spec: DefaultDevBoxSpec,
        state: 'Running',
    },
    {
        id: '31a254aa-d269-4993-85e4-a73139022a96',
        name: 'Back end dev box',
        project: 'Project Alpha',
        spec: DefaultDevBoxSpec,
        state: 'Starting',
    },
    {
        id: '44d7711b-4c8e-484e-b329-4bea67ad679d',
        name: 'Testing dev box',
        project: 'Project Alpha',
        spec: DefaultDevBoxSpec,
        state: 'Stopped',
    },
    {
        id: '633e474d-61aa-47d8-9689-59c4b435e7bd',
        name: 'Front end dev box',
        project: 'Project Gamma',
        spec: DefaultDevBoxSpec,
        state: 'Running',
    },
    {
        id: '87702ebb-7370-4270-a9ab-bbefd7cd4a06',
        name: 'Back end dev box',
        project: 'Project Gamma',
        spec: DefaultDevBoxSpec,
        state: 'Starting',
    },
    {
        id: 'b6cf9e75-6472-434d-bef1-a1ee307fd12f',
        name: 'Testing dev box',
        project: 'Project Gamma',
        spec: DefaultDevBoxSpec,
        state: 'Stopped',
    },
    {
        id: '0c695888-9b6c-4946-b512-9a9d3c51cf45',
        name: 'Front end dev box',
        project: 'Project Kappa',
        spec: DefaultDevBoxSpec,
        state: 'Running',
    },
    {
        id: 'b4335fae-f6de-413b-87a9-b154b23b2904',
        name: 'Back end dev box',
        project: 'Project Kappa',
        spec: DefaultDevBoxSpec,
        state: 'Starting',
    },
    {
        id: '217d8641-6f11-44be-b0be-b846ca3d3a9b',
        name: 'Testing dev box',
        project: 'Project Kappa',
        spec: DefaultDevBoxSpec,
        state: 'Stopped',
    }
]
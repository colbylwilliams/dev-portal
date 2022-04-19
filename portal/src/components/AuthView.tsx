// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.


import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export interface IAuthViewProps {

}

export const AuthView: React.FC<IAuthViewProps> = (props) => {

    // let location = useLocation();

    // console.warn('AuthView location:', location);
    // console.warn('AuthView location.search:', location.search);

    // const [searchParams, setSearchParams] = useSearchParams();
    const [searchParams] = useSearchParams();
    const [code, setCode] = useState<string>();
    const [state, setState] = useState<string>();



    // const code = searchParams.get('code');

    useEffect(() => {
        if (searchParams) {
            const _code = searchParams.get('code');
            const _state = searchParams.get('state');
            if (_code) {
                setCode(_code);
            }
            if (_state) {
                setState(_state);
            }
        }
    }, [searchParams]);

    useEffect(() => {
        const doThing = async () => {
            if (code && state) {
                console.log('code:', code);
                console.log('state:', state);
                console.log(JSON.stringify({ code, state }));

                const response = await fetch('/api/github/oauth/token', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({ code, state }),
                });

                console.log('response:', response);
                const { token } = await response.json();
                console.log('token:', token);
            }
        };
        doThing();
    }, [code, state]);

    // console.warn('AuthView searchParams:', searchParams);
    // console.warn('AuthView searchParams.get code:', searchParams.get('code'));



    return (
        <></>
    );
};
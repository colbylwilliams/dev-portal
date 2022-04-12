// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// import { createTheme } from './baseTheme';
// import { pageTheme } from './pageTheme';
// import { yellow } from '@material-ui/core/colors';
import { PaletteMode } from '@mui/material';
import { yellow } from '@mui/material/colors';


export const shapes: Record<string, string> = {
    wave: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='1368' height='400' fill='none'%3e%3cmask id='a' width='1368' height='401' x='0' y='0' maskUnits='userSpaceOnUse'%3e%3cpath fill='url(%23paint0_linear)' d='M437 116C223 116 112 0 112 0h1256v400c-82 0-225-21-282-109-112-175-436-175-649-175z'/%3e%3cpath fill='url(%23paint1_linear)' d='M1368 400V282C891-29 788 40 711 161 608 324 121 372 0 361v39h1368z'/%3e%3cpath fill='url(%23paint2_linear)' d='M1368 244v156H0V94c92-24 198-46 375 0l135 41c176 51 195 109 858 109z'/%3e%3cpath fill='url(%23paint3_linear)' d='M1252 400h116c-14-7-35-14-116-16-663-14-837-128-1013-258l-85-61C98 28 46 8 0 0v400h1252z'/%3e%3c/mask%3e%3cg mask='url(%23a)'%3e%3cpath fill='white' d='M-172-98h1671v601H-172z'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear' x1='602' x2='1093.5' y1='-960.5' y2='272' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear' x1='482' x2='480' y1='1058.5' y2='70.5' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear' x1='424' x2='446.1' y1='-587.5' y2='274.6' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear' x1='587' x2='349' y1='-1120.5' y2='341' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
    wave2: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='1368' height='400' fill='none'%3e%3cmask id='a' width='1764' height='479' x='-229' y='-6' maskUnits='userSpaceOnUse'%3e%3cpath fill='url(%23paint0_linear)' d='M0 400h1350C1321 336 525 33 179-2c-345-34-395 236-408 402H0z'/%3e%3cpath fill='url(%23paint1_linear)' d='M1378 177v223H0V217s219 75 327 52C436 246 717-35 965 45s254 144 413 132z'/%3e%3cpath fill='url(%23paint2_linear)' d='M26 400l-78-16c-170 205-44-6-137-30l-4-1 4 1 137 30c37-45 89-110 159-201 399-514-45 238 1176-50 275-65 354-39 91 267H26z'/%3e%3c/mask%3e%3cg mask='url(%23a)'%3e%3cpath fill='white' d='M0 0h1368v400H0z'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear' x1='431' x2='397.3' y1='-599' y2='372.8' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear' x1='236.5' x2='446.6' y1='-586' y2='381.5' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear' x1='851.8' x2='640.4' y1='-867.2' y2='363.7' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
    round: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='1368' height='400' fill='none'%3e%3cmask id='a' width='2269' height='1408' x='-610' y='-509' maskUnits='userSpaceOnUse'%3e%3ccircle cx='1212.8' cy='74.8' r='317.5' fill='url(%23paint0_linear)' transform='rotate(-52 1213 75)'/%3e%3ccircle cx='737.8' cy='445.8' r='317.5' fill='url(%23paint1_linear)' transform='rotate(-116 738 446)'/%3e%3ccircle cx='601.8' cy='52.8' r='418.6' fill='url(%23paint2_linear)' transform='rotate(-117 602 53)'/%3e%3ccircle cx='999.8' cy='364' r='389.1' fill='url(%23paint3_linear)' transform='rotate(31 1000 364)'/%3e%3cellipse cx='-109.2' cy='263.5' fill='url(%23paint4_linear)' rx='429.2' ry='465.8' transform='rotate(-85 -109 264)'/%3e%3c/mask%3e%3cg mask='url(%23a)'%3e%3cpath fill='white' d='M0 0h1368v400H0z'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear' x1='1301.2' x2='161.4' y1='-1879.7' y2='-969.6' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear' x1='826.2' x2='-313.6' y1='-1508.7' y2='-598.6' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear' x1='718.4' x2='-784.3' y1='-2524' y2='-1324.2' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear' x1='1108.2' x2='-288.6' y1='-2031.1' y2='-915.9' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint4_linear' x1='10.4' x2='-1626.5' y1='-2603.8' y2='-1399.5' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='white'/%3e%3cstop offset='1' stop-color='white' stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
};


export const colorVariants: Record<string, string[]> = {
    darkGrey: ['#171717', '#383838'],
    marineBlue: ['#006D8F', '#0049A1'],
    veryBlue: ['#0027AF', '#270094'],
    rubyRed: ['#98002B', '#8D1134'],
    toastyOrange: ['#BE2200', '#A41D00'],
    purpleSky: ['#8912CA', '#3E00EA'],
    eveningSea: ['#00FFF2', '#035355'],
    teal: ['#005B4B'],
    pinkSea: ['#C8077A', '#C2297D'],
};


export const genHeaderTheme = (colors: string[], shape: string): {
    colors: string[];
    shape: string;
    backgroundImage: string;
} => {
    const gradientColors = colors.length === 1 ? [colors[0], colors[0]] : colors;
    const gradient = `linear-gradient(90deg, ${gradientColors.join(', ')})`;
    const backgroundImage = `${shape},  ${gradient}`;

    return { colors, shape, backgroundImage };
};


export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                type: 'light',
                background: {
                    default: '#F8F8F8',
                },
                status: {
                    ok: '#1DB954',
                    warning: '#FF9800',
                    error: '#E22134',
                    running: '#2E77D0',
                    pending: '#FFED51',
                    aborted: '#757575',
                },
                bursts: {
                    fontColor: '#FEFEFE',
                    slackChannelText: '#ddd',
                    backgroundColor: {
                        default: '#7C3699',
                    },
                    gradient: {
                        linear: 'linear-gradient(-137deg, #4BB8A5 0%, #187656 100%)',
                    },
                },
                primary: {
                    main: '#2E77D0',
                },
                banner: {
                    info: '#2E77D0',
                    error: '#E22134',
                    text: '#FFFFFF',
                    link: '#000000',
                    warning: '#FF9800',
                },
                border: '#E6E6E6',
                textContrast: '#000000',
                textVerySubtle: '#DDD',
                textSubtle: '#6E6E6E',
                highlight: '#FFFBCC',
                errorBackground: '#FFEBEE',
                warningBackground: '#F59B23',
                infoBackground: '#ebf5ff',
                errorText: '#CA001B',
                infoText: '#004e8a',
                warningText: '#000000',
                linkHover: '#2196F3',
                link: '#0A6EBE',
                gold: yellow.A700,
                navigation: {
                    background: '#171717',
                    indicator: '#9BF0E1',
                    color: '#b5b5b5',
                    selectedColor: '#FFF',
                    navItem: {
                        hoverBackground: '#404040',
                    },
                    submenu: {
                        background: '#404040',
                    },
                },
                pinSidebarButton: {
                    icon: '#181818',
                    background: '#BDBDBD',
                },
                tabbar: {
                    indicator: '#9BF0E1',
                },
            }
            : {
                // palette values for dark mode
                type: 'dark',
                background: {
                    default: '#333333',
                },
                status: {
                    ok: '#71CF88',
                    warning: '#FFB84D',
                    error: '#F84C55',
                    running: '#3488E3',
                    pending: '#FEF071',
                    aborted: '#9E9E9E',
                },
                bursts: {
                    fontColor: '#FEFEFE',
                    slackChannelText: '#ddd',
                    backgroundColor: {
                        default: '#7C3699',
                    },
                    gradient: {
                        linear: 'linear-gradient(-137deg, #4BB8A5 0%, #187656 100%)',
                    },
                },
                primary: {
                    main: '#9CC9FF',
                    dark: '#82BAFD',
                },
                secondary: {
                    main: '#FF88B2',
                },
                banner: {
                    info: '#2E77D0',
                    error: '#E22134',
                    text: '#FFFFFF',
                    link: '#000000',
                    warning: '#FF9800',
                },
                border: '#E6E6E6',
                textContrast: '#FFFFFF',
                textVerySubtle: '#727272',
                textSubtle: '#CCCCCC',
                highlight: '#FFFBCC',
                errorBackground: '#FFEBEE',
                warningBackground: '#F59B23',
                infoBackground: '#ebf5ff',
                errorText: '#CA001B',
                infoText: '#004e8a',
                warningText: '#000000',
                linkHover: '#82BAFD',
                link: '#9CC9FF',
                gold: yellow.A700,
                navigation: {
                    background: '#424242',
                    indicator: '#9BF0E1',
                    color: '#b5b5b5',
                    selectedColor: '#FFF',
                    navItem: {
                        hoverBackground: '#404040',
                    },
                    submenu: {
                        background: '#404040',
                    },
                },
                pinSidebarButton: {
                    icon: '#404040',
                    background: '#BDBDBD',
                },
                tabbar: {
                    indicator: '#9BF0E1',
                },
            }),
    },
});

// export const lightTheme = createTheme({
//     palette: {
//         type: 'light',
//         background: {
//             default: '#F8F8F8',
//         },
//         status: {
//             ok: '#1DB954',
//             warning: '#FF9800',
//             error: '#E22134',
//             running: '#2E77D0',
//             pending: '#FFED51',
//             aborted: '#757575',
//         },
//         bursts: {
//             fontColor: '#FEFEFE',
//             slackChannelText: '#ddd',
//             backgroundColor: {
//                 default: '#7C3699',
//             },
//             gradient: {
//                 linear: 'linear-gradient(-137deg, #4BB8A5 0%, #187656 100%)',
//             },
//         },
//         primary: {
//             main: '#2E77D0',
//         },
//         banner: {
//             info: '#2E77D0',
//             error: '#E22134',
//             text: '#FFFFFF',
//             link: '#000000',
//             warning: '#FF9800',
//         },
//         border: '#E6E6E6',
//         textContrast: '#000000',
//         textVerySubtle: '#DDD',
//         textSubtle: '#6E6E6E',
//         highlight: '#FFFBCC',
//         errorBackground: '#FFEBEE',
//         warningBackground: '#F59B23',
//         infoBackground: '#ebf5ff',
//         errorText: '#CA001B',
//         infoText: '#004e8a',
//         warningText: '#000000',
//         linkHover: '#2196F3',
//         link: '#0A6EBE',
//         gold: yellow.A700,
//         navigation: {
//             background: '#171717',
//             indicator: '#9BF0E1',
//             color: '#b5b5b5',
//             selectedColor: '#FFF',
//             navItem: {
//                 hoverBackground: '#404040',
//             },
//             submenu: {
//                 background: '#404040',
//             },
//         },
//         pinSidebarButton: {
//             icon: '#181818',
//             background: '#BDBDBD',
//         },
//         tabbar: {
//             indicator: '#9BF0E1',
//         },
//     },
//     defaultPageTheme: 'home',
//     pageTheme,
// });

// /**
//  * The default Backstage dark theme.
//  *
//  * @public
//  */
// export const darkTheme = createTheme({
//     palette: {
//         type: 'dark',
//         background: {
//             default: '#333333',
//         },
//         status: {
//             ok: '#71CF88',
//             warning: '#FFB84D',
//             error: '#F84C55',
//             running: '#3488E3',
//             pending: '#FEF071',
//             aborted: '#9E9E9E',
//         },
//         bursts: {
//             fontColor: '#FEFEFE',
//             slackChannelText: '#ddd',
//             backgroundColor: {
//                 default: '#7C3699',
//             },
//             gradient: {
//                 linear: 'linear-gradient(-137deg, #4BB8A5 0%, #187656 100%)',
//             },
//         },
//         primary: {
//             main: '#9CC9FF',
//             dark: '#82BAFD',
//         },
//         secondary: {
//             main: '#FF88B2',
//         },
//         banner: {
//             info: '#2E77D0',
//             error: '#E22134',
//             text: '#FFFFFF',
//             link: '#000000',
//             warning: '#FF9800',
//         },
//         border: '#E6E6E6',
//         textContrast: '#FFFFFF',
//         textVerySubtle: '#727272',
//         textSubtle: '#CCCCCC',
//         highlight: '#FFFBCC',
//         errorBackground: '#FFEBEE',
//         warningBackground: '#F59B23',
//         infoBackground: '#ebf5ff',
//         errorText: '#CA001B',
//         infoText: '#004e8a',
//         warningText: '#000000',
//         linkHover: '#82BAFD',
//         link: '#9CC9FF',
//         gold: yellow.A700,
//         navigation: {
//             background: '#424242',
//             indicator: '#9BF0E1',
//             color: '#b5b5b5',
//             selectedColor: '#FFF',
//             navItem: {
//                 hoverBackground: '#404040',
//             },
//             submenu: {
//                 background: '#404040',
//             },
//         },
//         pinSidebarButton: {
//             icon: '#404040',
//             background: '#BDBDBD',
//         },
//         tabbar: {
//             indicator: '#9BF0E1',
//         },
//     },
//     defaultPageTheme: 'home',
//     pageTheme,
// });

import { createTheme } from '@mui/material/styles'
import FFF_Tusj from '@/fonts/fff-tusj-webfont.woff2'
import { grey } from '@mui/material/colors'

export const portfolioTheme = createTheme({
    root: {
        flexGrow: 1,
    },
    typography: {
        allVariants: {
            fontFamily: 'Hoefler Text, Georgia, serif',
            color: '#ebebeb'
        },
        h1: {
            fontFamily: 'FFF_Tusj',
            fontSize: '3.25rem',
            fontDisplay: 'swap',
        },
        h2: {
            fontFamily: 'Hoefler Text, Georgia, serif',
            fontSize: '1.75rem',
            fontDisplay: 'swap',
        },
        h3: {
            fontFamily: 'Hoefler Text, Georgia, serif',
            fontSize: '1.5rem',
            marginTop: '0.3rem',
        },
        body1: {
           fontSize: '1.125rem',
           lineHeight: '1.5rem',
           color: '#aaa'
        },
        body2: {
           fontSize: '1rem',
           color: '#aaa',
           fontFamily: 'Helvetica, Arial, sans-serif',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'FFF_Tusj';
                    font-style: normal;
                    src: url(${FFF_Tusj}) format('woff2');
                }
            `,
        },
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    backgroundColor: grey[700],
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    padding: 0,
                    backgroundColor: 'rgba(0,0,0,0)',
                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    padding: 0,
                },
            },
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    paddingLeft: 0,
                    paddingRight: '46px'
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1D1D1D',
                    color: '#fff',
                },
            },
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    backgroundColor: '#222',
                    color: '#fff',
                    paddingTop: '0.625rem',
                    paddingBottom: '0.625rem',
                },
            },
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1D1D1D',
                    color: '#aaa',
                    marginTop: '1.5rem',
                },
                dividers: {
                    paddingTop: 0,
                },
            },
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    backgroundColor: '#222',
                    color: '#aaa',
                    paddingRight: '1.5rem',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'Helvetica, arial, sans-serif',
                    color: '#aaa',
                    borderColor: '#666',
                    borderRadius: '0',
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: '#666',

                    "&:before": {
                        borderColor: '#666',
                    },
                    "&:after": {
                        borderColor: '#666',
                    },
                },
            },
        },
    },
})

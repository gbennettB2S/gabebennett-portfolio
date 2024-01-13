import { Outlet } from 'react-router-dom'
import { Typography, useMediaQuery, Unstable_Grid2 as Grid } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'
import { portfolioTheme } from '@/portfolioTheme'
import { PortfolioLine } from '@/components/portfolioLine/portfolioLine'
import { IntroSidebar } from '@/components/introSidebar/introSidebar'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import StickyBox from 'react-sticky-box'

const Root = () => {
    const theme = useTheme()

    const mainGridSx = {
        mx: 3,

        [theme.breakpoints.down("sm")]: {
            ml: 1.3,
            mr: 0,
        },
    }

    return (
        <ThemeProvider theme={portfolioTheme}>
            <CssBaseline />
            <GlobalStyles
                styles={{
                    body: {
                        backgroundColor: '#1D1D1D',
                        color: '#ffffff',
                    },
                }}
            />

            <Grid container sx={mainGridSx} spacing={3} justifyContent="space-between">
                <Grid xs={12} lg={4.2}>
                    <StickyBox offsetTop={2} offsetBottom={20}>
                        <IntroSidebar />
                    </StickyBox>
                </Grid>
                <Grid xs={12} lg={7.8}>
                    <PortfolioLine />
                </Grid>
            </Grid>

            <Outlet />
        </ThemeProvider>
    )
}

export default Root;

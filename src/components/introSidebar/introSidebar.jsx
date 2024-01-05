import { Typography, Box, Skeleton, useMediaQuery, Unstable_Grid2 as Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link } from 'react-router-dom'
import { BASE_API_URL } from '@/constants'
import { useState, useEffect } from 'react'
import axios from 'axios'
import gitHubIcon from '@/images/github-small.png'
import linkedInIcon from '@/images/linkedin-small.png'
import '@/components/introSidebar/introSidebar.scss'

export const IntroSidebar = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
    const [intro, setIntro] = useState()
    const [isBioExpanded, setIsBioExpanded] = useState(false)

    const fetchData = () => {
        axios
            .get(BASE_API_URL + 'portfolio-intro')
            .then((res) => {
                setIntro(res.data[0])
            })
      }

    useEffect(() => {
        fetchData()
    }, [])

    const handleBioChange = (panel) => (event, newExpanded) => {
        setIsBioExpanded(newExpanded ? panel : false)
    };

    const expandSx = {
        color: '#aaa',

        '&:hover': {
             color: '#fff',
        },
    }

    const socials = <>
        <Link to="https://www.linkedin.com/in/hangar18studio/" target="_blank">
            <img src={linkedInIcon} width="30" alt="LinkedIn logo" className="linkedin" />
        </Link>
        <Link to="https://github.com/gbennettB2S" target="_blank">
            <img src={gitHubIcon} width="30" alt="GitHub logo" className="github" />
        </Link>
    </>

    return (
    <>
        <Box className="socials-tablet">{socials}</Box>
        <Grid container sx={{ maxWidth: '30rem' }}>
            <Grid xs={2} sm={3} lg={12}>
            {intro ?
                <img
                    src={intro.hero_image.guid}
                    alt={intro.hero_image.post_excerpt}
                    className={`my-portrait ${isBioExpanded && !isTablet && "reduce-portrait"}`}
                />
                :
                <Skeleton variant="circular" className="my-portrait" width={340} height={340} sx={{ mt: 2.5 }} />
            }
            </Grid>
            <Grid xs={10} sm={9} lg={12} className="title-block">
                <Typography variant="h1" sx={{ ml: -0.5 }} className="my-name">
                    {intro
                        ? intro.title.rendered
                        : <Skeleton variant="text" className="my-name" sx={{ fontSize: '4rem', width: '18rem' }} />
                    }
                </Typography>
                <Typography variant="h3" className="my-title">
                    {intro
                        ? intro.subhead
                        : <Skeleton variant="text" className="my-title"
                            sx={{ fontSize: '2rem', width: '17rem', ml: -0.5, mb: 1 }} />
                    }
                </Typography>
                {!isMobile &&
                    <>
                        {intro ?
                            <Accordion square
                                expanded={isBioExpanded === 'bio'}
                                onChange={handleBioChange('bio')}
                                sx={{ maxWidth: 426 }}
                                elevation={0}>

                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={expandSx} />}>
                                    <Typography variant="body2" sx={[expandSx, {width: '100%'}]}>About</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ mt: -1.5 }}>
                                    <Typography variant="body2">
                                         {intro.bio}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            :
                            <Skeleton variant="text" sx={{ fontSize: '1.5rem', width: '2rem', ml: -0.5, mb: 2 }} />
                        }
                    </>
                }
            </Grid>
        </Grid>
        <Box className="skills-tech">
            {intro ? intro.skills_and_tech.map((item, index) => (
                <Grid xs={12} sx={{ p: 0, pl: 4.8, pt: 0.4 }} className="lineBox" key={index}>
                    <Typography variant="body1" dangerouslySetInnerHTML={{ __html: item }}></Typography>
                </Grid>
                ))
                :
                <Skeleton variant="rounded" width={420} height={162} sx={{ ml: 4.3 }} />
            }
        </Box>
        <Box className="socials-desktop">{socials}</Box>

        {isMobile &&
            <Box>
                {intro ?
                    <Accordion square
                        expanded={isBioExpanded === 'bio'}
                        onChange={handleBioChange('bio')}
                        elevation={0}>

                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={expandSx} />}>
                            <Typography variant="body2" sx={[expandSx, {width: '100%'}]}>About</Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{ mt: -1.5 }}>
                            <Typography variant="body2">
                                 {intro.bio}
                            </Typography>

                            <Box sx={{ mt: 2 }}>{socials}</Box>
                        </AccordionDetails>
                    </Accordion>
                    :
                    <Skeleton variant="text" sx={{ fontSize: '1.5rem', width: '3rem', mt: 1.3 }} />
                }
            </Box>
        }
    </>
    )
}

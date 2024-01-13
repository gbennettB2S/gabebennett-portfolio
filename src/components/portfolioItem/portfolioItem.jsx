import { Typography, useMediaQuery, Skeleton, Button, IconButton, Unstable_Grid2 as Grid } from '@mui/material'
import UIkit from 'uikit'
import { useParams, useNavigate } from "react-router-dom"
import { useTheme } from '@mui/material/styles'
import CircularProgress from '@mui/material/CircularProgress'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Divider from '@mui/material/Divider'
import { useState, useEffect } from 'react'
import { BASE_API_URL } from '@/constants'
import axios from 'axios'
import CloseIcon from '@mui/icons-material/Close'
import '@/components/portfolioItem/portfolioItem.scss'

export const PortfolioItem = () => {
    const { itemId } = useParams()
    const navigate = useNavigate()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isMedium = useMediaQuery(theme.breakpoints.down('lg'))
    const isLarge = useMediaQuery(theme.breakpoints.down('xl'))
    const [dialogMax, setDialogMax] = useState('md')
    const [portfolioItem, setPortfolioItem] = useState()

    const fetchPortolioItem = () => {
        axios
            .get(BASE_API_URL + 'portfolio-items/' + itemId + '?_embed=wp:term')
            .then((res) => {
                setPortfolioItem(res.data)
            })
    }

    useEffect(() => {
        fetchPortolioItem()
    }, [])

    useEffect(() => {
        if (isLarge) {
            setDialogMax('lg')
        }
        if (isMedium) {
            setDialogMax('md')
        }
    }, [isMedium, isLarge])

    const handleClose = () => {
        navigate('/')
    }

    return (
        <Dialog
            onClose={handleClose}
            fullScreen={isMobile}
            fullWidth
            open
            maxWidth={dialogMax}
            sx={{ minHeight: '100vh', maxHeight: '100vh' }}>

            <DialogTitle>
                <Grid container justifyContent="space-between">
                    <Typography variant="h3">
                        {portfolioItem
                            ? portfolioItem.title.rendered
                            : <Skeleton variant="text" sx={{ fontSize: '1.8rem', width: '12rem', mt: -0.6 }} />
                        }
                    </Typography>
                    <IconButton aria-label="delete" size="small" onClick={handleClose}>
                       <CloseIcon sx={{ color: '#aaa' }} />
                    </IconButton>
                </Grid>
            </DialogTitle>

            {portfolioItem ?
                <DialogContent>
                    <Grid container spacing={4}>
                        <Grid xs={12} md={6}>
                            {portfolioItem.images.length > 1 ?
                                <div className="uk-slidenav-position" data-uk-slideshow="ratio: false">
                                    <ul className="uk-slideshow-items"
                                        style={{ backgroundColor: portfolioItem.enable_white_bg == 1 ? '#fff' : '' }}>

                                        {portfolioItem.images.map((item, index) => (
                                            <li key={index} style={{ textAlign: 'center' }}>
                                                <img src={item.guid} className="portfolio-image" alt={item.post_excerpt} />
                                            </li>
                                            ))
                                        }
                                    </ul>
                                    <div style={{ textAlign: 'center', marginTop: '-1.25rem' }}>
                                        <a className="uk-slidenav uk-slidenav-contrast uk-slidenav-previous uk-position-medium"
                                            href=""
                                            data-uk-slidenav-previous
                                            data-uk-slideshow-item="previous">
                                        </a>

                                        <span className="swipe">Swipe on Image</span>

                                        <a className="uk-slidenav uk-slidenav-contrast uk-slidenav-next uk-position-medium"
                                            href=""
                                            data-uk-slidenav-next
                                            uk-slideshow-item="next">
                                        </a>
                                    </div>
                                </div>
                                :
                                <div style={{ textAlign: 'center' }}>
                                    <img
                                        src={portfolioItem.images[0].guid}
                                        alt={portfolioItem.images[0].post_excerpt}
                                        className="portfolio-image"
                                        style={{ maxHeight: '32.5rem' }}
                                    />
                                </div>
                            }
                        </Grid>

                        <Grid xs={12} md={6} lg={5}>
                            <Typography variant="body2" sx={{ mt: -0.6, color: '#fff' }}>Description</Typography>
                            <Divider sx={{ mt: 0.5, mb: 1 }} />
                            <Typography variant="body2" sx={{ mb: 3 }}
                                dangerouslySetInnerHTML={{ __html: portfolioItem.description }}>
                            </Typography>

                            <Typography variant="body2" sx={{ color: '#fff' }}>Credits</Typography>
                            <Divider sx={{ mt: 0.5, mb: 1 }} />
                            <Typography variant="body2" sx={{ mb: 3 }}
                                dangerouslySetInnerHTML={{ __html: portfolioItem.credits }}>
                            </Typography>

                            <Typography variant="body2" sx={{ color: '#fff' }}>Tech</Typography>
                            <Divider sx={{ mt: 0.5, mb: 1 }} />
                            <Typography variant="body2" sx={{ mb: 10 }}>
                                {portfolioItem.tech}
                            </Typography>
                        </Grid>
                    </Grid>
                </DialogContent>
                :
                <div className="spinner-container">
                    <CircularProgress />
                </div>
            }

            <DialogActions>
                <Grid container sx={{ mt: 1, width: '100%' }} justifyContent="space-between">
                    <Grid sx={{ mt: 0.85, ml: 2 }}>
                    {isMedium || !isMobile &&
                        <Typography variant="body2">
                            {portfolioItem
                                // show categories
                                ? portfolioItem._embedded['wp:term'][0].map((item, index, {length}) => (
                                      index + 1 !== length
                                          ? item.name + ', '
                                          : item.name
                                  ))
                                : <Skeleton variant="text" sx={{ fontSize: '1rem', width: '12rem' }} />
                            }
                        </Typography>
                    }
                    </Grid>

                    <Grid>
                        <Button variant="outlined" onClick={handleClose}>Close</Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    )
}

import { Typography, Skeleton } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BASE_API_URL } from '@/constants'
import '@/components/portfolioLine/portfolioLine.scss'

export const PortfolioLine = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [portfolioItems, setPortfolioItems] = useState()

    const fetchPortfolioItems = () => {
        const url = BASE_API_URL + 'portfolio-items?per_page=30'
        const options = { method: "GET" }

        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                // Sort items based on priority_order
                data?.sort((a, b) => (a.priority_order - b.priority_order))
                setPortfolioItems(data)
            })
    }

    useEffect(() => {
        fetchPortfolioItems()
    }, [])

    const handleClickOpen = () => {
        setOpen(true)
      };

      const handleClose = () => {
        setOpen(false)
      };

    return (
    <>
        {portfolioItems ?
            <div className="portfolio-guide">
                <div className="entries">
                    {portfolioItems.map((item, index) => (
                        <div className="entry" key={index}>
                            <h3 className="title big" onClick={() => navigate('/portfolio-piece/' + item.id)}>
                                {item.title.rendered}
                            </h3>
                            <div className="body">
                                <img onClick={() => navigate('/portfolio-piece/' + item.id)}
                                    src={item.better_featured_image.media_details.sizes.thumbnail.source_url}
                                    alt={item.better_featured_image.alt_text}
                                    width={item.better_featured_image.media_details.sizes.thumbnail.width}
                                    height={item.better_featured_image.media_details.sizes.thumbnail.height}
                                />
                                <Typography variant="body2" sx={{ mt: 1.5 }}>{item.short_description}</Typography>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
            :
            <div className="spinner-container">
                <CircularProgress />
            </div>
        }
    </>
    )
}

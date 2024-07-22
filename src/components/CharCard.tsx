import * as React from 'react'
import { Box, Card, CardContent, CardMedia, Button, Typography } from '@mui/material'
import CharModal from './CharModal'

// TODO: Needs to have an animation on hover

export type CardDataType = {
    name: string
    species: string[] // url
    height: number // should be in meters
    mass: number // should be in kg
    created: string
    numFilms: number
}
export function CharCard({ data }: { data: CardDataType }) {
    const [showModal, setShowModal] = React.useState(false)
    const handleOpen = () => {
        setShowModal(true)
    }
    const handleClose = () => {
        setShowModal(false)
    }

    console.log('cardData', data)
    const { name } = data
    console.log({ name })
    const imgURL = React.useMemo(() => {
        const random = Math.floor(Math.random() * 300)
        return `https://picsum.photos/id/${random}/200`
    }, [])
    return (
        <>
            <Button onClick={handleOpen}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            {name}
                        </Typography>
                    </CardContent>
                    <CardMedia sx={{ height: 300 }} image={imgURL} title={name} />
                </Card>
            </Button>
            <CharModal data={data} showModal={showModal} handleClose={handleClose} />
        </>
    )
}

export default CharCard

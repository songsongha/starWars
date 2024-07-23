import * as React from 'react'
import { Card, CardContent, CardMedia, Button, Typography } from '@mui/material'
import CharModal from '../CharModal/CharModal'
import { CardDataType } from '../../views/UserList'
import './CharCard.css'

// TODO: Needs to have an animation on hover

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
                <Card className='card'>
                    <CardMedia className='image' image={imgURL} title={name} />
                    <CardContent>
                        <Typography variant='h6' component='div'>
                            {name}
                        </Typography>
                    </CardContent>
                </Card>
            </Button>
            <CharModal data={data} showModal={showModal} handleClose={handleClose} />
        </>
    )
}

export default CharCard

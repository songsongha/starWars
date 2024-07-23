import * as React from 'react'
import { Card, CardMedia, Button } from '@mui/material'
import CharModal from '../CharModal/CharModal'
import { CardDataType } from '../../views/UserList/UserList'
import './CharCard.css'
import { colorArray } from '../../utils/helpers'

// TODO: Needs to have an animation on hover

export function CharCard({ data }: { data: CardDataType }) {
    const [showModal, setShowModal] = React.useState(false)
    const handleOpen = () => {
        setShowModal(true)
    }
    const handleClose = () => {
        setShowModal(false)
    }

    const { name, species } = data

    const backgroundColor = React.useMemo(() => {
        let colorIndex = 0
        if (species.length) {
            const match = species[0].match(/\d+/) || [0]
            colorIndex = Number(match[0])
        }
        return colorArray[colorIndex]
    }, [species])

    const imgURL = React.useMemo(() => {
        const random = Math.floor(Math.random() * 300)
        return `https://picsum.photos/id/${random}/200`
    }, [])
    return (
        <>
            <Button onClick={handleOpen}>
                <Card className='card' sx={{ backgroundColor }}>
                    <CardMedia className='image' image={imgURL} title={name} />
                    <h1 className='name'>{name}</h1>
                </Card>
            </Button>
            <CharModal data={data} showModal={showModal} handleClose={handleClose} />
        </>
    )
}

export default CharCard

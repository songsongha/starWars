import { Box, Grid, Modal, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { getWorldData } from '../utils/api'
import { titleCase } from '../utils/helpers'
import { CardDataType } from '../views/UserList'

// TODO: Needs to have an animation on hover

export function CharModal({
    data,
    showModal,
    handleClose
}: {
    data: CardDataType
    showModal: boolean
    handleClose: () => void
}) {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
    }

    const { name, height, mass, created, numFilms, world, birthYear } = data
    const { data: worldData, error, isLoading } = useQuery(world, () => getWorldData(world))
    console.log({ worldData })

    return (
        <Modal
            open={showModal}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box sx={style}>
                <Typography id='modal-modal-title' variant='h5' component='h2'>
                    {name}
                </Typography>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            Birth Year: {birthYear}
                        </Grid>
                        <Grid item xs={6}>
                            Height: {height}m
                        </Grid>
                        <Grid item xs={6}>
                            Mass: {mass}kg
                        </Grid>
                        <Grid item xs={6}>
                            Date Added: {created}
                        </Grid>
                        <Grid item xs={6}>
                            Number of Films: {numFilms}
                        </Grid>
                    </Grid>
                </Box>
                <Typography id='modal-modal-title' variant='body1' component='h2'>
                    Home world: {worldData?.name}
                </Typography>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            Terrain: {titleCase(worldData?.terrain)}
                        </Grid>
                        <Grid item xs={6}>
                            Climate: {titleCase(worldData?.climate)}
                        </Grid>
                        <Grid item xs={6}>
                            Number of Residents: {worldData?.residents.length}
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Modal>
    )
}

export default CharModal

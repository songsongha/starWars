import { Box, Divider, Grid, Modal, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { getWorldData } from '../../utils/api'
import { titleCase } from '../../utils/helpers'
import { CardDataType } from '../../views/UserList'
import './CharModal.css'

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
    const { name, height, mass, created, numFilms, world, birthYear } = data
    const { data: worldData } = useQuery(world, () => getWorldData(world))

    return (
        <Modal
            open={showModal}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box className='modal'>
                <Typography variant='h5' component='h2'>
                    {name}
                </Typography>
                <Box sx={{ width: '100%', margin: '12px' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            Birth Year: {birthYear}
                        </Grid>
                        <Grid item xs={6}>
                            Height: {height}m
                        </Grid>
                        <Grid item xs={6}>
                            Mass: {isNaN(mass) ? 'Unknown' : `${mass}kg`}
                        </Grid>
                        <Grid item xs={6}>
                            Number of Films: {numFilms}
                        </Grid>
                        <Grid item xs={6}>
                            Date Added: {created}
                        </Grid>
                    </Grid>
                </Box>
                <Divider></Divider>
                <Box className='worldContainer'>
                    <Typography variant='body1' component='h2'>
                        Home World
                    </Typography>
                    <Box sx={{ width: '100%', margin: '12px' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                Name: {titleCase(worldData?.name)}
                            </Grid>
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
            </Box>
        </Modal>
    )
}

export default CharModal

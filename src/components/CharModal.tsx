import { Box, Grid, Modal, Typography } from '@mui/material'

// TODO: Needs to have an animation on hover

type ModalDataType = {
    name: string
    species: string[] // url
    height: number // should be in meters
    mass: number // should be in kg
    created: string
    numFilms: number
}
export function CharModal({
    data,
    showModal,
    handleClose
}: {
    data: ModalDataType
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

    const { name, height, mass, created, numFilms } = data

    return (
        <Modal
            open={showModal}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box sx={style}>
                <Typography id='modal-modal-title' variant='h6' component='h2'>
                    {name}
                </Typography>
                <Box sx={{ width: '100%' }}>
                    <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                Birthday:
                            </Grid>
                            <Grid item xs={6}>
                                Height: {height}
                            </Grid>
                            <Grid item xs={6}>
                                Mass: {mass}
                            </Grid>
                            <Grid item xs={6}>
                                Date Added: {created}
                            </Grid>
                            <Grid item xs={6}>
                                Number of Films: {numFilms}
                            </Grid>
                        </Grid>
                    </Typography>
                </Box>
            </Box>
        </Modal>
    )
}

export default CharModal

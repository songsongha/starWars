import { Box, InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'
import { debounce } from 'lodash'
import './SearchBar.css'

export function SearchBar({
    setSearchQuery,
    setPage
}: {
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
    setPage: React.Dispatch<React.SetStateAction<number>>
}) {
    const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
        setPage(1)
    }, 300)
    return (
        <Box className='search'>
            <TextField
                label='Search by Name'
                id='search'
                placeholder='i.e. Darth Maul'
                size='small'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <Search />
                        </InputAdornment>
                    )
                }}
                onInput={handleSearch}
            />
        </Box>
    )
}

export default SearchBar

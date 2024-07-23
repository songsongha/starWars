import { InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'
import { debounce } from 'lodash'

export function SearchBar({ setSearchQuery }: { setSearchQuery: React.Dispatch<React.SetStateAction<string>> }) {
    const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setSearchQuery(e.target.value)
    }, 300)
    return (
        <TextField
            label='Search by Name'
            id='search'
            placeholder='i.e. Darth Maul'
            size='small'
            InputProps={{
                endAdornment: (
                    <InputAdornment position='start'>
                        <Search />
                    </InputAdornment>
                )
            }}
            onInput={handleSearch}
        />
    )
}

export default SearchBar

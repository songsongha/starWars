import * as React from 'react'
import dayjs from 'dayjs'
import { useQuery } from 'react-query'
import { getUserList } from '../../utils/api'
import CharCard from '../../components/CharCard/CharCard'
import { Box, Pagination } from '@mui/material'
import SearchBar from '../../components/SearchBar/SearchBar'
import './UserList.css'

export type CardDataType = {
    name: string
    species: string[] // url
    height: number // should be in meters
    mass: number // should be in kg
    created: string
    numFilms: number
    world: string
    birthYear: string
}

export function UserList() {
    const [page, setPage] = React.useState(1)
    const [search, setSearch] = React.useState('')

    const {
        data: users,
        error,
        isLoading
    } = useQuery(['getUserList', `${search}:${page}`], () => getUserList(search, page), {
        keepPreviousData: true
    })

    console.log({ users })

    const handlePageChange = React.useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        console.log({ value })
        setPage(value)
    }, [])

    const numPages = React.useMemo(() => {
        if (!users?.count) return 0
        return Math.ceil(users.count / 10)
    }, [users])

    const cards = React.useMemo(() => {
        if (isLoading) return <Box className='error'> Fetching Users </Box>
        if (error) {
            console.log({ error })
            return <Box className='error'> An error occured </Box>
        }
        if (!users?.results?.length) return <Box className='error'>No cards</Box>

        const userArray = users.results
        // TODO: change any type
        return userArray.map((result: any) => {
            const { name, species, height, mass, created, films, homeworld, birth_year } = result
            console.log(name, mass)
            const cardData: CardDataType = {
                name,
                species, // url
                height: Number(height) / 100, // meters
                mass: Number(mass), // kilograms
                created: dayjs(created).format('DD-MM-YYYY'), // need to clarify date format, this assumes numerical format
                numFilms: films.length,
                world: homeworld,
                birthYear: birth_year
            }
            return <CharCard key={name} data={cardData} />
        })
    }, [users])

    return (
        <>
            <Box className='header'>
                <h1 className='title'>STAR WARS ROLODEX</h1>
                <SearchBar setSearchQuery={setSearch} setPage={setPage} />
                <Pagination count={numPages} onChange={handlePageChange} />
            </Box>
            {cards}
        </>
    )
}

export default UserList

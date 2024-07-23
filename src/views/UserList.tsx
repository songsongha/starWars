import * as React from 'react'
import dayjs from 'dayjs'
import { useQuery } from 'react-query'
import { getUserList } from '../utils/api'
import CharCard from '../components/CharCard/CharCard'
import { Pagination } from '@mui/material'
import SearchBar from '../components/SearchBar/SearchBar'

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
        setPage(value)
    }, [])

    const numPages = React.useMemo(() => {
        if (!users?.count) return 0
        return Math.ceil(users.count / 10)
    }, [users])

    const cards: CardDataType = React.useMemo(() => {
        if (!users) return []
        const userArray = users.results
        // TODO: change any type
        return userArray.map((result: any) => {
            const { name, species, height, mass, created, films, homeworld, birth_year } = result
            console.log(name, mass)
            const cardData = {
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

    if (isLoading) return <div> Fetching Users </div>
    if (error) {
        console.log({ error })
        return <div> An error occured </div>
    }
    return (
        <>
            <h1>Star Wars Rolodex</h1>
            <SearchBar setSearchQuery={setSearch} />
            <Pagination count={numPages} onChange={handlePageChange} />
            {cards}
        </>
    )
}

export default UserList

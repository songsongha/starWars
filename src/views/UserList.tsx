import * as React from 'react'
import dayjs from 'dayjs'
import { useQuery } from 'react-query'
import { getUserList } from '../utils/api'
import CharCard from '../components/CharCard/CharCard'
import { Pagination } from '@mui/material'

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
    const { data: users, error, isLoading } = useQuery('getUserList', getUserList)

    console.log({ users })
    const cards: CardDataType = React.useMemo(() => {
        if (!users) return []
        const userArray = users.results

        // TODO: change any type
        return userArray.map((result: any) => {
            const { name, species, height, mass, created, films, homeworld, birth_year } = result
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
            <Pagination count={10} />
            {cards}
        </>
    )
}

export default UserList

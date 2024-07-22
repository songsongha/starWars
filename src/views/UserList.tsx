import * as React from 'react'
import { useQuery } from 'react-query'
import { getUserList } from '../utils/api'

import CharCard, { CardDataType } from '../components/CharCard'

export function UserList() {
    const { data: users, error, isLoading } = useQuery('getUserList', getUserList)

    console.log({ users })
    const cards: CardDataType = React.useMemo(() => {
        if (!users) return []
        const userArray = users.results
        // TODO: change any type
        return userArray.map((result: any) => {
            const { name, species, height, mass, created, films } = result
            const cardData = {
                name,
                species, // url
                height: Number(height) / 100,
                mass: Number(mass), // should be in kg
                created,
                numFilms: films.length
            }
            return <CharCard data={cardData} />
        })
    }, [])
    if (isLoading) return <div> Fetching Users </div>
    if (error) {
        console.log({ error })
        return <div> An error occured </div>
    }
    return (
        <>
            USERLIST
            {cards}
        </>
    )
}

export default UserList

import * as React from 'react'
import { useQuery } from 'react-query'
import { getUserList } from '../utils/api'
import Card from '@mui/material/Card'

export function UserList() {
    const { data: users, error, isLoading } = useQuery('getUserList', getUserList)

    console.log({ users })
    const cardData = React.useMemo(() => {
        if (!users) return []
        const userArray = users.results
        // TODO: change any type
        return userArray.map((result: any) => {
            const { name, birth_year, eye_color, gender, height } = result
            return {
                name,
                birth_year,
                eye_color,
                gender,
                height: Number(result.height) / 100
            }
        })
    }, [])
    console.log({ cardData })
    if (isLoading) return <div> Fetching Users </div>
    if (error) {
        console.log({ error })
        return <div> An error occured </div>
    }
    return (
        <>
            <h1>Line-up User Profiles HELLO!</h1>
        </>
    )
}

export default UserList

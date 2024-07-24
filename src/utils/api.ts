import axios from 'axios'

type PeopleResult = {
    birth_year: string
    created: string
    edited: string
    eye_color: string
    films: string[]
    gender: string
    hair_color: string
    height: string
    homeworld: string
    mass: string
    name: string
    skin_color: string
    species: string[]
    starships: string[]
    url: string
    vehicles: string[]
}

type UserListResponse = {
    data: {
        count: number
        next: string | null
        previous: string | null
        results: PeopleResult[]
    }
}
export const getUserList = async (search: string, page: number) => {
    const response: UserListResponse = await axios.get(`https://swapi.dev/api/people/?search=${search}&page=${page}`)
    console.log({ response })
    return response.data
}

export const getWorldData = async (url: string) => {
    const response = await axios.get(url)
    return response.data
}

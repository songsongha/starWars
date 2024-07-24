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

type GetUserListResponse = {
    data: {
        count: number
        next: string | null
        previous: string | null
        results: PeopleResult[]
    }
}

type GetWorldDataResponse = {
    data: {
        climate: string
        created: string
        diameter: string
        edited: string
        films: string[]
        gravity: string
        name: string
        orbital_period: string
        population: string
        residents: string[]
        rotation_period: string
        surface_water: string
        terrain: string
        url: string
    }
}
export const getUserList = async (search: string, page: number) => {
    const response: GetUserListResponse = await axios.get(`https://swapi.dev/api/people/?search=${search}&page=${page}`)
    return response.data
}

export const getWorldData = async (url: string) => {
    const response: GetWorldDataResponse = await axios.get(url)
    return response.data
}

import axios from 'axios'

export const getUserList = async (search: string, page: number) => {
    const response = await axios.get(`https://swapi.dev/api/people/?search=${search}&page=${page}`)
    return response.data
}

export const getWorldData = async (url: string) => {
    const response = await axios.get(url)
    return response.data
}

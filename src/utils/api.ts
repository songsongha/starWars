import axios from 'axios'

export const getUserList = async (page: number) => {
    const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`)
    return response.data
}

export const getWorldData = async (url: string) => {
    const response = await axios.get(url)
    return response.data
}

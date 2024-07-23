import axios from 'axios'

export const getUserList = async () => {
    const response = await axios.get('https://swapi.dev/api/people')
    return response.data
}

export const getWorldData = async (url: string) => {
    const response = await axios.get(url)
    return response.data
}

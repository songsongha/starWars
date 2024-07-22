import axios from 'axios'

export const getUserList = async () => {
    const response = await axios.get('https://swapi.dev/api/people')
    return response.data
}

export const getUserDetail = async (id: string) => {
    const response = await fetch(`https://swapi.dev/api/people/${id}`)
    if (!response.ok) throw new Error('Network Error')
    return response.json()
}

import axios from "axios"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export const userEmailVerification = async (json: any) => {
    try {
        const response = await axios.post(`${baseUrl}/api/user/register/email`, json)
        return response;
    } catch (error) {
        console.error(error)
    }
}

export const userRegistration = async (json: any) => {
    try {
        const response = await axios.post(`${baseUrl}/api/user/register`, json)
        return response;
    } catch (error) {
        console.error(error)
    }
}

export const userLogin = async (json: any) => {
    try {
        const response = await axios.post(`${baseUrl}/api/user/login`, json)
        console.log(response)
        return response;
    } catch (error) {
        console.error(error)
    }
}
import axios from 'axios'

const API_URL = '/api/interview/'

const createInterview = async(interviewData, id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL+id, interviewData, config)
    return response.data
}

const getInterview = async(token) => {

    const config = {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    return response.data
}

const updateInterview = async(token, interviewData, id) => {

    const config = {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL+id, interviewData, config)
    return response.data

}
const deleteInterview = async(token, id) => {

    const config = {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }

    
    const response = await axios.put(API_URL+id, config)
    return response.data

}

const interviewService = {
    createInterview,
    getInterview,
    updateInterview,
    deleteInterview
}

export default interviewService
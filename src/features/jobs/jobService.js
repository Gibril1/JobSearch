import axios from 'axios'

const API_URL = 'http://localhost:5000/api/job/'

const createJob = async(jobData, token) => {

    const config = {
        headers : {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
        }
    }

    const response = await axios.post(API_URL, jobData, config)
    console.log(response)
    return response.data
}

const getJob = async(token) => {

    const config = {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

const updateJob = async(jobData, id, token) => {

    const config = {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL+id, jobData, config)


    return response.data
}
const deleteJob = async(id, token) => {

    const config = {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + id, config)

    

    return response.data
}

const jobService = {
    createJob,
    updateJob,
    getJob,
    deleteJob
}

export default jobService
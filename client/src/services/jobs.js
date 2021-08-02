import api from './apiConfig'

export const getAllJobs = async () => {
    try {
        const res = await api.get('/jobs')
        console.log(res)
        return res.data
    } catch(e) {
        throw e;
    }
} 

export const createJobs = async (input) =>{
    try{
        const res = await api.post("/jobs", input)
        console.log(res.data)
    }catch(e) {
        throw e;
    }
}
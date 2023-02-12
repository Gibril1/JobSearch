import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jobService from './jobService'
import { store } from '../../app/store'

const initialState = {
    jobs: [], 
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


// Create Jobs
export const createJob = createAsyncThunk('job/create', async(job, thunkAPI) => {
    try{
        const token = thunkAPI.getState().auth.user.token
        return await jobService.createJob(job, token)
    }catch(error) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message)|| 
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Update Jobs
export const updateJob = createAsyncThunk('job/update', async(job, thunkAPI) => {
    try{
        const token = store.getState().auth.user.token
        return await jobService.updateJob(job,token)
    }catch(error) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message)|| 
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get Jobs
export const getJobs = createAsyncThunk('job/get', async(_, thunkAPI) => {
    try{
        const token = thunkAPI.getState().auth.user.token
        return await jobService.getJobs(token)
    }catch(error) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message)|| 
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
// Get Job
export const getJob = createAsyncThunk('job/get/id', async(id, thunkAPI) => {
    try{
        const token = thunkAPI.getState().auth.user.token
        return await jobService.getJob(id, token)
    }catch(error) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message)|| 
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Delete Jobs
export const deleteJob = createAsyncThunk('job/delete', async(id, thunkAPI) => {
    try{
        const token = thunkAPI.getState().auth.user.token
        return await jobService.deleteJob(id, token)
    }catch(error) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message)|| 
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const jobSlice = createSlice({
    name:'job',
    initialState,
    reducers:{
        reset:(state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createJob.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createJob.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.jobs.push(action.payload)
            })
            .addCase(createJob.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getJob.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getJob.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.jobs = action.payload
            })
            .addCase(getJob.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getJobs.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getJobs.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.jobs = action.payload
            })
            .addCase(getJobs.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateJob.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateJob.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                let job = state.jobs.find((job) => job._id === action.payload.id)
                
                if(job){
                    job = action.payload
                }
                
            })
            .addCase(updateJob.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteJob.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteJob.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.jobs = state.jobs.filter((job) => job._id !== action.payload.id )
            })
            .addCase(deleteJob.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }

})

export const { reset } = jobSlice.actions
export default jobSlice.reducer
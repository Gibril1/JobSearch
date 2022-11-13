import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import interviewService from './interviewService'

const initialState = {
    interviews:[],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''  
}

// Create Interviews
export const createInterview = createAsyncThunk('interview/create', async(interview, id, thunkAPI) => {
    try{
        const token = thunkAPI.getState().auth.user.token
        return await interviewService.createInterview(interview, id, token)
    }catch(error){
        const message = (error.response &&
            error.response.data &&
            error.response.data.message)||
            error.message||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Update Interviews
export const updateInterview = createAsyncThunk('interview/update', async(interview, id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await interviewService.updateInterview(interview,id, token)
    } catch (error) {
        const message = (error.response &&
            error.response.data &&
            error.response.data.message)||
            error.message||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const interviewSlice = createSlice({
    name:'interview',
    initialState,
    reducers:{
        reset:(state) => initialState
    },
    extraReducers:(builder) => {
        builder
            .addCase(createInterview.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createInterview.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.interviews.push(action.payload)
            })
            .addCase(createInterview.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getInterview.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getInterview.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.interviews = action.payload
            })
            .addCase(getInterview.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateInterview.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateInterview.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.interviews = state.interviews.filter((interview) => interview._id !== action.payload.id )
                state.interviews = state.interviews.push(action.payload)
            })
            .addCase(updateInterview.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteInterview.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteInterview.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.interviews = state.interviews.filter((interview) => interview._id !== action.payload.id )
            })
            .addCase(deleteInterview.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = interviewSlice.actions
export default interviewSlice.reducer 
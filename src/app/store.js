import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import jobReducer from '../features/jobs/jobSlice'
import interviewReducer from '../features/interviews/interviewSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    job: jobReducer,
    interview: interviewReducer
  },
});

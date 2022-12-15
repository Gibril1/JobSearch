import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import JobPage from './pages/JobPage';
import JobForm from './components/JobForm';
import InterviewForm from './components/InterviewForm';
import InterviewPage from './pages/InterviewPage';
import EditJob from './components/EditJob';






function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route exact path= '/' element={<HomePage/>}></Route>
            <Route exact path= '/interviews/:id' element={<InterviewPage/>}></Route>
            <Route path= '/login' element={<LoginPage/>}></Route>
            <Route path= '/register' element={<RegisterPage/>}></Route>
            <Route path= '/jobs' element={<JobPage/>}></Route>
            <Route path= '/create-jobs' element={<JobForm/>}></Route>
            <Route path= '/create-interviews/:id' element={<InterviewForm/>}></Route>
            <Route path='/update-job/:id' element={<EditJob/>}></Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;

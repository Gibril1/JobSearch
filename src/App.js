import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";




function App() {
  return (
    <>
    
      <Router>
        <div className="container">
          <Routes>
            <Route path= '/' element={<HomePage/>}></Route>
            <Route path= '/login' element={<LoginPage/>}></Route>
            <Route path= '/register' element={<RegisterPage/>}></Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;

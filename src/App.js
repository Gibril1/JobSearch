import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";




function App() {
  return (
    <>
    {/* <HomePage/> */}
      <Router>
        <div className="container">
          <Routes>
            <Route path= '/' element={<HomePage/>}></Route>
            <Route path= '/login' element={<LoginPage/>}></Route>
            <Route path= '/register' element={<RegisterPage/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

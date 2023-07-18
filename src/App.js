import DashboardPage from './Pages/DashboardPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
       <Routes>
       <Route path='/'  element={<LoginPage/>}/>
        <Route path='/dashboard'  element={<DashboardPage/>}/>
        <Route path='/registrar'  element={<RegisterPage/>}/>
       </Routes>
    </Router>
  );
}

export default App;

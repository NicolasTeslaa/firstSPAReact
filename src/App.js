import DashboardPage from './Pages/DashboardPage';
import LoginPage from './Pages/LoginPage';
import ClientesList from './Pages/Clientes/ClientesList';
import RegisterPage from './Pages/RegisterPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClienteAdd from './Pages/Clientes/ClienteAdd';
import ClienteEdit from './Pages/Clientes/ClienteEdit';

function App() {
  return (
    <Router>
       <Routes>
       <Route path='/'  element={<LoginPage/>}/>
        <Route path='/dashboard'  element={<DashboardPage/>}/>
        <Route path='/registrar'  element={<RegisterPage/>}/>
        <Route path='/clientes'  element={<ClientesList/>}/>
        <Route path='/clienteAdd'  element={<ClienteAdd/>}/>
        <Route path='/clienteEdit'  element={<ClienteEdit/>}/>
       </Routes>
    </Router>
  );
}

export default App;

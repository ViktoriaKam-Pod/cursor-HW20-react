import './App.css';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;

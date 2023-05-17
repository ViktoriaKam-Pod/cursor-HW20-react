import './App.css';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className='App'>

      <Routes>
        <Route path='cursor-HW20-react' element={<Login/>} />
        <Route path="register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;

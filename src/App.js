import './App.css';
import Login from './components/login';
import Register from './components/register';
import Lemon from './components/Home';
import HybridProxies from './components/hybridProxies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Update from './components/update';


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home/:id" element={<Lemon />} />
          <Route path="/hybrid/:id" element={<HybridProxies />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;

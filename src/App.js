import './App.css';
import Login from './components/login';
import Register from './components/register';
import Grid from './components/grid'
import Flex from './components/flex'
import Lemon from './components/Home';
import HybridProxies from './components/hybridProxies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Lemon />} />
          <Route path="/hybrid" element={<HybridProxies />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/flex" element={<Flex />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;

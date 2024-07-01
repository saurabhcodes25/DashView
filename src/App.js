import './App.css';
import Login from './components/login';
import Register from './components/register';
import Lemon from './components/lemonDashboard';
import Grid from './components/grid'
import Flex from './components/flex'
import HybridProxies from './components/lemonDashboardHybrid';
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
          <Route path="/grid" elements={<Grid />} />
          <Route path="/flex" elements={<Flex />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;

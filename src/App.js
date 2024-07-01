import './App.css';
import Login from './components/login';
import Register from './components/register';
// import Grid from './components/grid'
// import Flex from './components/flex'
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
          <Route path="/home/:id" element={<Lemon />} />
          <Route path="/hybrid/:id" element={<HybridProxies />} />
          <Route path="/register" element={<Register />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/delete/" element={<Login />} />
          {/* <Route path="/grid" element={<Grid />} /> */}
          {/* <Route path="/flex" element={<Flex />} /> */}
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;

import './App.css';
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <>
      <div className=" d-flex App p-5">
        <Login />
        <div className='p-3'></div>
        <Register />
      </div>
    </>
  );
}
export default App;

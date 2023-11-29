import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;

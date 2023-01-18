import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import Launches from './components/Launches';
import Capsules from './components/Capsules';


function App() {

 

  return (
    <BrowserRouter>

      <div className="App">

        <Routes>

        <Route exact path="/"  element={<Home/>} />
        <Route exact path="/Launches"  element={<Launches/>} />
        <Route exact path="/Capsules"  element={<Capsules/>} />

        </Routes>

     




      </div>
    </BrowserRouter>

  );
}

export default App;

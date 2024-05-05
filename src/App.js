import logo from './logo.svg';
import './App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Projects from "./containers/projects";
import NavBar from './components/navBar';
import { Route, Routes } from "react-router-dom";
import particles from './utils/particles';

function App() {
  return (
    <div className="App">

    <NavBar/>

     <div className='App__main-page-content'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
     </div>
    </div>
  );
}

export default App;

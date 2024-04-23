import logo from './logo.svg';
import './App.css';
import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Projects from "./containers/projects";
import NavBar from './components/navBar';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">

    <NavBar/>

      <Routes>
        <Route indexRoute path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;

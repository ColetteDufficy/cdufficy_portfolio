import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <h1>Colette's portfolio</h1>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Socials from "./components/Socials";
import Portfolio from "./components/Portfolio";
import Experiences from "./components/Experiences"
import Contact from "./components/Contact";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Demo from './pages/Demo';
import Code from './pages/Code';



function App() {
  return (
    <div >
      {/* <h1 className="text-4xl font-bold font-signature">Hello World</h1> */}

      <Navbar />

      <Home />

      <About />

      <Portfolio />

      <Experiences />

      <Contact />

      <Socials />

      <BrowserRouter>
        <Routes>
          <Route path='/demo' element={<Demo />} />
          <Route path='/code' element={<Code />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

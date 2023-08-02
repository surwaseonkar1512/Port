import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Common/Navbar';

const Home = React.lazy(() => import('./components/Home/Home'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const About2 = React.lazy(() => import('./components/About/About2'));
const Projects = React.lazy(() => import('./components/Project/Projects'));
const Addproject = React.lazy(() => import('./components/Project/Addproject'));

function App() {
  return (
    <div className="bg-[#0f0e17]">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About2 />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/admin" element={<Addproject />} />
        </Routes>
      </Suspense>
    </div>
  );
}


export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/Home/About';
import Projects from './pages/Home/Projects';
import Extracurricular from './pages/Home/Extracurricular';
import Contact from './pages/Home/Contact';
// Import other pages if you have them for separate routes
// Note: Given your current setup, these specific routes might not be needed for smooth scrolling within the Home page.

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Define routes for other pages if needed. For smooth scrolling within the Home page, these specific routes might not be necessary. */}
        {/* Remove these routes if you do not have separate pages for these sections */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/extracurricular" element={<Extracurricular />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
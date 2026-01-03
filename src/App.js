import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Technologies from './components/Technologies'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer.js'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-100" data-theme={theme}>
      <Router>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
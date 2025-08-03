import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Models from './pages/Models';
import ModelDetail from './pages/ModelDetail';
import Concepts from './pages/Concepts';
import Comparison from './pages/Comparison';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/models/:modelId" element={<ModelDetail />} />
          <Route path="/concepts" element={<Concepts />} />
          <Route path="/comparison" element={<Comparison />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

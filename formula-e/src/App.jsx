import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Bets from './components/Bets';
import Schedule from './components/Schedule';
import Results from './components/Results';
import About from './components/About';
import Footer from './components/Footer';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bets" element={<Bets />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/results" element={<Results />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

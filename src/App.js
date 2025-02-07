import './App.css';
import Navbar from './component/Navbar.jsx';
import Hero from './component/Hero.jsx';
import About from './component/About.jsx';
import Teachings from './component/Teachings.jsx';
import Connect from './component/Connect.jsx';

function App() {
  return (
    // Tailwind container for responsive spacing and layout
    <div className="container mx-auto p-4">
      <Navbar />
      <Hero />
      <About />
      <Teachings />
      <Connect />
    </div>
  );
}

export default App;

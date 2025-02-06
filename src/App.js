import './app.css';
import Navbar from './component/Navbar.js';
import Hero from './component/Hero.js';
import About from './component/About.js';
import Teachings from './component/Teachings.js';
import Connect from './component/Connect.js';

function App() {
  return (
   <div>
    <Navbar />
    <Hero />
    <About />
    <Teachings />
    <Connect />
  </div>
  );
}

export default App;

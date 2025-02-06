import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Teachings from './component/Teachings';
import Connect from './component/Connect';

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

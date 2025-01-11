import './App.css';
import Navbar from './components/Navbar';
import BackgroundCanvas from './components/BackgroundCanvas';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <BackgroundCanvas />
      <Navbar />
      <main>
        <section id="about">
        <About />
        </section>
        <section id="experience">
          <Experience/>
        </section>
        <section id="projects">
          <Projects/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
      </main>
    </div>
  );
}

export default App;
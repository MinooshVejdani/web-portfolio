
import './App.css'
import './index.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import DotGrid from './components/DotGrid.jsx'
import Skills from './components/Skills.jsx'

// import About from './components/About.jsx'

// import Work from './components/Work.jsx'
// import ContactForm from './components/ContactForm.jsx'
// import ContactLink from './components/ContactLink.jsx'
// import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
    <Header />
    <DotGrid />
    <div className="bg-white z-10">
    <Hero />
    <About />
    <Skills />
    </div>
    </>
  );
}

export default App

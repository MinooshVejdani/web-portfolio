import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import DotGrid from "./components/DotGrid.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import ContactForm from "./components/ContactForm.jsx";
import ContactLink from "./components/ContactLink.jsx";
import Footer from "./components/Footer.jsx";

import MyVirtualPetGame from "./Pages/MyVirtualPetGame.jsx";
import BudgetTracker from "./Pages/BudgetTracker.jsx";
import Pave from "./Pages/Pave.jsx";
import Dilemathon from "./Pages/Dilemathon.jsx";
import Seed from "./pages/Seed/Seed.jsx";
import TaskManagement from "./Pages/TaskManagement.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/*Main portfolio page*/}
        <Route
          path="/"
          element={
            <>
              <Header />
              <DotGrid />
              <div className="bg-white z-10">
                <Hero />
                <About />
                <Skills />
                <Work />
                <ContactForm />
                <ContactLink />
                <Footer />
              </div>
            </>
          }
        />
        <Route path="/projects/Pave" target="_blank" element={<Pave />} />
        <Route path="/projects/Seed" target="_blank" element={<Seed />} />
        <Route path="/projects/Dilemathon" target="_blank" element={<Dilemathon />} />
      </Routes>
    </Router>
  );
}

export default App;

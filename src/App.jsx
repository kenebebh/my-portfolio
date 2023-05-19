import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
  SocialLinks,
} from "./components";

function App() {
  return (
    <Router>
      <ToastContainer />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Projects />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <SocialLinks />
      </div>
    </Router>
  );
}

export default App;

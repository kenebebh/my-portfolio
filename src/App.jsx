import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
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
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative">
          <Navbar />
          <Hero />
          <SocialLinks />
        </div>
        <About />
        <Tech />
        <Projects />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

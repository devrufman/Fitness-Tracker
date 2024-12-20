
import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // Import Navbar
import Footer from "./components/Footer";  // Import Footer
import Home from "./pages/Home";           // Import Home page
import About from "./pages/About";         // Import About page
import Contact from "./pages/Contact";     // Import Contact page
import './index.css';                      // Import Tailwind styles

const App = () => {
  return (
   
      <div className="min-h-screen flex flex-col">
        {}
        <Navbar />

        {}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {}
        <Footer />
      </div>
    
  );
};

export default App;
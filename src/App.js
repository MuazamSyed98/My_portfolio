import React from "react";
import { Routes, Route } from "react-router-dom"; // No BrowserRouter here!
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Success from "./pages/Success";

function App() {
  return (
    <div className="bg-black text-gray-200 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Success" element={<Success />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

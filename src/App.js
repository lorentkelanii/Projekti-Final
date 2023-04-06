import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

import Navbar from "./components/Nav/Navbar";

import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

import Price from "./Pages/Price";


import About from "./Pages/About";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          
         
          <Route path="pricing" element={<Price />} />
          
          <Route path="about" element={<About />} />

         
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;

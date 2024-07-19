import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css'; 
import './index.css'; 
import Form from './Form';
import View from './View';
import SignUp from './SignUp';
import {NextUIProvider} from "@nextui-org/react";
export const GlobalState=createContext();
const App = () => {
  const [login,setlogin]=useState(false);
  const [username,setusername]= useState("");
  return (
    <>
    <NextUIProvider>
    <GlobalState.Provider value={{login,setlogin,username,setusername}}>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Form />} />
            <Route path="/view" element={<View />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </GlobalState.Provider>
    </NextUIProvider>
    </>
  );
};
export default App;
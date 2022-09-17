import React from "react";
import "./App.css";
import Contactus from "./components/pages/Contact";
import Aboutus from "./components/pages/About";
import Home from "./components/pages/Home";
import Navbar from "./components/pages/Navbar";
import TourPackages from "./components/pages/TourPackages";
import ExtraActivities from "./components/pages/ExtraActivities";
import { BrowserRouter as Router, Routes,Route, } from "react-router-dom";
import Footer from"../src/components/pages/Footer";
// import Records from "./components/pages/Records.json" 

function App() {
  return (
    // <Router>
    //   <div>
    //     <Navbar />
        
    //     <Switch>
    //     <Route exact path="/">
    //       <Home />
    //     </Route>

    //     <Route  path="/About">
    //       <Aboutus />
    //     </Route>

    //     <Route  path="/Contact">
    //       <Contactus />
    //     </Route>
    //     </Switch>
  
    //   </div>
    // </Router>


    <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/About" element={<Aboutus/>} />
      <Route exact path="/TourPackages" element={<TourPackages/>} />
      <Route exact path="/ExtraActivities" element={<ExtraActivities/>} />
      <Route exact path="/Contact" element={<Contactus/>} />
    </Routes>
    <Footer/>
</Router>
  );
}

export default App;

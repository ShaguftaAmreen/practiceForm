//import {Typography,Button,TextField} from '@mui/material/';
// import Form from './components/Form';
//import './App.css';

import { Route, Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
     
      {/* <Form /> */}
    </div>
  );
}
export default App;

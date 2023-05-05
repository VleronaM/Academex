import './App.css';
import Header from './components/Common/Common/Header';
import Footer from './components/Common/Common/Footer';
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom"
import React, {Component} from 'react';
import Home from "./components/Home/Home";

const Homepage = React.lazy(() => import('./pages/homepage/HomePage'))

function App() {
  return (
   /* <div className="App">
    </div>*/
    <>

    <Router>
      <Routes>
     <Route path = '/' exact element = {<Homepage/>} />
    </Routes>
    </Router>
    </>
  );
}

export default App;

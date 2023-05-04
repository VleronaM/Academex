
import './App.css';
import Header from './components/Common/Common/Header';
import Footer from './components/Common/Common/Footer';
import { BrowserRouter as Router, Routes} from "react-router-dom"
import React, {Component} from 'react';

function App() {
  return (
   /* <div className="App">
    </div>*/
    <>

    <Router>
    <Header />
      <Routes>
       {/* <Route path = '/about'>
          <About/>
        </Route>*/}
      </Routes>
      <Footer  />
    </Router>
    </>
  );
}

export default App;

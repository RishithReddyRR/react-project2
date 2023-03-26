import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer'
import Videos from './components/Videos'
import Upload from './components/Upload.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/videos' element={<Videos/>}/>
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

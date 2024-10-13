import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Peru from './pages/peru.jsx';
import Japan from './pages/japan.jsx';
import Navbar from './components/navbar.jsx';
import 'semantic-ui-css/semantic.min.css'

function App() {

  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/peru" element={<Peru/>} />
          <Route path="/japan" element={<Japan/>} />
        </Switch>
      </Router>
    </>
  )
}

export default App

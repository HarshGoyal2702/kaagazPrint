import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Main from './pages/Main'
import Banner from './components/main/Banner';
import Contactus from './components/main/contactus'
import Footer from './components/main/Footer'
function App() {
  return <Router>
    <Routes>
      <Route path='/' element=<Main/> />
    </Routes>
  </Router>
}

export default App

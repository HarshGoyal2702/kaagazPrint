import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from './pages/Main'
import Page2 from "./pages/Page2"
function App() {
  return <Router>
    <Routes>
      <Route path='/' element={<Main />} exact />
      <Route path="/terms" element={<Page2 />} />
    </Routes>
  </Router>
}

export default App

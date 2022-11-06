import { Topbar } from "./components/topbar/Topbar"
import { Footer } from "./components/footer/Footer"
import './app.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from "./pages/home/Home"

function App() {
  
  return (
    <div className="App">
      <Topbar />
    <div className="sections">
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>      
    </div>
    <Footer />
    </div>
  )
}

export default App

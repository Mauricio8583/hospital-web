import { Topbar } from "./components/topbar/Topbar"
import { Footer } from "./components/footer/Footer"
import './app.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from "./pages/home/Home"
import { Hospital } from "./pages/hospital/Hospital"
import { Estrutura } from "./pages/estrutura/Estrutura"
import { Especialidades } from "./pages/especialidades/Especialidades"
import { Convenios } from "./pages/convenios/Convenios"
import { Laboratorio } from "./pages/laboratorio/Laboratorio"
import { Localizacao } from "./pages/localizacao/Localizacao"
import { Cidade } from "./pages/cidade/Cidade"

function App() {
  
  return (
    <div className="App">
      <Topbar />
    <div className="sections">
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/estrutura" element={<Estrutura />} />
          <Route path="/especialidades" element={<Especialidades />} />
          <Route path="/convenios" element={<Convenios />} />
          <Route path="/laboratorio" element={<Laboratorio />} />
          <Route path="/localizacao" element={<Localizacao />} />
          <Route path="/cidade" element={<Cidade />} />
        </Routes>
      </Router>      
    </div>
    <Footer />
    </div>
  )
}

export default App

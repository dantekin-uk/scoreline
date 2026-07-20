import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Firm from './pages/Firm'
import Advisory from './pages/Advisory'
import Capabilities from './pages/Capabilities'
import Treaty from './pages/Treaty'
import Facultative from './pages/Facultative'
import Claims from './pages/Claims'
import Contact from './pages/Contact'
import Insights from './pages/Insights'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral">
        <ScrollReveal />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/firm" element={<Firm />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/capabilities" element={<Navigate to="/" replace />} />
          <Route path="/capabilities/treaty" element={<Treaty />} />
          <Route path="/capabilities/facultative" element={<Facultative />} />
          <Route path="/capabilities/claims" element={<Claims />} />
          <Route path="/capabilities/:slug" element={<Capabilities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

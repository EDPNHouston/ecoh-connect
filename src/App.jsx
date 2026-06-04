import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Membership from './pages/Membership'
import Events from './pages/Events'
import Volunteer from './pages/Volunteer'
import RequestHelp from './pages/RequestHelp'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import BottomNav from './components/BottomNav'

function App() {
  return (
    <div className="app">
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/events" element={<Events />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/request-help" element={<RequestHelp />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <BottomNav />
    </div>
  )
}

export default App
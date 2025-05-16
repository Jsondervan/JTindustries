import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import foto1 from './foto/foto1.jpeg'
import homeIcon from './foto/home.png'
import designIcon from './foto/design.png'
import shoppingIcon from './foto/shopping.png'
import checkoutIcon from './foto/checkout.png'
import projectIcon from './foto/project.png'
import contactIcon from './foto/contact.png'
import aboutIcon from './foto/about.png'

// Importeer de pagina-componenten
import About from './pages/About'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'
import Design from './pages/Design'
import Projects from './pages/Projects'

function App() {
  const [selectedOption, setSelectedOption] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <Router>
      <div className="appContainer" style={{ backgroundImage: `url(${foto1})` }}>
        {/* NAVIGATION BAR */}
        <nav className="navbar">
          <div className="logo">JT Industries</div>
          <div>
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="navSelect"
            >
              <option value="" disabled>Selecteer een optie</option>
              <option value="login">Inloggen</option>
              <option value="register">Account aanmaken</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </nav>

        {/* SIDEBAR */}
        <div
          className={`sidebar ${isSidebarOpen ? 'open' : ''}`}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Link to="/" className="sidebarLink">
            <img src={homeIcon} alt="Home" className="sidebarIcon" /> Home
          </Link>
          <Link to="/design" className="sidebarLink">
            <img src={designIcon} alt="Designs" className="sidebarIcon" /> Designs
          </Link>
          <Link to="/cart" className="sidebarLink">
            <img src={shoppingIcon} alt="Shopping cart" className="sidebarIcon" /> Shopping cart
          </Link>
          <Link to="/checkout" className="sidebarLink">
            <img src={checkoutIcon} alt="Checkout" className="sidebarIcon" /> Checkout
          </Link>
          <Link to="/projects" className="sidebarLink">
            <img src={projectIcon} alt="Past Projects" className="sidebarIcon" /> Past Projects
          </Link>
          <Link to="/contact" className="sidebarLink">
            <img src={contactIcon} alt="Contact" className="sidebarIcon" /> Contact
          </Link>
          <Link to="/about" className="sidebarLink">
            <img src={aboutIcon} alt="Over ons" className="sidebarIcon" /> Over ons
          </Link>
        </div>

        {/* ROUTES */}
        <Routes>
          <Route
            path="/"
            element={
              <main className="mainContent">
                <h1 className="mainHeading">Ontdek Unieke 3D Printing Designs</h1>
                <p className="mainText">
                  Welkom bij JT Industries – dé plek om hoogwaardige en creatieve 3D-ontwerpen te kopen voor printen thuis of professioneel gebruik. 
                  Bekijk ons groeiende assortiment en breng je ideeën tot leven!
                </p>
              </main>
            }
          />
          <Route path="/design" element={<Design />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* FOOTER */}
        <footer className="footer">
          <div>Contact: info@jtindustries.com</div>
          <div>Telefoon: +31 6 12345678</div>
          <div>Adres: 3D Straat 1, Amsterdam</div>
        </footer>
      </div>
    </Router>
  )
}

export default App

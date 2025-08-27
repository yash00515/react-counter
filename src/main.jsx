 import { createRoot } from 'react-dom/client'
import './index.css'

// Import components
import Navbar from './Navbar'
import Hero from './Hero'
import Hero3 from './Hero3'
import Cards from './Cards'
import Scard from './Scard'
import Cards2 from './Cards2'
import Footer from './Footer'
import Last from './Last'
// import Bankform from './Bankform.jsx' // uncomment if you want to use Bankform instead

// Font Awesome (better include in index.html, not here)
// <link ... /> should be placed inside public/index.html head tag

createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <Hero />
    <Hero3 />
    <Cards />
    <Scard />
    <Cards2 />
    <Last />
    <Footer />
 
  </>
)

import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Hero3 from './Hero3'
import Cards from './Cards'
import Scard from './Scard'
import Cards2 from './Cards2'
import Footer from './Footer'
import Last from './Last'

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
// import App from './App.jsx'

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

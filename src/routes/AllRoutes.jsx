import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Buisness from '../Pages/Buisness'
import Personal from '../Pages/Personal'
import Product from '../Pages/Product'
import Resources from '../Pages/Resources'
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'
import Features from '../Pages/Features'
import Login from '../auth/Login'
import Register from '../auth/Register'
import Youtube from '../addproduct/Youtube'
import Insta from '../addproduct/Insta'
import TikTok from '../addproduct/Tiktok'
import Website from '../addproduct/Website'
import Software from '../addproduct/Software'
import InstaProduct from '../Pages/InstaProduct'
import TikTokProduct from '../Pages/TikTokProduct'
import WebProduct from '../Pages/WebProduct'
import SoftwareProduct from '../Pages/SoftwareProduct'


function AllRoutes() {
  return (
    <BrowserRouter>

    <Routes>  
    <Route path="/" element={<Register />} />  
    <Route path="/login" element={<Login />} /> 
    <Route exact path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/buisness" element={<Buisness />} />
    <Route path="/personal" element={<Personal />} />
    <Route path="/product" element={<Product />} />
    <Route path="/resouces" element={<Resources />} />
    <Route path="/services" element={<Services />} />
    <Route path="/features" element={<Features />} />
    <Route path="/contact" element={<Contact />} />
    
    <Route path="/postjob" element={<Youtube />} />
    <Route path="/insta" element={<Insta />} />
    <Route path="/tiktok" element={<TikTok />} />
    <Route path="/website" element={<Website />} />
    <Route path="/software" element={<Software />} />
    <Route path="/instaProducts" element={<InstaProduct />} />
    <Route path="/tiktokProducts" element={<TikTokProduct />} />
    <Route path="/webProducts" element={<WebProduct />} />
    <Route path="/softwareProducts" element={<SoftwareProduct />} />

   
    </Routes>

  </BrowserRouter>
  )
}

export default AllRoutes
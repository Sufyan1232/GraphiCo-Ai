import React from 'react'
import Header from './routes/Header'
import AllRoutes from './routes/AllRoutes'
import Index from "./Index"
import Login from './auth/Login'
import Register from './auth/Register'

function App() {
  return (
   <div>
    <AllRoutes/>
     {/* <Register /> */}
     {/* <Index /> */}
   </div>
  )
}

export default App
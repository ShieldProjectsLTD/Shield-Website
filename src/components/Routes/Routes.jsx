import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import { ROUTES } from '../../utils/routes'
import New from '../New/New'
import About from '../AboutUS/About'


const AppRoutes = () => (
    <Routes>
        <Route index element= {<Home />} />
        <Route path={ROUTES.NEW} element={<New />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        
    </Routes>
  )

export default AppRoutes
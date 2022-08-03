import React from 'react'
import { Login } from './Login'
import { Navbar } from './Navbar'
import { Register } from './Register'
import {Routes,Route} from 'react-router-dom'
import { Dashboard } from './Dashboard'
import { Bbsr } from './cities/Bbsr'
import { Pune } from './cities/Pune'
import { Kolkata } from './cities/Kolkata'
import { Mumbai } from './cities/Mumbai'
import { Delhi } from './cities/Delhi'
import { Bangalore } from './cities/Bangalore'

export const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/bhubaneswar' element={<Bbsr/>}></Route>
            <Route path='/pune' element={<Pune/>}></Route>
            <Route path='/kolkata' element={<Kolkata/>}></Route>
            <Route path='/mumbai' element={<Mumbai/>}></Route>
            <Route path='/delhi' element={<Delhi/>}></Route>
            <Route path='/bangalore' element={<Bangalore/>}></Route>
            
        </Routes>
       

    </div>
  )
}

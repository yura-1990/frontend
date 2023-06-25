import React from 'react'
import {Routes , Route} from 'react-router-dom'
import StoreList from '../../pages/Stores/StoreList'
import Login from '../../pages/Auth/Login'
import Register from '../../pages/Auth/Register'
import Products from '../../pages/Products/Products'

export default function Main() {
  return (
    <div className='col-10'>
        <Routes>
            <Route path='/stores' element={<StoreList />}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
        </Routes>
        
    </div>
  )
}

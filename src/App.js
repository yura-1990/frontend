import React, {useEffect} from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { connect } from 'react-redux'
import { userData } from './redux/auth'
import { getAllData } from './redux/stores'
import { getAllData as allProducts } from './redux/products'
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

 function App({userData, authorized, getAllData, allProducts}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const decodedToken = jwt_decode(localStorage.getItem('token'));
      userData(decodedToken)
    }
    if (authorized) {
      navigate("/dashboard")
    } else {
      navigate("/login")
    }
    getAllData()
    allProducts()
  }, [authorized])
  
  return (
    <div className='px-0 mx-0 row'>
      <Header />
      <Main />
    </div>
  )
}

export default connect(({
  auth: {authorized},
})=>({authorized}), {userData, getAllData, allProducts})(App)

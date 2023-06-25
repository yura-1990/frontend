import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { NavLink  } from 'react-router-dom'
import { logout, userData } from '../../redux/auth'

function Header({logout, user, authorized}) {
     
    return (
        <div className="d-flex vh-100 flex-column flex-shrink-0 p-3 text-white bg-dark col-2" >
            <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">Sidebar</span>
            </NavLink>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                {
                    authorized ? <>
                        <li>
                            <NavLink  to="/dashboard" className="nav-link text-white">
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  to="/stores" className="nav-link text-white">
                                Stores
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  to="/products" className="nav-link text-white">
                                Products
                            </NavLink>
                        </li>
                    </>
                    : (<>
                        <li>
                            <NavLink  to="/login" className="nav-link text-white">
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  to="/register" className="nav-link text-white">
                                Register
                            </NavLink>
                        </li>
                    </>)
                }
                
            </ul>
            <hr />
            <div className="dropdown">
                <NavLink to="/me" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>{user?.user_name}</strong>
                </NavLink>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><span className="dropdown-item" >Role: { user?.user_role === 1 ? "Admin" : "User" }</span></li>
                    <li><NavLink className="dropdown-item" to="/setting">Settings</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/profile">Profile</NavLink></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item" onClick={logout}>Sign out</button></li>
                </ul>
            </div>
        </div>
    )
}

export default connect(({auth: {user, authorized}})=>({user, authorized}), {logout, userData})(Header)

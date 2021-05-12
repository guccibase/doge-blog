import React from 'react'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useAuth} from '../../contexts/AuthContext'

function AccountButton() {

    const {currentUser} = useAuth()
    return (
        <NavLink className="account mt-2">
            <Link className="account" to={currentUser ? "/profile" : "/login"}>{currentUser ? "My account" : "Login"}</Link>
        </NavLink>
    )
}

export default AccountButton

import React from 'react'
import { NavLink, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './profile.css'

function ProfileButtons() {
    const { logout } = useAuth()

    async function handleSignout(e) {
        e.preventDefault()
        try {
        
            await logout()
            //history.push("/")
        } catch {
            console.log("Failed to log in")
        }

    }


    return (
        <NavLink className="account mt-2">
            <Button className="profile-btn">
                <Link className="edit-profile account mr-2" to="/update-profile">Edit profile</Link>
        </Button>
            <Button className="profile-btn" onClick={handleSignout} >
                <Link className="account" to="/">Sign out</Link>
            </Button>
        </NavLink>
    )
}

export default ProfileButtons

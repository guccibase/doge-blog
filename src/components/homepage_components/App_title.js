import React from 'react'
import './App_title.css'
import { Image} from 'react-bootstrap'
import doge from './../../assets/doge.png'
import {useHistory} from 'react-router-dom'



function AppTitle() {
    const history = useHistory()

    return (
        <div className="mb-4" onClick={()=>history.push("/")}>
            <h1 className="app-title">
            <Image 
            className="rounded-circle"
            src={doge}></Image> blog</h1>
        </div>
    )
}

export default AppTitle

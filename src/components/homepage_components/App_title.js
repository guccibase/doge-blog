import React from 'react'
import './App_title.css'
import { Image} from 'react-bootstrap'
import doge from './../../assets/doge.png'



function AppTitle() {
    return (
        <div className="mb-4">
            <h1>
            <Image 
            className="rounded-circle"
            src={doge}></Image> blog</h1>
        </div>
    )
}

export default AppTitle

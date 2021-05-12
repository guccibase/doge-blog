import React,{useState, useEffect} from 'react'
import { Button,Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

function NewArticleBtn() {
    const {currentUser} = useAuth()
    const [loggedIn, setLoggedIn] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        if(currentUser){
           setLoggedIn(true)
        }
    },[currentUser])

    const handleClick = ()=>{
                !loggedIn && setShowAlert(true)    
                setTimeout(()=>setShowAlert(false),3000)
            }

    return (
        <div>
            <Link  to={loggedIn?'/new':""}><Button onClick={handleClick} className="new-article btn-light">New Article</Button></Link>
            {showAlert && <Alert className="alert-info">Must be logged in to do that</Alert>}
        </div>
    )
}

export default NewArticleBtn

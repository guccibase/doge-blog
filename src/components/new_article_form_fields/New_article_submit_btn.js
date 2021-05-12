import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function New_article_submit_btn({articleData}) {
    const [navigate, setNavigate] = useState(false)

    const handleSubmit = ()=>{
            //    console.log(articleData)
         
           }

           useEffect(() => {
                     if(articleData.title.length > 5 && articleData.description.length > 20 && articleData.markdown.length > 10){
                   console.log('articleData')
                    setNavigate(true)
               } 
            },[articleData])

    return (
        <Link to={navigate && '/blog/test'}><button onClick={handleSubmit} type="submit" class="btn btn-light">Save</button></Link>
    )
}

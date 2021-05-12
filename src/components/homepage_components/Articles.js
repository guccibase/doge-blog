import React from 'react'
import './Articles.css'
import { Button, Card, Container, } from 'react-bootstrap'
import ArticleBodySmall from '../article_components/Article_body_small'

function Articles() {
    const data = {
        title:"‘I just became a dogecoin millionaire’: ",
        createAt:"Thu, Apr 22 20214:02 PM",
        sub: "This 33-year-old invested his savings in the meme cryptocurrency with inspiration from Elon Musk.Glauber Contessoto says that on April 15 at 6: 00 p.m.PDT, he became a dogecoin millionaire.Glauber Contessoto says that on April 15 at 6: 00 p.m.PDT, he became a dogecoin millionaire.",
        markdown:"Glauber Contessoto says that on April 15 at 6:00 p.m. PDT, he became a dogecoin millionaire."
        }


    const art = [1,2,3,4,5,6,7,8,9,10]


    return (
       <div>
            {art.map(a => 
            <ArticleBodySmall key={a} data={data}>

            </ArticleBodySmall>
            )}
       </div>
    )
}

export default Articles

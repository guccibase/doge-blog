import React from 'react'
import {Card, Container, Row} from 'react-bootstrap'
import ArticleBodySmall from '../article_components/Article_body_small'

function MostLikedArticles() {
    const data = {
        title: "‘I just became a dogecoin millionaire’: ",
        createAt: "Thu, Apr 22 20214:02 PM",
        sub: "This 33-year-old invested his savings in the meme cryptocurrency with inspiration from Elon Musk.Glauber Contessoto says that on April 15 at 6: 00 p.m.PDT, he became a dogecoin millionaire.Glauber Contessoto says that on April 15 at 6: 00 p.m.PDT, he became a dogecoin millionaire.",
        markdown: "Glauber Contessoto says that on April 15 at 6:00 p.m. PDT, he became a dogecoin millionaire."
    }


    const art = [1, 2, 3]


    return (
        <div>
            <h4 className="mt-4">
                Most liked
            </h4>
            <Row className="mb-4">
                {art.map(a =>
                   <div className="col">
                        <ArticleBodySmall data={data}>

                        </ArticleBodySmall>
                   </div>
                )}
            </Row>
        </div>
    )
}
export default MostLikedArticles

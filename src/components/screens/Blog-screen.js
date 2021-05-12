import React from 'react'
import {useParams} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import ArticleBodyFull from '../article_components/Article_body_full'

function BlogScreen() {
    let {data} = useParams()
     data = {
        title: "‘I just became a dogecoin millionaire’: ",
        createAt: "Thu, Apr 22 20214:02 PM",
        sub: "This 33-year-old invested his savings in the meme cryptocurrency with inspiration from Elon Musk.Glauber Contessoto says that on April 15 at 6: 00 p.m.PDT, he became a dogecoin millionaire.Glauber Contessoto says that on April 15 at 6: 00 p.m.PDT, he became a dogecoin millionaire.",
        markdown: "Glauber Contessoto says that on April 15 at 6:00 p.m. PDT, he became a dogecoin millionaire."
    }


    return (
        <Container>
            {/* <div>{data}</div> */}
            <ArticleBodyFull data={data} ></ArticleBodyFull>
        </Container>
    )
}

export default BlogScreen

import React from 'react'
import {Card} from 'react-bootstrap'
import ArticleReadMoreBtn from './Article_read_more_btn'


function ArticleBodySmall({data}) {
    return (
        <div>
            <Card className="mt-4">
                <Card.Body>
                    <Card.Title>
                        <h2>
                            {data.title}
                        </h2>
                    </Card.Title>
                    <Card.Subtitle className="text-muted mb-2 home">
                        {data.createAt}
                    </Card.Subtitle>
                    <Card.Text className="mt-4 card-text bold">
                        {data.sub}
                    </Card.Text>
                </Card.Body>
                <ArticleReadMoreBtn></ArticleReadMoreBtn>
            </Card>
        </div>
    )
}

export default ArticleBodySmall

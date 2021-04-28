import React from 'react'
import { Card, Container } from 'react-bootstrap'


function ArticleBodyFull({ data }) {
    return (
        <Container>
            <main>
                <h1 class="mb-1">{data.title}</h1>
            </main>
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
                    <a href="/" class="btn btn-secondary">All articles</a>
                    <a href="/" class="btn btn-info">Edit</a>
                    <Card.Text className="mt-4 card-text bold">
                        {data.sub}
                    </Card.Text>
                    <div>{data.markdown}</div>

                </Card.Body>
            </Card>
        </Container>
    )
}

export default ArticleBodyFull

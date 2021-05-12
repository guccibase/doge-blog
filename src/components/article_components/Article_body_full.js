import React from 'react'
import { Card, Container } from 'react-bootstrap'
import AppHeader from '../homepage_components/App_header'
import AppTitle from '../homepage_components/App_title'
import './Article_styles.css'


function ArticleBodyFull({ data }) {
    return (
        <Container>
            <AppHeader/>
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
                    <a href="/" class="btn btn-secondary ml-2 mr-2">All articles</a>
                    <a href="/" class="btn btn-info">Edit</a>
                    <Card.Text className="mt-4 card-text bold">
                        {data.sub}
                    </Card.Text>
                    <div>
                        <p>Paste some <b>HTML</b> into this box and the markdown will appear on the right.</p>
                        <p>Some things that work:</p>
                        <ul>
                            <li><a href="https://google.com">Links to Google</a></li>
                            <li>Nested lists of cool animals: <ul><li>shifty snakes</li><li><em>cool cats</em></li></ul> </li>
                            <li>Funky gifs!</li>
                            <li><img src="https://w7.pngwing.com/pngs/394/518/png-transparent-brown-shiba-inu-doge-weather-shiba-inu-doge-click-doge-snake-doge-miscellaneous-mammal-carnivoran-thumbnail.png"></img></li>
                        </ul>
                            <p>Enjoy!</p>
                    </div>
                    <iframe width="820" height="696" src="https://www.youtube.com/embed/Jhtc_uRtlXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </Card.Body>
            </Card>
        </Container>
    )
}

export default ArticleBodyFull

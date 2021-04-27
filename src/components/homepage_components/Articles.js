import React from 'react'
import './Articles.css'
import { Button, Card, Container, } from 'react-bootstrap'

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
                        <a href="/" className="btn read-more btn-lg">Read more</a>

                    </Card>
            </div>
            )}
       </div>
    )
}

export default Articles

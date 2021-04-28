import React from 'react'
import { Card, Row } from 'react-bootstrap'

function Tracker() {
    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Subtitle className="text-center">
                    Live tracker
                </Card.Subtitle>
                    <h3 className="text-center tracker">
                    $0.269891
                     </h3>
                    <Card.Text className="text-center high">
                        High:$0.29212
                    </Card.Text>
                    <Card.Text className="text-center low">
                        Low:$0.22212
                    </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Tracker

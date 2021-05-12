import React from 'react'
import {Card,Image} from 'react-bootstrap'

function UserDetails() {
    return (
        <Card className="mb-4">
            <Card.Body>
            <div className="text-center">
                    <Image className="avatar lg" src="https://image.freepik.com/free-vector/cute-shiba-inu-dog-running-cartoon-icon-illustration_138676-2418.jpg" roundedCircle />
            </div>
                <h3 className="text-center tracker">
                    Doge daddy
                </h3>
                <Card.Text className="text-center high">
                </Card.Text>
                <Card.Text className="text-center low">
                    My bio.. I love doge.. doge to the moon
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default UserDetails

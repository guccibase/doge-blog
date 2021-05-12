import React, {useEffect, useState} from 'react'
import { Card } from 'react-bootstrap'
import dogePrice from '../../doge_price/doge'

function Tracker() {
    const [tracker, setTracker] = useState({low:0,high:0,last:0});

    useEffect(() => {
        async function getDogecoinPrice(){
            const { data } = await dogePrice();
            setTracker(data.ticker)
        }
      
        setInterval(() => getDogecoinPrice(), 100);
    }, []);

    
    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Subtitle className="text-center">
                    Live tracker
                </Card.Subtitle>
                    <h3 className="text-center tracker">
                    ${Number.parseFloat(tracker.last).toFixed(6)}
                     </h3>
                    <Card.Text className="text-center high">
                        High: ${tracker.high}
                    </Card.Text>
                    <Card.Text className="text-center low">
                        Low: ${tracker.low}
                    </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Tracker

import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import "./CardComponent.css"

const CardComponent = (props) => (  
    <div className='containerCard'>
        <Card>
            <CardBody>
                <CardTitle tag="h5">
                    {props.name}
                </CardTitle>
                <img src={props.img} alt = "user-image" width={200} className='FotoCard'/>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {props.profession}
                </CardSubtitle>
                <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
                <Button>
                    Button
                </Button>
            </CardBody>
        </Card>
    </div>
)
export default CardComponent;

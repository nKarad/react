import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import "./CardComponent.css"
import ItemCount from '../ItemListContainer/ItemCount/ItemCount';

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
                    Aca ponele que meto un lorem
                </CardText>
                <ItemCount/>
            </CardBody>
            
        </Card>
    </div>
)
export default CardComponent;

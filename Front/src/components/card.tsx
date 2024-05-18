import {} from 'react';
import { Button, Card } from 'react-bootstrap'

export interface PeugeotModel{
    id: number;
    kepLink:string;
    Model:string;
    Type:string;
    Year:number;
    Price:number;
    EngineType:string;
    RangeDistance:string;
}

export default function CreateCard( props:PeugeotModel){
    return (
        <Card className='m-auto' style={{ width: '18rem' }}>
            <Card.Img variant='top' src={`http://localhost:3000/${props.kepLink}`} style={{height: "11rem", objectFit: "cover"}}></Card.Img>
            <Card.Body>
                <Card.Title>{props.Model}</Card.Title>
                <Card.Text>{props.Price} Ft</Card.Text>
                <Card.Text hidden id='itemId'>33</Card.Text>
                <Button variant='light' href={`megtekint/1`} className='btn-outline-danger'>Megtekintés</Button>
            </Card.Body>
        </Card>
    )
}
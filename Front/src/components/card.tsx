import {} from 'react';
import { Button, Card } from 'react-bootstrap'

export interface PeugeotModel{
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
            <Card.Img variant='top' src={`http://localhost:3000/${props.kepLink}`} style={{height: "15rem", objectFit: "cover", objectPosition: "100% 0"}}></Card.Img>
            <Card.Body>
                <Card.Title>{props.Model}</Card.Title>
                <Card.Text>{props.Price} Ft</Card.Text>
                <Button variant='primary'>Megtekintés</Button>
            </Card.Body>
        </Card>
    )
}
import {} from 'react';
import { Button, Card } from 'react-bootstrap'

export interface Kartya{
    keplink:string;
    Model:string;
    Type:string;
    Year:number;
    Price:number;
    EngineType:string;
    RangeDistance:string;
}

export default function CreateCard(){

    function load(){
        
    }

    return (
        <Card className='m-auto' style={{ width: '18rem' }}>
            <Card.Img variant='top' src='vite.svg'></Card.Img>
            <Card.Body>
                <Card.Title>{'teszt'}</Card.Title>
                <Card.Text>{'lorem ipsum de pugot'}</Card.Text>
                <Button variant='primary'>Megtekintés</Button>
            </Card.Body>
        </Card>
    )
}
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PeugeotModel } from '../components/card';
import { ListGroup } from 'react-bootstrap';
import { useState } from 'react';

export default function Megtekint(id:number) {
    const [model, setModel] = useState<PeugeotModel|null>(null);
    async function load(){
        let eredmeny = await fetch(`http://localhost:3000/model/${id}`);
        let OneModel:PeugeotModel = await eredmeny.json();
        setModel(OneModel);
        
    }
    load();

    return(
        <Card className='border rounded p-3 primary'>
            <Card.Img variant='top' src={`http://localhost:3000/${model!.kepLink}`}/>
            <Card.Body>
                <Card.Title>{model!.Model}</Card.Title>
            </Card.Body>
            <ListGroup>
                <ListGroup.Item>{model!.Type}</ListGroup.Item>
                <ListGroup.Item>{model!.Year}</ListGroup.Item>
                <ListGroup.Item>{model!.Price}</ListGroup.Item>
                <ListGroup.Item>{model!.EngineType}</ListGroup.Item>
                <ListGroup.Item>{model!.RangeDistance}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Button variant='danger'>Vásárlás</Button>
            </Card.Body>
        </Card>
    )
}
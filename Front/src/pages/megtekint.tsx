import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PeugeotModel } from '../components/card';
import { ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Megtekint() {
    const param = useParams();
    const [model, setModel] = useState<PeugeotModel>({} as PeugeotModel);

    useEffect(()=>{
        async function load(){
            let eredmeny = await fetch(`http://localhost:3000/model/${param.id}`);
            let OneModel:PeugeotModel[] = await eredmeny.json();
            console.log(OneModel[0].EngineType)
            setModel(OneModel[0] as PeugeotModel);
        }
        load();
    }, []);


    return(
        <Card className='border rounded p-3 primary'>
            <Card.Img variant='top' src={`http://localhost:3000/${model.kepLink}`}/>
            <Card.Body>
                <Card.Title>{model.Model}</Card.Title>
            </Card.Body>
            <ListGroup>
                <ListGroup.Item>{model.Type}</ListGroup.Item>
                <ListGroup.Item>{model.Year}</ListGroup.Item>
                <ListGroup.Item>{model.Price}</ListGroup.Item>
                <ListGroup.Item>{model.EngineType}</ListGroup.Item>
                <ListGroup.Item>{model.RangeDistance}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Button variant='danger'>Vásárlás</Button>
            </Card.Body>
        </Card>
    )
}
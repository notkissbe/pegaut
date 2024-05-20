import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PeugeotModel } from '../components/card';
import { ListGroup, Table } from 'react-bootstrap';
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
                
                <Card.Title className='col'>{model.Model}</Card.Title>
                <Card.Title className='col float-end'>{model.Price} Ft.</Card.Title>
                
            </Card.Body>

            
            {/*
            <ListGroup>
                <ListGroup.Item>{model.Type}</ListGroup.Item>
                <ListGroup.Item>{model.Year}</ListGroup.Item>
                <ListGroup.Item>{model.Price}</ListGroup.Item>
                <ListGroup.Item>{model.EngineType}</ListGroup.Item>
                <ListGroup.Item>{model.RangeDistance}</ListGroup.Item>
            </ListGroup>
            */}

            <section className='d-flex justify-content-center'>
                <div className='row m-1 col-6 border rounded p-3'>
                    <div className='col'>
                        {/*bal*/}
                        <div className='row border-bottom'>Kivitel:</div>
                        <div className='row border-bottom'>Gyártási év:</div>
                        <div className='row border-bottom'>Motorváltozat:</div>
                        <div className='row border-bottom'>Futásteljesítmény:</div>
                    </div>
                    <div className='col'>
                        {/*jobb*/}
                        <div className='row border-bottom'>{model.Type}</div>
                        <div className='row border-bottom'>{model.Year}</div>
                        <div className='row border-bottom'>{model.EngineType}</div>
                        <div className='row border-bottom'>{model.RangeDistance}</div>
                    </div>
                </div>
            </section>

            
            <Card.Body>
                <Button variant='danger w-100'>Vásárlás</Button>
            </Card.Body>
        </Card>
    )
}
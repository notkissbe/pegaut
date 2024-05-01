import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PeugeotModel } from '../components/card';
import { ListGroup } from 'react-bootstrap';

export default function Megtekint(props:PeugeotModel) {
    return(
        <Card className='border rounded p-3 primary'>
            <Card.Img variant='top' src={`http://localhost:3000/${props.kepLink}`}/>
            <Card.Body>
                <Card.Title>{props.Model}</Card.Title>
            </Card.Body>
            <ListGroup>
                <ListGroup.Item>{props.Type}</ListGroup.Item>
                <ListGroup.Item>{props.Year}</ListGroup.Item>
                <ListGroup.Item>{props.Price}</ListGroup.Item>
                <ListGroup.Item>{props.EngineType}</ListGroup.Item>
                <ListGroup.Item>{props.RangeDistance}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Button variant='danger'>Vásárlás</Button>
            </Card.Body>
        </Card>
    )
}
import { Container, Row } from 'react-bootstrap';
import CreateCard from '../components/card';
import { PeugeotModel } from '../components/card';
import { useEffect, useState } from 'react';

export default function Landing() {

    const [models, setModels] = useState([] as PeugeotModel[]);

    async function load(){
        let eredmeny = await fetch("http://localhost:3000/peugeotmodels");
        let Models:PeugeotModel[] = await eredmeny.json();
        setModels(Models);
    }
    load();

    return (
        <Container>
            <Row>
                {
                    /*</Row>models.map(oneModel => <CreateCard ={oneModel as PeugeotModel}></CreateCard>)*/
                }

                <CreateCard></CreateCard>
                <CreateCard></CreateCard>
                <CreateCard></CreateCard>
            </Row>
        </Container>
    )
}
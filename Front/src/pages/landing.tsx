import { Container, Row } from 'react-bootstrap';
import CreateCard from '../components/card';
import { PeugeotModel } from '../components/card';
import { useEffect, useState } from 'react';

export default function Landing({ term }: { term: string }) {

    const [models, setModels] = useState([] as PeugeotModel[]);

    const [sorted, setSorted] = useState([] as PeugeotModel[]);
    let searchterm = term;
    //valamiert folyamatosan fut -- console.log(JSON.parse(localStorage.getItem('SortBy')!))


    useEffect(() => {
        async function load() {
            let eredmeny = await fetch("http://localhost:3000/peugeotmodels");
            let Models: PeugeotModel[] = await eredmeny.json();

            if (term == "ArC") {
                setSorted(Models.sort((a, b) => b.Price - a.Price))
            }
            else if (term == "ArN") {
                setSorted(Models.sort((a, b) => a.Price - b.Price))
            }
            else if (term == "KmC") {
                setSorted(Models.sort((a, b) => parseInt(b.RangeDistance) - parseInt(a.RangeDistance)))
            }
            else if (term == "KmN") {
                setSorted(Models.sort((a, b) => parseInt(b.RangeDistance) - parseInt(a.RangeDistance)))
            }
            else if (term == "EvC") {
                setSorted(Models.sort((a, b) => b.Year - a.Year))
            }
            else if (term == "EvN") {
                setSorted(Models.sort((a, b) => b.Year - a.Year))
            }
            else {
                setSorted(Models)
            }
        }
        load();
    }, [term])



    function HandleFetchError() {
        //fetchhez kene irni hibakezelest hozza, de nem prioritas
        return (
            <Container>
                <div className={"spinner-grow"} role="status">
                    <span className={"visually-hidden"}>Loading...</span>
                </div>
            </Container>
        )
    }

    return (
        <Container>
            <Row>
                {
                    sorted.map(oneModel => <CreateCard key={oneModel.id} kepLink={oneModel.kepLink} Model={oneModel.Model} Type={oneModel.Type} Year={oneModel.Year} Price={oneModel.Price} EngineType={oneModel.EngineType} RangeDistance={oneModel.RangeDistance} id={oneModel.id} />)
                }
            </Row>
        </Container>
    )
}

import { Container, Row } from 'react-bootstrap';
import CreateCard from '../components/card';
import { PeugeotModel } from '../components/card';
import { useEffect, useRef, useState } from 'react';

export default function Landing() {

    const [models, setModels] = useState([] as PeugeotModel[]);
    const [filter, setFilter] = useState("");
    const [sorted, setSorted] = useState([] as PeugeotModel[]);
    
    //valamiert folyamatosan fut -- console.log(JSON.parse(localStorage.getItem('SortBy')!))

   

    window.addEventListener('storage', ()=>{
        setFilter(JSON.parse(localStorage.getItem('SortBy')!))
    })

    useEffect(()=>{
        if (filter == "ArC"){
            setSorted(models.sort((a,b)=> a.Price-b.Price))
        }
        else if(filter == "ArN"){  
            setSorted(models.sort((a,b)=> b.Price-a.Price))
        }
        else if (filter == "KmC"){
            setSorted(models.sort((a,b)=> parseInt(a.RangeDistance)-parseInt(b.RangeDistance)))
        }
        else if (filter == "KmN"){
            setSorted(models.sort((a,b)=> parseInt(a.RangeDistance)-parseInt(b.RangeDistance)))
        }
        else if (filter == "EvC"){
            setSorted(models.sort((a,b)=> a.Year-b.Year))
        }
        else if (filter == "EvN"){
            setSorted(models.sort((a,b)=> a.Year-b.Year))
        }
        else{
            setSorted(models)
        }

    },[filter])



    useEffect(()=>{
        load();
        setSorted(models)
        
    },[])
    async function load() {
        let eredmeny = await fetch("http://localhost:3000/peugeotmodels");
        let Models: PeugeotModel[] = await eredmeny.json();
        setModels(Models);
        setSorted(models);
    }

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

import { useState } from 'react';
import { Button, Container, Form, InputGroup, Row } from 'react-bootstrap';

export default function Feladas() {

  const [filel, setFileL] = useState<File | null>(null);

  function HandleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (filel == null) {
      alert("nincs kep feltoltve!");
      return;
    }
    const target = e.target as typeof e.target & {
      Model: { value: string };
      Type: { value: string };
      Year: { value: string };
      Price: { value: string };
      EngineType: { value: string };
      RangeDistance: { value: string };
      image: { value: File };
    }

    const url = "http://localhost:3000/upload"
    let formdata = new FormData();
    console.log(e.target)
    formdata.append("Model", target.Model.value);
    formdata.append("Type", target.Type.value);
    formdata.append("Year", target.Year.value);
    formdata.append("Price", target.Price.value);
    formdata.append("EngineType", target.EngineType.value);
    formdata.append("RangeDistance", target.RangeDistance.value);
    formdata.append("image", filel!);

    fetch(url, {
      method: "post",
      body: formdata
    })

  }



  async function handleFileChange(e: React.SyntheticEvent) {
    //e.preventDefault();
    let target = e.target as HTMLInputElement;
    if (target.files?.length! > 0) {
      setFileL(target.files![0]);
      await console.log(filel?.name);
    }
    else {
      alert("hiba a fajl feltoltesekor")
    }

  }

  return (
    <Container className='border rounded p-3 primary'>
      <Form onSubmit={HandleUpload}>
        <InputGroup className="mb-3">
          <InputGroup.Text>Modell</InputGroup.Text>
          <Form.Control id='Model'
            placeholder="107, 206, 2008, ..."
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text >Kivitel</InputGroup.Text>
          <Form.Control
            id="Type"
            placeholder="SW, CC, ..."
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text >Évjárat</InputGroup.Text>
          <Form.Control
            id="Year"
            placeholder='1889-2024'
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text >Ár</InputGroup.Text>
          <Form.Control id='Price' />
          <InputGroup.Text>Forint</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text >Motor</InputGroup.Text>
          <Form.Control id='EngineType' />
          <InputGroup.Text>cm<sup>3</sup> - benzin/dízel</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text >Megtett távolság</InputGroup.Text>
          <Form.Control id='RangeDistance' />
          <InputGroup.Text>Km</InputGroup.Text>
        </InputGroup>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Kép beillesztése</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>

        <Button variant='success' className='w-100' type='submit'>Feladás</Button>
      </Form>

    </Container>)

}
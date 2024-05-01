import { Button, Container, Form, InputGroup, Row } from 'react-bootstrap';

export default function Feladas() {
    return (
    <Container className='border rounded p-3 primary'>
            
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Modell</InputGroup.Text>
        <Form.Control
          placeholder="107, 206, 2008, ..."
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Kivitel</InputGroup.Text>
        <Form.Control
          placeholder="SW, CC, ..."
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Évjárat</InputGroup.Text>
        <Form.Control
        placeholder='1889-2024'
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Ár</InputGroup.Text>
        <Form.Control/>
        <InputGroup.Text>Forint</InputGroup.Text>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Motor</InputGroup.Text>
        <Form.Control/>
        <InputGroup.Text>Forint</InputGroup.Text>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Megtett távolság</InputGroup.Text>
        <Form.Control/>
        <InputGroup.Text>Km</InputGroup.Text>
      </InputGroup>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Kép beillesztése</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Button variant='success' className='w-100'>Feladás</Button>

    </Container>)

}
import { Container, Row } from 'react-bootstrap';
import CreateCard from '../components/card';

export default function Landing() {
    return (
        <Container>
            <Row>
                <CreateCard></CreateCard>
                <CreateCard></CreateCard>
                <CreateCard></CreateCard>
            </Row>
        </Container>
    )
}
import { Container } from 'react-bootstrap';
import Header from '../components/header';
import Footer from '../components/footer';


export default function Layout(){
    return(
        <Container fluid>
            <Header></Header>
            <Footer></Footer>
        </Container>
    )
}
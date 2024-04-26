import { Container } from 'react-bootstrap';
import Header from '../components/header';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';


export default function Layout(){
    return(
        <Container>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </Container>
    )
}
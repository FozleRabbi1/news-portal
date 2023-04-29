import { Col, Container, Row } from "react-bootstrap";
import Header from "../ShairedFile/HeaderFile/Header";
import { Outlet } from "react-router-dom";
import RightNav from "../ShairedFile/RightNavFile/RightNav";
// import NavBar from "../NavBarFile/NavBar";

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row className='text-center'>
                    <Col className='' lg={9} >
                        <Outlet></Outlet>
                        
                    </Col>
                    <Col className='' lg={3} >
                        <RightNav></RightNav>                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsLayout;
// import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
// import Footer from "../ShairedFile/FooterFile/Footer";
import Header from "../ShairedFile/HeaderFile/Header";
import LeftNav from '../ShairedFile/LeftNavFile/LeftNav';
// import MainContent from '../MainContentFile/MainContent';
import RightNav from '../ShairedFile/RightNavFile/RightNav';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBarFile/NavBar';
// import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            
            <Container>
                <Row className='text-center'>
                    <Col className='' lg={3} >
                        <LeftNav></LeftNav>
                    </Col>
                    <Col className='' lg={6} >
                        <Outlet></Outlet>
                        
                    </Col>
                    <Col className='' lg={3} >
                        <RightNav></RightNav>                        
                    </Col>
                </Row>
            </Container>

            {/* <Footer></Footer> */}


        </div>
    );
};

export default Main;
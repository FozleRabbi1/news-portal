import { Button, Container } from "react-bootstrap";
import logo from "../../../assets/logo.png"
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
// import NavBar from "../../NavBarFile/NavBar";
// import { useContext } from "react";
// import { AuthContext } from "../../../Providers/AuthProvider";


const Header = () => {

    // const today = new Date();
    // const day = today.toLocaleString('default', { weekday: 'long' });
    // const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    // const dateString = today.toLocaleDateString('en-US', dateOptions);

    // const {user} = useContext(AuthContext);

    return (
        <Container>
            <div className="text-center">
                <img className="mx-auto" src={logo} alt="" />
                <h4>Journalism Without Fear or Favour</h4>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

            <div className="d-flex">
                <Button variant="danger">Latest</Button>
                <Marquee speed={40} gradient={true} pauseOnHover={true} gradientColor={[100, 100, 100]} >
                    I can be a React component, multiple React components, or just some  <Link className="ms-2"> text....</Link>
                </Marquee>
            </div>


            <nav className="my-4">
                {/* <NavBar></NavBar> */}

                {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">

                            <Nav.Link  > <Link to={"/catagorie/0"}>Home</Link> </Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link  >

                                {user ?
                                    <Button> LogOut </Button> :
                                    <Button variant="dark"> <Link to={'/login'}>Login</Link> </Button>
                                }

                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar> */}

            </nav>

        </Container>
    );
};

export default Header;
import { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const NavBar = () => {
    const {user, logOutUser} = useContext(AuthContext)
    
    const logOutFun = () =>{
        logOutUser()
        .then(res=>console.log(res.user))
        .catch(err => console.error(err.message))

    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">

                    <Link to={"/catagorie/0"}>Home</Link>
                    <Nav.Link href="#pricing">Career</Nav.Link>

                </Nav>
                <Nav>
                    <Link to={'/register'} >Register</Link>

                    {/* {
                        user && <p>{user}</p>
                    } */}
                    {user ?
                        <Button onClick={logOutFun}> LogOut </Button> :<Button variant="dark"> <Link to={'/login'}>Login</Link> </Button>
                    }

                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
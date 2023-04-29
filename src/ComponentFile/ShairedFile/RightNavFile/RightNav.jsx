import { Button, ListGroup } from "react-bootstrap";
import { FaGooglePlus, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "./rightNavStyle.css";
import QuieZone from "../QuieZoneFile/QuieZone";

const RightNav = () => {
    return (
        <div>
            <div className="logiButton">
                <h4 className="text-start">Login </h4>
                <Button className=" d-block w-100 " variant="outline-primary"> <FaGooglePlus></FaGooglePlus>  Login with google</Button>{' '}
                <Button className="d-block w-100 mt-2" variant="outline-secondary"> <FaGithub></FaGithub> Login with gitHub</Button>{' '}
            </div>

            <div className="find-as-on">
                <h4 className="text-start mt-4">Find as on</h4>
                <ListGroup className="listGroup text-start">
                    {/* <ListGroup.Item className="p-3" > <span className="bg-secondary d-flex justify-content-center align-items-center"><FaFacebook ></FaFacebook></span> FaceBook</ListGroup.Item> */}
                    <ListGroup.Item className="p-3" > <span className="span"><FaFacebook className="me-1 icone" ></FaFacebook> <span> FaceBook </span> </span> </ListGroup.Item>
                    <ListGroup.Item className="p-3" > <span className="span"><FaTwitter className="me-1 " ></FaTwitter> <span>Twitter</span> </span>  </ListGroup.Item>
                    <ListGroup.Item className="p-3" > <span className="span"><FaInstagram className="me-1 " ></FaInstagram> <span>Insta</span> </span>  </ListGroup.Item>
                    {/* <ListGroup.Item className="p-3" > <FaInstagram className="me-1 " ></FaInstagram>  Insta</ListGroup.Item> */}
                </ListGroup>
            </div>
            <div className="quieZone my-4 bg-secondary p-2 rounded">

                <QuieZone></QuieZone>

            </div>
        </div>
    );
};

export default RightNav;
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const { logInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const loginFun = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log( email, password);
        logInUser(email, password)
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err.message))

        form.reset();

    }

    return (
        <div>
            <h2 className="text-center">login here</h2>
            <Form onSubmit={loginFun} className="w-50 mx-auto">

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    );
};

export default Login;
import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../Providers/AuthProvider";
// import { updateProfile } from "firebase/auth";

const Register = () => {
    const { createUser, updateUserData } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false)
    // console.log(user)

    const registerFun = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log("rrrrrrrrr === ", name, photo);

        createUser(email, password)
            .then(res => {

                console.log(res.user);
                updateUserData(name, photo)
                    .then(() => console.log("data updated"))
                    .catch((err) => console.log(err.message))


                // updateProfile(user, {
                //     displayName: name,
                //     photoURL: photo
                // }).then(() => console.log("data updated"))
                //     .catch((err) => console.log(err.message))

            })
            .catch(err => console.error(err.message))


        form.reset();

    }


    return (
        <div>
            <h2 className="text-center">register here</h2>
            <Form onSubmit={registerFun} className="w-50 mx-auto">

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Photo Url </Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Enter photo url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                    <Form.Check onClick={() => setAccepted(!accepted)} type="checkbox" name="check" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepted} >
                    Submit
                </Button>

            </Form>
        </div>
    );
};

export default Register;
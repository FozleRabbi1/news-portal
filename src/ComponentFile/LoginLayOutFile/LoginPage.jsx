import { Outlet } from "react-router-dom";
import NavBar from "../NavBarFile/NavBar";

const LoginPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default LoginPage;
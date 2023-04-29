import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../MainFile/Main";
import CataDitles from "../CatagoriesDitlesFile/CataDitles";
import NewsLayout from "../NewsLayoutFile/NewsLayout";
import News from "../News/News/News";
import LoginPage from "../LoginLayOutFile/LoginPage";
import Login from "../LoginFile/Login";
import Register from "../RegisterFile/Register";
import PrivateRoute from "../PrivateRouteFile/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/', element: <LoginPage></LoginPage>,
        children: [
            {
                path: "/", element: <Navigate to={"/catagorie/0"}></Navigate>
            },
            {
                path: "/login", element: <Login></Login>
            },
            {
                path: "/register", element: <Register></Register>
            }
        ]
    },
    {
        path: "catagorie", element: <Main></Main>,
        children: [
            {
                path: ":id", element: <CataDitles></CataDitles>,
                loader: ({ params }) => fetch(`http://localhost:5000/catagories/${params.id}`)
            }
        ]
    },
    {
        path: "news", element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":id", element: <PrivateRoute> <News></News> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);

export default router;


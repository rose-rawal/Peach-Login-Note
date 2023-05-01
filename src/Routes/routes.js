import About from "../components/pages/About";
import Error from "../components/pages/Error";
import Home from "../components/pages/Home";

const routes=[
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/*',
        element:<Error/>
    },
]
export default routes
//React
//Importamos Outlet para que pueda pintar 
import { Outlet } from "react-router-dom";

//Toast
import { ToastContainer, Flip} from "react-toastify";

//Components
import Navbar from "../navbar/Navbar";

const Layout = () => {
    //Vamos a retornar los componendes de React
    return (
        <>
            <Navbar/>
            {/* Creamo un div y ponemos la clase de bootstrap */}
            <div className="container my-4">
                {/* Ponemos el lienzo donde se pintarán los componentes */}
                <Outlet />
            </div>
            <ToastContainer transition={Flip}/>
        </>
    )
};

export default Layout;
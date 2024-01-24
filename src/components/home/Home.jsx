//React
import { useEffect } from "react";

//Importamos Toas para ver el mensaje discreto (El "Alert") para poder utilizarlo necesito una configuración JS
//Creamos un archivo ToasOption en la carpeta utils.
import { toast } from "react-toastify";

//JavaScript
import { ToastOptions } from "../../utils/toastOptions";


const Home = () => {
    useEffect(() => {
        toast.success("Welcome!", ToastOptions)
    }, [])
    return (
        <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mx-auto text-center">
                <h1>Welcome!</h1>

            </div>
        </div>
    );
};

export default Home;
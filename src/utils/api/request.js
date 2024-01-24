//JavaScript
import { HTTP_CONTENT_JSON, HTPP_METHOD_GET, HTPP_METHOD_POST, HTPP_METHOD_PUT } from "../consts";

//Crear una librería para los mensajes de peticiones.
const getHttpResponseMessages=()=>
//Para que este objetos de mensajes de http y codigos no se modifiquen aplico Object.freeze
Object.freeze({
    200:"ok",
    400:"Bad Request", //Petición incorrectamente o mala petición
    401:"Unauthorized", //Petición no autorizado
    404:"Not found", //Petición no encontrado
    422:"Unprocedessable entity", //Entidad no procesable
    500:"Internal Server" //Error interno del servidor
});

//Crear un finción request que recibe un endpoint
const request = async(ENDPOINT, method=HTPP_METHOD_GET,body={})=>{
    
    let options={method};

    options.headers={
        Accept:HTTP_CONTENT_JSON,
        "Content-Type":HTTP_CONTENT_JSON
    }

    if ([HTPP_METHOD_POST,HTPP_METHOD_PUT].includes(method)) {
        options.body=JSON.stringify(body)
    } 

    try {
        const response= await fetch(ENDPOINT,options)
        //Retornar si el response no está en ok que retorne un objeto (mensaje de error)
        return !response.ok ? {statusCode:response.status, message: getHttpResponseMessages()[response.status]}:await response.json(); 
        // console.log(response);
        // return "Hola"
    } catch (err) {
        console.error(err)
    }
};

export {request}
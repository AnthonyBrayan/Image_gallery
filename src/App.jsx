//React
// import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
//Java
// import { AUTH } from './utils/api/endpoints';
// import { request } from './utils/api/request';
// import {HTPP_METHOD_POST} from './utils/consts';

//Components
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import Login from "./components/Auth/Login";

const App = () => {
  return (
    <Routes>
      {/* Esta es una ruta principal que pondremos un path
       ademas agregamos un elemento donde se va a renderizar los componentes*/}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>

      </Route>
    </Routes>
  );
};

export default App;


//Esto iba dentro de la función App:
// const loginUser =async () => {
// try {
// const response= await fetch('http://127.0.0.1:5000/auth/',{
// const response= await fetch(AUTH,{
// method: "POST",
// headers:{
//   Accept:"application/json",
//   "Content-Type":"application/json"
// },
// body:JSON.stringify({
//   username:"AFARRONAN",
//   password:"123456"
// })
// });
// Sacar el cuerpo de la respuesta (Body)
// const data= await response.json();
//         const data= await request(AUTH,HTPP_METHOD_POST,{
//           username:"AFARRONAN",
//           password:"123456"
//         });
//         console.log(data)
// } catch (error) {
//   console.error(error)
// }
// };

// useEffect(() => {
//   loginUser();
//   console.log('Anthony Brayan');
// }, []);

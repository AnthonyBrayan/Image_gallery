//React
import { useEffect } from 'react';
//Java
import { AUTH } from './utils/api/endpoints';
import { request } from './utils/api/request';
//Styles
import './App.css'



const App = () => {

  const loginUser =async () => {
    try {
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
            const data= await request(AUTH,"POST",{
              username:"AFARRONAN",
              password:"123456"
            });
            console.log(data)
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    loginUser();
    console.log('Anthony Brayan');
  }, []);

  return <h1>Anthony</h1>
}

export default App;

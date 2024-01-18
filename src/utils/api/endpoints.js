//JavaScript
import { getAPI_URL } from "./config"; 

const API_URL=getAPI_URL();

//Hacemos una concatenación de JS
const AUTH= `${API_URL}/auth/`;
// console.log(AUTH)

export {AUTH};
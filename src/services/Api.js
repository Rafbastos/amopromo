import axios from 'axios';

const accessData = process.env.REACT_APP_USER_SERVICE + ":" + process.env.REACT_APP_PASSWORD_SERVICE;
let encoded = window.btoa(accessData);
let auth = 'Basic ' + encoded;

const api = axios.create({
    headers: {'Accept': 'application/json', 'Authorization': auth, 'credentials': 'same-origin'},
});

export default api;
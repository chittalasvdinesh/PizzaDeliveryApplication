import { APIURL, APIURL2 } from "../Server/URL";
import axios from "axios";

function getItems() {
    return axios.get(APIURL)
}

function getItemById(id) {
    return axios.get(`${APIURL}${id}`)
}
function addUser(data) {
    return axios.post(APIURL2, data);
}

function getUsers() {
    return axios.get(APIURL2);
}

export { getItems, getItemById, addUser, getUsers }
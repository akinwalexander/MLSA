//import fetch from 'node-fetch';
const fetch = require('cross-fetch');
const http = require("http");


async function todos() {
    try {
        const fetchApi= await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await fetchApi.json()
        return data;
    }
    catch(err){
        console.log("An error occured");
        return null;
    }
}
async function showTodos() {
    const data = await todos();
    if(data){
        return JSON.stringify(data.slice(0, 15));
    } else {
        return "There is no todo";
    }
}

module.exports = {todos, showTodos}
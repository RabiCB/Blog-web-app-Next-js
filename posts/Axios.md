---
title: "Axios"
technology: "react"
date: "2023-02-4"
excerpt: "Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic  It can run in the browser and nodejs with the same codebase) "
package: "npm install axios"
package2: "yarn add axios"
cover_image: "https://axios-http.com/assets/logo.svg"
about: "Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.we can install axios package in your application by running the code below in your terminal."
---

Get and Post request using axios (i.e we can retieve and Post data using API)


```js
import axios from "axios";
import React from "react";
import {useState,useEffect} from "react"
function App(
const [todo,setTodo]=useState([])
useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/todos")
  .then((response)=>setTodo(response.data))


},[])
 

function createPost(){
  axios.post('https://jsonplaceholder.typicode.com/todos',{
    title:'hello world"
    body:"This is my post"
  })
  .then((response)=>{
    setTodo(todo.data)
  })
}

)
```



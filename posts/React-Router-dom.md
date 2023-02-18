---
title: "React-router-dom"
package : "npm install react-router-dom"
package2 : "yarn add react-router-dom"
technology : 'react'
date: '2023-01-2'
about: "Routing in reactJS is the mechanism by which we navigate through a website or web-application. Routing can be server-side routing or client-side routing. However, React Router is a part of client-side routing. "
excerpt: 'React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them.'
cover_image: 'https://reactrouter.com/ogimage.png'
---
```js

import ReactDOM from "react-dom/client"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

```
lets create Home.js and write following code

```js

import React from "react"

const Home=()=>{
  return(
    <h1>This is Home</h1>
  )
}

```
Its time to use Link to navigate in our /home component let's create Layout.js
In the code below we will use Link to naviate form Layout to Home component
note we can use useNavigate too .

```js

import React from "react"
import {Link,useNavigate} from "react-router-dom"
const navigate=useNavigate()
const handlenavigation=()=>{
  navigate("/")
}
const Layout=()=>{
  return(
    <Link  to="/home"><button>Link to Home</button></Link>
    <button onClick={handlenavigation}>refresh<button>
  )
}

```




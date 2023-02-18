---
title: "useContext"
technology : 'react'
date: '2023-02-4'
excerpt: 'The useContext is a hook which is used to manage state globally that is we can pass or share state with children component without Props drilling  '
about: "Context provides a way to pass data or state through the component tree without having to pass props down manually through each nested component. It is designed to share data that can be considered as global data for a tree of React components, such as the current authenticated user or theme(e.g. color, paddings, margins, font-sizes)."
cover_image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
---

### To create useContext you must import createContext

```js

import { useState, createContext } from "react";

const UserContext=createContext()  //default value

function Contextprovider(){
    const [user,setUser]=useState("eddie hall")
    return(
        <UserContext.Provider value={user}>
        </UserContext.Provider>
    

    )
}


```
### Then you can access the user Context in all component
 
```js

import {useContext} from "react"

function component(){
    const user=useContext(UserContext)
    return(
        <div>{user}</div>
    

    )
}

```

```js

import {useContext} from "react"

function component1(){
    const user=useContext(UserContext)
    return(
        <p>{user}</p>
    

    )
}

```
---
title: "Data fetching"
technology : 'react'
date: '2023-02-4'
excerpt: 'The technique we are going to talk about is known as render as you fetch. This simple technique is also suggested by React itself while fetching data. We can also fetch data by using Axios.'
cover_image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
about: 'Data fetching is a technique by which we can access the data from API(Application Programming Interface) in the form of JSON (Javascript Object Notation) and use that  data into  our react application to show information about something for eg. we can access the data/information of Movie in our application by using API called OMDB||TMDB '
---
fetching data using fetch

```js

fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))

```
fetching data using async and await 

```js

const fetchData=async()=>{
 const res=await fetch('https://jsonplaceholder.typicode.com/todos')
 const data= await res.json()
 console.log(data)
      
}

```
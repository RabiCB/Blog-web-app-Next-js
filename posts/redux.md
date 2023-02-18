---
title: "Redux the data store"
package: "npm install @reduxjs/toolkit"
package2: "yarn add @reduxjs/toolkit"
technology : 'Redux'
date: '2023-05-12'
excerpt: 'Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.'
cover_image: 'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg'
---
Create a file named src/app/store.js. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it

```js

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

```
Once the store is created, we can make it available to our React components by putting a React-Redux <Provider> around our application in src/index.js. Import the Redux store we just created, put a <Provider> around your <App>, and pass the store as a prop:

```js

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

```



After warping App lets create a file counterSlice.js and write the code below
```js

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

```

lets import the counterReducer in our store to pass through hole application

```js

import { configureStote } from '@reduxjs/toolkit'
import "counterReducer" from "./counterSlice.js"

export const store=configureStore({
  reducer:{
    counterReducer:counterReducer
  }

})
```

//We can use useSelector to access data and dispatch to run action in ReduxtoolKit
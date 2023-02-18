---
title: "useState Hook"
technology : 'react'
date: '2023-02-4'
excerpt: 'In React, useState is a hook that allows you to add state to a function component. It is a built-in function that returns an array with two values: the current state value and a function to update the state value.'
about : "In React, useState is a hook that allows you to add state to a function component. It is a built-in function that returns an array with two values: the current state value and a function to update the state value. You can use the state value and the updater function to manage the state of your component"
cover_image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
---

### Here is an example of how to use useState to add state to a component:

```js
import { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

```

In this example, the useState hook is used to add state to the component. The count variable is the current state value, and setCount is the updater function. The initial state value is set to 0 using the useState function.

The handleClick function is used to update the state value when the user clicks the button. When the button is clicked, the setCount function is called with the new value of count.

The current state value can be used in the component's JSX using curly braces, as shown in the example with the count variable. Whenever the state value changes, React will automatically re-render the component with the new state value.

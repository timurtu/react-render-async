# React render async

Return a promise in the render function which resolves to a component. That component can also return a promise that resolves to a component and so on.

## Install

```
npm install --save react-render-async
```

```javascript
import asyncrify from "react-render-async";

// wrap your existing component export with this function

asyncrify(Component);
```

## Use

```javascript
import React, { Component } from 'react';
import asyncrify from 'react-render-async';

class Header extends Component {
  render() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          <h2>Hello, Async!</h2>
        );
      }, 5000);
    });
  }
}

const AsyncHeader = asyncrify(Header);

class Loader extends Component {
  render() {
    return (
      <div>Loading...</div>
    );
  }
}

class App extends Component {
  render() {
    return <AsyncHeader loadingComponent={Loader} />;
  }
}
```

# Try

- Clone this repo
- `cd` into it
- `npm install`
- `cd example`
- `npm install`
- `cd ..`
- `npm start`

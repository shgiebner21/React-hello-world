import React from 'react'
import MyFuncComponent from './components/my-func-component'
import MyComponent from './components/my-component'
import MyClassComponent from './components/my-class-component'

class App extends React.Component {
  render() {
    return (
      <div>
      <MyComponent color="blue" title="My Component" />
      <MyClassComponent color="red" title="My Class Component" />
      <MyFuncComponent color="green" title="My Func Component" />
      </div>
    )
  }
}

export default App

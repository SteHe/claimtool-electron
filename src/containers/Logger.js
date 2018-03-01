import React, { Component } from 'react'

const { ipcRenderer } = window.require('electron')

class Logger extends Component {
  constructor(props) {
    super(props)
    this.state = { message: '', args: '' }
  }

  componentDidMount() {
    ipcRenderer.on('new', (event, arg) => {
      this.setState({ message: 'new', args: arg })
    })
    ipcRenderer.on('save', (event, arg) => {
      this.setState({ message: 'save', args: arg })
    })
    ipcRenderer.on('open', (event, arg) => {
      this.setState({ message: 'open', args: arg })
    })
    ipcRenderer.on('restore', (event, arg) => {
      this.setState({ message: 'restore', args: arg })
    })
    ipcRenderer.on('print', (event, arg) => {
      this.setState({ message: 'print', args: arg })
    })
    ipcRenderer.on('preferences', (event, arg) => {
      this.setState({ message: 'preference', args: arg })
    })
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h2>last message <span><b>{this.state.message}.</b></span></h2>
        <h2>came with args <span><b>{this.state.args}.</b></span></h2>
      </div>
    )
  }
}

export default Logger

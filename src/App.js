import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: '',
      message: '',
      status: '',
      requests: [
        '/asshole/cat',
        '/back/human/cat',
        '/bag/cat',
        '/because/cat',
        '/blackadder/human/cat',
        '/bucket/cat',
        '/cocksplat/human/cat',
        '/cool/cat',
        '/cup/cat',
        '/deraadt/human/cat',
        '/diabetes/cat',
        '/donut/human/cat',
        '/equity/human/cat',
        '/everyone/cat',
        '/family/cat',
        '/fascinating/cat',
        '/flying/cat',
        '/fts/human/cat',
        '/fyyff/cat',
        '/give/cat',
        '/horse/cat',
        '/immensity/cat',
        '/ing/human/cat',
        '/keep/human/cat',
        '/king/human/cat',
        '/life/cat',
        '/linus/human/cat',
        '/look/human/cat',
        '/looking/cat',
        '/maybe/cat',
        '/no/cat',
        '/nugget/human/cat',
        '/off/human/cat',
        '/outside/human/cat',
        '/programmer/cat',
        '/question/cat',
        '/retard/cat',
        '/sake/cat',
        '/shit/cat',
        '/shutup/human/cat',
        '/single/cat',
        '/thanks/cat',
        '/that/cat',
        '/think/human/cat',
        '/thinking/human/cat',
        '/this/cat',
        '/thumbs/human/cat',
        '/too/cat',
        '/tucker/cat',
        '/what/cat',
        '/xmas/human/cat',
        '/yoda/human/cat',
        '/you/human/cat',
        '/zero/cat'
      ]
    }
  }

  api = () => {
    axios
      .get(
        `https://www.foaas.com${
          this.state.requests[Math.ceil(Math.random() * 51)]
        }`
      )
      .then(response => {
        this.setState({
          message: response.data.message
        })
      })
    axios.get('https://aws.random.cat/meow').then(response => {
      this.setState({
        image: response.data.file
      })
    })
    this.setState({
      status: 'hidden'
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Have you ever wondered what your cat thinks?</h1>
        <img alt="cat" src={this.state.image} />
        <p>{this.state.message}</p>
        <h2 className={this.state.status}>Click the button to find out!</h2>
        <button onClick={this.api}>Show me what my cat thinks!</button>
      </div>
    )
  }
}

export default App

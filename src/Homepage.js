import React from 'react';
import Clock from './Clock';
import { Search, Grid, Header, Segment } from 'semantic-ui-react';
import { Message } from 'semantic-ui-react';

export default class Homepage extends React.Component {
  state = {
    apod: []
  }
          // <img src={this.state.apod.url} alt={this.state.apod.date}/>
          // <iframe src={this.state.apod.url} height="300" width="300"></iframe>
  fetchAPOD() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=Bm9Mxp9IXG0egUpRo74lXLYbTESEwRSbyP5tYpuI')
    .then(r => r.json())
    .then(data => {
      // console.log("fetch", data)
      this.setState({
        apod: data
      })
    })
  }

  componentDidMount() {
    this.fetchAPOD()
  }

  render () {

    return (
      <div className="home-page">
        <Clock />
        <div className="homepage-splash">
          <img id="splash" src={this.state.apod.url} alt={this.state.apod.date}/>
        </div>
        <div className="home-page-description">
          <p>Title: {this.state.apod.title}</p>
          Description:
            {this.state.apod.explanation}
        </div>
      </div>

    )
  }
}

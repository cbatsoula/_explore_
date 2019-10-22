import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import SolarSystemCollection from './SolarSystemCollection';
import Navbar from './Navbar';
import Homepage from './Homepage';
import ObjectPage from './ObjectPage';
//did yarn add react-router-dom

class App extends React.Component {
  state = {
    // apod: [],
    bodies: [],
    currentBody: null,
    open: false,
    selectNav: "",
    searchTerm: "",
    filterBodies: [],
    planetFilter: false,
    sortType: "",

  }

  toggleFilter = () => {
    this.setState({
      planetFilter: !this.state.planetFilter
    })
  }

  changeSortType = (newSortType) => {
    this.setState({
      sortType: newSortType
    })
    console.log("change sort type", newSortType)
  }

  applyFilter = () => {
    if (this.state.planetFilter) {
      return this.state.bodies.filter(body => {
        return body.isPlanet
      })
    } else {
      return this.state.bodies
    }
  }

  applySort = () => {
  let filteredPlanets = this.applyFilter()
    console.log("why", this.state.sortType)
    switch(this.state.sortType) {
      case "a - z":
      console.log("not?")
        return [...filteredPlanets].sort((bodyA, bodyB) => {
            return bodyA.englishName.localeCompare(bodyB.englishName)
          });
      case "gravity":
        return[...filteredPlanets].sort((bodyA, bodyB) => {
          return bodyA.gravity - bodyB.gravity
        });
      case "":
        return filteredPlanets;
      case "density":
        return[...filteredPlanets].sort((bodyA, bodyB) => {
          return bodyA.density - bodyB.density
        });
      case "mean radius":
        return[...filteredPlanets].sort((bodyA, bodyB) => {
          return bodyA.meanRadius  - bodyB.meanRadius
        });
      default:
        return filteredPlanets;
      }
    }



  fetchBodies() {
    fetch('https://api.le-systeme-solaire.net/rest/bodies/')
      .then(r => r.json())
      .then(planets => {
        // console.log("planets i hope", planets.bodies)
        this.setState({
          bodies: planets.bodies
        })
      })
  }


  componentDidMount() {
    // this.fetchAPOD()
    this.fetchBodies()
  }

  handleSelect = (event, stateId) => {
    // console.log("clicked!", stateId)

    let selectedBody = this.state.bodies.find(body => {
      return body.id === stateId})
    this.setState({
      open: !this.state.open,
      currentBody: selectedBody
    })
  }

  selectNav = (event, {name}) => {
    // console.log("nav click!", event.target, name)
    this.setState({
      selectNav: name
    })
  }

  handleSearchChange = (event) => {
    // console.log("typin'", event.target.value)
    let fullTerm = (event.target.value.charAt(0).toUpperCase()) + (event.target.value.slice(1));
    this.setState({
      searchTerm: fullTerm
    })
  }

  handleSearchSubmit = (event) => {
    // console.log("submit!")
    event.preventDefault();
      if (this.state.searchTerm){
        // console.log("submit!!")
        let filtered = this.state.bodies.filter(body => {
          return body.englishName === this.state.searchTerm
          console.log("submit!!!")
        })
          this.setState({
            filterBodies: filtered,
            searchTerm: ""
          })
        // return this.state.searchTerm
      } else {
        return this.state.bodies
      }

  }

  showEmAll = () => {
    // console.log("Soon", this.state.bodies)
    this.setState({
      filterBodies: [],
      planetFilter: false,
      bodies: this.state.bodies,
      currentBody: null,
      open: false
    })
  }


  renderSwitch(state) {
      return (
        <div>
        {(
          () => {
          console.log("switch", state.selectNav)
          switch(state.selectNav) {
            case 'celestial bodies':
              return <SolarSystemCollection
              open={this.state.open}
              bodies={this.applySort()}
              toggleFilter={this.toggleFilter}
              handleSelect={this.handleSelect}
              changeSortType={this.changeSortType}
              showEmAll={this.showEmAll}
              handleSearchSubmit={this.handleSearchSubmit}
              handleSearchChange={this.handleSearchChange}
              searchTerm={this.state.searchterm}
              currentBody={this.state.currentBody}
              filterBodies={this.state.filterBodies}/>;
            case 'home':
              return <Homepage />;
            default:
              return null;
            }
          }
        )()}
        </div>
      );
    }

  render () {
    // console.log("clicked!", this.state, this.state.currentBody )
    return (
      <div className="App">
        <Navbar
          selectNav={this.selectNav}
          handleItemClick={this.handleItemClick}/>
        {this.renderSwitch(this.state)}
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import CommentCard from './CommentCard';
import ObjectComments from './ObjectComments';


export default class ObjectPage extends React.Component {


//   "mass": {
//     "massValue": 1.06000,
//     "massExponent": 16
//   },
//   "vol": {
//     "volValue": 5.78361,
//     "volExponent": 3
//   },
//   "rel": "https://api.le-systeme-solaire.net/rest/bodies/phobos"
  render () {
    console.log("obj details", this.props)
    const {
      currentBody: {id, name, englishName, isPlanet, discoveredBy, discoveryDate, aroundPlanet, moons, semimajorAxis, perihelion, aphelion, eccentricity, inclincation, mass, vol, density, gravity, escape, meanRadius, equaRadius, polarRadius, flattening, alternativeName, dimension, sideralOrbit, sideralRotation}
    } = this.props;
    return (
      <div className="ObjectDetailsContainer">
        <Container text>
          <Header as='h2'>{englishName}</Header>
            <ul>
              <li>Discovered by: {discoveredBy ? discoveredBy : ' difficult to pinpoint'}</li>
              <li>Discovered on: {discoveryDate ? discoveryDate : ' difficult to pinpoint'}</li>
              {
                isPlanet
                ?
                <li>Is a planet</li>
                :
                <li>For a moon, the planet around which it is orbiting:   {aroundPlanet.planet.toUpperCase()}</li>
              }
              <li>Gravity: {gravity}</li>
              <li>Density: {density}</li>
              <li>Mean Radius: {meanRadius}</li>
              <button
                onClick={this.props.startQuiz}
                className="ui violet button"
                type="submit">Start Quiz!</button>
            </ul>

        </Container>
      </div>

    );
  }
}

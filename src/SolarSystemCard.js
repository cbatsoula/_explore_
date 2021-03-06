import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

export default class SolarSystemCard extends React.Component {
  render() {
    // console.log("card", this.props)
    return (
      <Card className="SolarCard" centered="true" fluid="true" color="green" onClick={(event) => this.props.handleSelect(event, this.props.id)}>
        <Card.Content >
          <Card.Header dataset-id={this.props.id}>Name: {this.props.englishName ? this.props.englishName : this.props.name.toUpperCase()}
          </Card.Header>
          <Card.Description>

            <li>Discovered by: {this.props.discoveredBy ? this.props.discoveredBy : "null"}</li>
            <li>Discovered on: {this.props.discoveryDate ? this.props.discoveryDate : "null"}</li>
            <li>Is this a planet: {this.props.isPlanet.toString()}</li>
            <li>Surface Gravity: {this.props.gravity} m.s-2</li>
            <li>Mean Radius in kilometres: {this.props.meanRadius} </li>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

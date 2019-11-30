import React from 'react';
import { Grid, Card, Icon } from 'semantic-ui-react';
import { Dropdown, Button } from 'semantic-ui-react';
import SolarSystemCard from './SolarSystemCard';
import ObjectPage from './ObjectPage';

export default class SolarSystemCollection extends React.Component {


  renderSearchedOrReg = () => {
    if (this.props.filterBodies.length > 0){
      return this.props.filterBodies.map(body => {
        return <SolarSystemCard {...body}
        key={body.id}
        handleSelect={this.props.handleSelect}/>
      })
    } else {
      return this.props.bodies.map(body => {
        return <SolarSystemCard {...body}
        key={body.id}
        handleSelect={this.props.handleSelect}/>
      })
    }
  }

  help = () => {
    if (this.props.open){
      console.log("open true")
      return <ObjectPage currentBody={this.props.currentBody} />
    } else {
      console.log("open false")
      return this.renderSearchedOrReg()
    }
  }

  render() {
    console.log("collection props:", this.props)
    return (
      <div className="SolarSystemCollection">
      <Grid>

          <div className="ui-sortNsearch">
              <select onChange={(event) => this.props.changeSortType(event.target.value)} className="ui standard button">
                <option value="none">None</option>
                <option value="a - z">A - Z</option>
                <option value="gravity">Gravity</option>
                <option value="density">Density</option>
                <option value="mean radius">Mean Radius</option>
              </select>

              <Button floated='left'
              className="ui blue button"
              type="submit"
              onClick={this.props.showEmAll}>Show 'em all!</Button>
              <Button floated='left'
              className="ui blue button"
              type="submit"
              onClick={this.props.toggleFilter}>Show just planets!</Button>


            <div className="ui search" >
              <input
              type="text"
              value={this.props.searchTerm}
              onChange={this.props.handleSearchChange}
              placeholder="Search..."
              />
              <button
              className="ui violet button"
              type="submit"
              onClick={this.props.handleSearchSubmit}>Submit</button>

            </div>
          </div>
            <Grid.Row centered="true" columns={4}>
              <Grid.Column width={16}>
                <Card.Group itemsPerRow={4} className="index-cards">
                {
                  this.help()
                }
                </Card.Group>
              </Grid.Column>
            </Grid.Row>
      </Grid>
      </div>
    );
  }
}

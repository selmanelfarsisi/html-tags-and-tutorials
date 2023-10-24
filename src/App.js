import React, { Component } from "react";
import { robohashs } from './robohashs';
import Search from './Search';
import Robots from './Robots';
import Scroll from './Scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robohashs: robohashs,
      searchfield: ''
    }
  }

  onsearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }
  render() {
    const { robohashs, searchfield } = this.state;
    const filteredRobots = robohashs.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f2">Robotic</h1>
        <Search searchChange={this.onsearchChange}/>
        <Scroll>
          <Robots robohashs = { filteredRobots }/>
        </Scroll>
      </div>
    );
  }
}

export default App;
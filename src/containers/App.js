import React, { Component } from 'react';
// import { robots } from '../robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { connect } from 'react-redux';
import { setSearchField } from '../action';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      // searchField: "",
      robots: []
    }
  }

  componentDidMount() {
    // this.setState({ robots: robots });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json() )
      .then( users => this.setState({ robots: users })
    );
  }

  // onSearchChange = (event) => {
  //   this.setState({ searchField: event.target.value });
  // }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props; 
    const robotsFiltered = robots.filter( robot => {
        return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });
      
    return !robots.length ? 
      <h1 className="f1 dark-gray pt3">Loading...</h1> :
      (
        <div className="tc ">
          <h1 className="f3 fw8 dark-gray pt1 underline ttu" >RobotFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={robotsFiltered} />
          </Scroll>
        </div>
      );
      
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
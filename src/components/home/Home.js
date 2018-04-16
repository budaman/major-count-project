import React, { Component } from 'react';
import Header from '../header/Header';
import SearchTeams from './search/SearchTeams';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <SearchTeams />
      </div>
    );
  }
}

export default Home;

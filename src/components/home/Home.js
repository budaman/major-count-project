import React, { Component } from "react";
import teams from "../../_api/teams";

class Home extends Component {
  render() {
    let showTeams = teams.map(t => {
      return (
        <div key={t.name}>
          <img
            src={require(`../../_public/logos/${t.name}.png`)}
            alt={t.name}
          />
        </div>
      );
    });

    return <div>{showTeams}</div>;
  }
}

export default Home;

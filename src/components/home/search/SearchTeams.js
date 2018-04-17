import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import teams from '../../../_api/teams';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});

class SearchTeams extends Component {
  state = {
    matchedRoadTeams: [],
    matchedHomeTeams: []
  };
  handleRoadSearch = e => {
    let roadTeam = teams.filter(t => {
      const regex = new RegExp(e.target.value, 'gi');
      return t.fullName.match(regex) || t.name.match(regex);
    });
    this.setState({
      matchedRoadTeams: roadTeam
    });
  };

  handleHomeSearch = e => {
    let homeTeam = teams.filter(t => {
      const regex = new RegExp(e.target.value, 'gi');
      return t.fullName.match(regex) || t.name.match(regex);
    });
    this.setState({
      matchedHomeTeams: homeTeam
    });
  };

  render() {
    const { matchedRoadTeams, matchedHomeTeams } = this.state;
    const { classes } = this.props;
    const displayMatchedRoadTeams = () => {
      return matchedRoadTeams.map(t => {
        return (
          <div
            key={t.name}
            onClick={() => {
              console.log(t);
            }}
          >
            <img
              className="search-image"
              src={require(`../../../_public/logos/${t.name}.png`)}
              alt={t.name}
            />
          </div>
        );
      });
    };
    const displayMatchedHomeTeams = () => {
      return matchedHomeTeams.map(t => {
        return (
          <div
            key={t.name}
            onClick={() => {
              console.log(t);
            }}
          >
            <img
              className="search-image"
              src={require(`../../../_public/logos/${t.name}.png`)}
              alt={t.name}
            />
          </div>
        );
      });
    };
    return (
      <div className="SearchTeams">
        <div className="team-input-container">
          <h3>Road</h3>
          <TextField
            id="search-road"
            label="Road team"
            type="search"
            onChange={this.handleRoadSearch}
            className={classes.textField}
            margin="normal"
          />
        </div>
        <div className="team-input-container">
          <h3>Home</h3>
          <TextField
            id="search-home"
            label="Road team"
            type="search"
            onChange={this.handleHomeSearch}
            className={classes.textField}
            margin="normal"
          />
        </div>
        <div className="search-image-container">
          {displayMatchedRoadTeams()}
        </div>
        <div className="search-image-container">
          {displayMatchedHomeTeams()}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SearchTeams);

//kriti
import React from 'react';
// import GamesList from './GamesList';
// import { connect } from 'react-redux';
// import { fetchGames } from './actions';

export default class ImageByUser extends React.Component {
//   componentDidMount() {
//     this.props.fetchGames();
//   }

  render() {
    return (
      <div>
        <h2 align="center">Images by this user</h2>

        {/* <GamesList games={this.props.games} /> */}
      </div>
    );
  }
}

// GamesPage.propTypes = {
//   games: React.PropTypes.array.isRequired,
//   fetchGames: React.PropTypes.func.isRequired
// }

// function mapStateToProps(state) {
//   return {
//     games: state.games
//   }
// }

// export default connect(mapStateToProps, { fetchGames })(GamesPage);
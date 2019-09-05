import React from "react";
import Search from './Search';
import Artist from './Artists';
import Tracks from './Tracks';

const API_URL = "https://spotify-api-wrapper.appspot.com";

class App extends React.Component {
  state = { artist: null, tracks: [] };

  componentDidMount(){
      this.searchArtist('Beyonce');
  }

  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value });
  };

  searchArtist = artistQuery => {
    fetch(`${API_URL}/artist/${artistQuery}`)
      .then(response => response.json())
      .then(json => {
        if (json.artists.total > 0) {
          const artist = json.artists.items[0];
          this.setState({ artist });
          fetch(`${API_URL}/artist/${artist.id}/top-tracks`)
            .then(response => response.json())
            .then(json => this.setState({ tracks: json.tracks }))
            .catch(error => alert(error.message));
        }
      })
      .catch(error => alert(error.message));
  };

  render() {
    return (
      <div>
        <h2>Music Master</h2>
        <Search searchArtist = {this.searchArtist}/>
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks} />
      </div>
    );
  }
}

export default App;

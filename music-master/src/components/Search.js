import React from "react";

class Search extends React.Component {
    state ={artistQuery: ''};
    handleKeyPress = event => {
        if (event.key === "Enter") {
          this.searchArtist();
        }
      };

      updateArtistQuery = event => {
        this.setState({ artistQuery: event.target.value });
      };

      searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery);
      }

  render() {
    return (
      <div>
        <input
          onChange={this.updateArtistQuery}
          placeholder="Search for an artist"
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    );
  }
}

export default Search

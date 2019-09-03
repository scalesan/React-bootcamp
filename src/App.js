import React from "react";
import Projects from "./Projects";
import SocialProfiles from './SocialProfiles';
import Me from './assets/Me.jpg';

class App extends React.Component {
  state = { displayBio: false };
  toggleBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <img src={Me} alt="Profile" className="profile" />
        <h1>Hello!</h1>
        <p>My name is Anthony and I am a software engineer.</p>
        <p>I am always looking forward to working on meaningful projects.</p>
        {this.state.displayBio ? (
          <div>
            <p>
              I live in Detroit, MI and I code all the time. I like React.js
            </p>
            <p>I like dogs</p>
            <button onClick={this.toggleBio}>Show Less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleBio}>Show More</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;

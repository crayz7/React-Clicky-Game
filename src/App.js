import React, { Component } from "react";
import ClickyCard from "./components/ClickyCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    message: "Click an image to begin",
    currentScore: 0,
    topScore: 0
    
  };

  clickScore = id => {
    const clickedFriend = this.state.friends.filter (friend => friend.id === id)
    console.log(clickedFriend[0].clicked);
    if (clickedFriend[0].clicked === undefined) {
      console.log("matched")
      const friends = this.state.friends.map(
      friend => {
        return id === friend.id 
          ? { 'id': friend.id, 'name': friend.name, 'image' : friend.image, 'clicked' : true} 
          : {'id' : friend.id, 'name' : friend.name, 'image' : friend.image, 'clicked' : friend.clicked}
        }
      );

    const newScore = this.state.currentScore + 1;

    this.setState({
      friends: friends,
      message: "You guessed correctly",
      currentScore: newScore
    });
    
    
    if (newScore > this.state.topScore) {
        this.setState({ topScore: newScore });
      }

    // Randomize cards
    friends.sort(function (a, b) { return 0.5 + Math.random() });

    } else {
      console.log("else match");
      this.setState ({
        friends: friends,
        message: "You guessed incorrectly",
        currentScore: 0
      })
    }
};

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <h3 className="scoreBoard">
          {this.state.message}
        </h3>
        <br/>
        <h3 className="scoreBoard">
          Current Score: {this.state.currentScore}
          <br/>
          Top Score: {this.state.topScore}
        </h3>
        {this.state.friends.map(friend => (
          <ClickyCard
            clickScore={this.clickScore}
            key={friend.id}
            id={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={friend.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

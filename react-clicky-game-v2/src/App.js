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

  componentDidMount() {
  }

  //randomize =

  clickScore = id => {
    const clicked = friends.filter(clicked => clicked.id === id);
    console.log(clicked);
    if (this.state.currentScore < 6) {
      // Set its value to true
      clicked[0].clicked = true;

      // Randomize cards
      friends.sort(function (a, b) { return 0.5 - Math.random() });

      if (this.state.currentScore > this.state.topScore) {
        this.setState({ topScore: this.state.currentScore });
      }

      this.setState({
        friends: friends,
        message: "You guessed correctly",
        currentScore: this.state.currentScore + 1
       // topScore: 
      });
    } else {
        // Set its value to true
        clicked[0].clicked = true;

        this.setState({
          topScore: 0,
          currentScore: 0, 
          message: "Good job, you won!"
        })

        for (let i = 0; i < clicked.length; i++) {
          clicked[i].clicked = false;
        }

        // Shuffle the array to be rendered in a random order
        clicked.sort(function (a, b) { return 0.5 - Math.random() });

        // Set this.state.matches equal to the new matches array
      this.setState({
        friends: friends,
        message: "Click an image begin",
        currentScore: 0,
        topScore: 0,
      });
    }
  }

  //   if (clicked === undefined) {
  //   const friends = this.state.friends.map(
  //     friend => {

  //       return id === friend.id 
  //         ? { 'id': friend.id, 'name': friend.name, 'image' : friend.image, 'clicked' : true} 
  //         : {'id' : friend.id, 'name' : friend.name, 'image' : friend.image, 'clicked' : friend.clicked}
  //       }
  //     );

  //   this.setState({
  //     friends: friends,
  //     message: "You guessed correctly",
  //     currentScore: this.state.currentScore + 1,
  //     topScore: 0,
      
  //   });
  
  //   // Set this.state.friends equal to the new friends array
  //   for (let i = this.state.friends.length - 1; i > 0; i--) {
  //     let j = Math.floor(Math.random() * (i + 1));
  //     [this.state.friends[i], this.state.friends[j]] = [this.state.friends[j], this.state.friends[i]];
      
  //   }
  //   console.log(this.state.friends);
  //  } else if (this.state.friends.clicked === true) {
  //   console.log("reset game");
  //  }
  //};

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

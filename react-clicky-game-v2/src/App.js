import React, { Component } from "react";
import ClickyCard from "./components/ClickyCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  componentDidMount() {
  }

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.map(
      friend => {
        return id === friend.id 
          ? { 'id': friend.id, 'name': friend.name, 'image' : friend.image, 'clicked' : true} 
          : {'id' : friend.id, 'name' : friend.name, 'image' : friend.image, 'clicked' : friend.clicked}
        }
      );

    this.setState({ friends });
      
    // Set this.state.friends equal to the new friends array
    for (let i = this.state.friends.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.state.friends[i], this.state.friends[j]] = [this.state.friends[j], this.state.friends[i]];
      
    }
    console.log(this.state.friends);
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {/* <Title>Friends List</Title> */}
        {this.state.friends.map(friend => (
          <ClickyCard
            removeFriend={this.removeFriend}
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

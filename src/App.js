import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import friends from "./friends.json";
import "./App.css";

let clickedFriends=[], score=0, maxScore=0
class App extends React.Component {
    state = {
        friends: friends,
        score:0,
        maxScore:0
    }

    //Reset the Game if a Clicked Character is clicked again!!
    resetGame = () => {
        clickedFriends=[]
        score=0                               //Reset the score
        if( this.state.score > maxScore)      //update MaxScore only if current score is higher than maxScore
          maxScore=this.state.score

        this.setState({                       //update the state variables
          score:score,
          maxScore:maxScore
        })
        return
    }
  
    //Shuffle the cards when an Character Card is clicked 
    shuffleFriends= () => {
    
        this.setState({
        friends:this.state.friends.sort(function(a, b){return 0.5 - Math.random()})
        })
    
    }
  
  
    imgClick = (id) => {

        //use the id of the Character Card to save his name into Clicked Friends
        const clickedFriend = this.state.friends.filter((friend) => ( friend.id === id) )
        this.shuffleFriends()

        //If the current clicked Character Card was previously clicked then reset game
        if(clickedFriends.indexOf(clickedFriend[0].name) !== -1) {
          this.resetGame()
          console.log(clickedFriends)
        } else 
          //if the Character Card is clicked for first time,
          //save his name in clickedFriends array, increase score, update state with the score
        {
          clickedFriends.push(clickedFriend[0].name)
          
          if(score===0) {
              maxScore=this.state.maxScore
          }

          score++
          this.setState({
              score:score,
              maxScore:maxScore
          })
          console.log(clickedFriends)
        
        }
    
      }
 
    render() {
      return(
          
        <Wrapper >
          <NavBar score={this.state.score}
                  maxScore={this.state.maxScore}
          />
          
          {this.state.friends.map( (friend) => (
            <FriendCard
                imgClick={()=>this.imgClick(friend.id)}
                key={friend.id}
                id={friend.id}
                name={friend.name}
                image={friend.image}
            />
          ) ) }
      
        </Wrapper>) 
    } 
}

export default App;

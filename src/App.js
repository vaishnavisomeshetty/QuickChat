import './App.css';
import ProfileCard from './components/profile-card.component'
import ForumTwoToneIcon from '@material-ui/icons/ForumTwoTone';
import ActiveConversation from './components/ActiveConversations.component';
import CurrentChat from './components/currentChat.component'
import ClientCard from './components/clientCard.component'
import BarChart from './components/BarChart'
import React, { Component } from 'react';
import { myStore } from '.';

export default class App extends Component {
  constructor(){
    super();
    this.state ={
      showchat : null
    }
    myStore.subscribe(()=>{
      this.setState({showchat:myStore.getState().SelectChat})
  })
  }
  render(){
  return (
    <div className="App">
      <div>
        <p className="App-header">
          <ForumTwoToneIcon />
          QuickChat
        </p>
        <div className="App-profile">
          <ProfileCard />
        </div>
      </div>
      <div className="activeChats">
        <ActiveConversation />
      </div>
      {this.state.showchat != null ? <div className="currentChat"><CurrentChat /> </div> : <h6 className="noChat">No Conversation Selected !!</h6> } 
      {this.state.showchat != null ? <div className="barchart"><BarChart /> </div> : '' } 
      {this.state.showchat != null ? <div className="clientCard"><ClientCard /> </div> : '' } 
    
    </div>
     
  );
  }
}


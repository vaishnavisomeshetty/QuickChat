import List from '@material-ui/core/List';
import ListItemButton from '@material-ui/core/ListItemButton';
import Badge from '@material-ui/core/Badge';
import { myStore } from '../index';
import { selectChat } from '../actions';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import download from '../download.jpg';
import photo2 from '../photo2.jpg';
import photo3 from '../photo3.jpg';
import photo4 from '../photo4.jpg';
import photo5 from '../photo5.jpg';
import photo6 from '../photo6.jpg';
import React, { Component } from 'react';

export default class ActiveConversation extends Component {
  constructor() {
    super()
    this.state = {
      currentChat: null,
      activeOpen: true,
      archiveOpen: true,
      activeChats: [
        { img: download, name: 'Henry Boyd', msgs: null },
        { img: photo2, name: 'Martha Curtis', msgs: null },
        { img: photo3, name: 'Philip Tucker', msgs: 5 },
        { img: photo4, name: 'Chirstine Red', msgs: null },
        { img: photo5, name: 'Gerry Guzzman', msgs: null },
        { img: photo6, name: 'Russell Williams', msgs: null },

      ]
    }
    this.handleActiveClick = () => {
      this.setState((prevState) => {
        return { activeOpen: !prevState.activeOpen }
      });
    }
    this.handleArchiveClick = () => {
      this.setState((prevState) => {
        return { archiveOpen: !prevState.archiveOpen }
      });
    }
    this.showChat = () => {

      myStore.dispatch(selectChat(this.state.currentChat))
    }
    this.changeChat = (chat) => {
      console.log("in change chat", chat);
      this.setState({ currentChat: chat }, () => {
        console.log(this.state.currentChat);
        this.showChat()

      })
    }
  }
  active(chat) {
    return (
      <div key={chat.name}>
        <ListItemButton sx={{ pl: 4 }} onClick={() => { this.changeChat(chat) }}>
          <img src={chat.img} alt='profile' className='rounded-circle' style={{ height: '4vh', width: '2vw', marginRight: '20px' }} />
          {chat.name}
          {chat.msgs ? <Badge badgeContent={chat.msgs} color='secondary' style={{ marginLeft: '40px' }} /> : ''}
        </ListItemButton>
      </div>
    )
  }
  activeChats(chats) {
    const chat = chats.map((ele) => {
      return (this.active(ele))
    })
    return chat;
  }
  render() {
    return (

      <div>

        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={this.handleActiveClick}>
            <ListItemText>
              <b>Active Conversations</b>
            </ListItemText>
            <Badge badgeContent={4} color='warning' style={{ marginRight: '20%' }} />
            {this.state.activeOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={this.state.activeOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {this.activeChats(this.state.activeChats)}
            </List>
          </Collapse>
        </List>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={this.handleArchiveClick}>
            <ListItemText>
              <b>Archived Conversations</b>
            </ListItemText>
            <Badge badgeContent={4} color='warning' style={{ marginRight: '20%' }} />
            {this.state.archiveOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={this.state.archiveOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {this.activeChats(this.state.activeChats)}
            </List>
          </Collapse>
        </List>
      </div>
    )
  }
}
import React, { Component } from 'react'
import Button from '@mui/material/Button';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import './clientCard.css'
import { myStore } from '..';
export default class ClientCard extends Component {
    constructor() {
        super()
        this.state = {
            selectedChat: myStore.getState().SelectChat
        }
        myStore.subscribe(() => {
            this.setState({ selectedChat: myStore.getState().SelectChat })
        })
    }
    render() {
        return (
            <div className='card' style={{ borderRadius: '15px', backgroundColor:'rgb(240,248,255)' }}>
                <div className='clientProfile'>
                    <div className='cientHeader'> {this.state.selectedChat ? this.state.selectedChat.name.match(/\b(\w)/g).join(''):''}</div>
                </div>
                <div className='clientInfo'>
                   <p><ForwardToInboxIcon/> <span style={{marginLeft:'10px'}}>{this.state.selectedChat ? this.state.selectedChat.name.replace(/ /g,'').toLowerCase()+'@gmail.com':''}</span></p>
                  <p> <AccountCircleOutlinedIcon/> <span  style={{marginLeft:'10px'}}>{this.state.selectedChat ? this.state.selectedChat.name:''}</span></p>
                </div>
               <Button variant='outlined' className='clientButton'>
                   <span style={{marginRight:'5px'}}>Archive</span> <ArchiveOutlinedIcon/>
               </Button>
            </div>
        )
    }
}

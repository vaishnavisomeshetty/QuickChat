import React, { Component } from 'react';
import SendIcon from '@material-ui/icons/Send';
import Stack from '@material-ui/core/Stack';
import IconButton from '@material-ui/core/IconButton';
import AttachFileSharpIcon from '@material-ui/icons/AttachFileSharp';
import './currentChat.css';
import { myStore } from '../index';
import { send } from '../actions';
import download from '../download.jpg';

export default class CurrentChat extends Component {
    constructor() {
        super();
        this.state = {
            chat: myStore.getState().chatReducer,
            message: '',
            selectedChat: myStore.getState().SelectChat
        }
        myStore.subscribe(() => {
            this.setState({ selectedChat: myStore.getState().SelectChat })
        })
    }
    sendChat = (e) => {
        myStore.subscribe(() => {
            this.setState({ chat: myStore.getState().chatReducer })
        })
        myStore.dispatch(send({ type: 'sender', msg: this.state.message }))
        this.setState({ message: ' ' })
    }
    changeMessage = (e) => {
        let message = e.target.value
        this.setState({ message: message })
    }
    displayChat(chat) {
        return (
            <div style={{ display: 'inline-block' }} key={chat.no}>
                <div className={chat.type + 'Chat'}>
                    {chat.type === 'reciever' ? <img src={this.state.selectedChat.img} alt='profile' className="rounded-circle" style={{ height: '4vh', width: '2vw' }}></img> : ''}
                    <span className={chat.type + 'chatBox'}>{chat.msg}</span>
                    {chat.type === 'sender' ? <img src={download} alt='profile' className="rounded-circle" style={{ height: '4vh', width: '2vw' }}></img> : ''}
                </div>
            </div>
        )
    }
    displayFullChat(chats) {
        const ele = chats.map((ele) => {
            return (this.displayChat(ele))
        })
        return ele;
    }
    render() {
        return (
            <div>
                <div className="card  chatCard">
                    {this.displayFullChat(this.state.chat)}

                </div>
                <div className="card">
                    <form className="form-inline ">
                        <Stack direction="row" spacing={1}>
                            <IconButton aria-label="attach" size="small">
                                <AttachFileSharpIcon fontSize="small" />
                            </IconButton>
                            <div className="form-group" style={{ width: '76%' }}>
                                <input type="text"
                                    placeholder="Type a message..."
                                    className="form-control"
                                    value={this.state.message}
                                    onChange={this.changeMessage}
                                />
                            </div>
                            <button type="button" onClick={this.sendChat} className="btn btn-primary" disabled={!this.state.message.length > 0}>Send <SendIcon /></button><br />

                        </Stack>
                    </form>
                </div>
            </div>
        )
    }
}
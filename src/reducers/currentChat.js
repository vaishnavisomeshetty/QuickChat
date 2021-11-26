const initialChatState = [
    { no : 1 , type : 'sender' , msg : 'Hi!'},
    { no : 2, type : 'sender' , msg : 'How can I help you ?'},
    { no : 3 , type : 'reciever' , msg : 'Hey ! Nic to meet you.'},
    { no : 4 , type : 'reciever' , msg : 'Hope you are doing fine.'},
    { no : 5 , type : 'sender' , msg : 'I am good, thanks for asking .'},
    { no : 6 , type : 'reciever' , msg : 'Have a great day !'},
    { no : 7 , type : 'sender' , msg : 'I am good, thanks for asking .'},
    { no : 8 , type : 'reciever' , msg : 'Have a great day !'},
]
const chatReducer = (initialState = initialChatState,action)=>{
        switch (action.type) {
            case 'SEND':
             const chat = {no:initialState.length+1,type:action.payload.type,msg:action.payload.msg}
             let newChat = [...initialState,chat]
               return newChat;
        
            default:
               return initialState;
        }
}

export default chatReducer;
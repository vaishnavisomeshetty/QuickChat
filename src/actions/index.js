export const send = (chat)=>{
    return {
        type : 'SEND',
        payload : chat
    }
}
export const selectChat = (chat)=>{
    return {
        type : 'SELECTCHAT',
        payload : chat
    }
}
const SelectChat = (intialState = null , action)=>{
    switch (action.type) {
        case 'SELECTCHAT':
            return action.payload;
        default:
           return intialState
    }
}

export default SelectChat
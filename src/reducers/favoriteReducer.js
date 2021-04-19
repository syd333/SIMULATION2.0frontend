export default (state= {favorites: []}, action ) => {
    switch(action.type){
        case "SET_FAVORITES":
            return action.payload
        default:
            return state;
    }
}
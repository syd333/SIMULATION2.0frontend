export default (state= {favorites: []}, action ) => {
    switch(action.type){
        case "LIKE_MISS":
            // console.log(action.payload)
            return {
                ...state,
                [action.miss.id]: true
            };
            case "UNLIKE_MISS":
            return {
                ...state,
                [action.miss.id]: false
            }
        default:
            return state;
    }
}

//favorites : {likes: boolean}??

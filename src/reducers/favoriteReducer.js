export default (state= {favorites: []} , action ) => {
    switch(action.type){
        case "GET_FAVORITES":
        return {...state, favorites: action.payload};
        case "LIKE_MISS":
            return {  ...state, favorites: [...state.favorites, action.payload]};
            case "UNLIKE_MISS":
            return {
                ...state,
                [action.miss.id]: false
            }
        default:
            return state;
    }
}

//favorites : {like: null}??
// ...state,
// if (miss.id ! == action.payload.id)
// return {...state, misses: state.misses.filter(miss => miss.id !== action.payload.id)}
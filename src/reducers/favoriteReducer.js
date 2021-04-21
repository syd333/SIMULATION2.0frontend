export default (state= {favorites: []} , action ) => {
    switch(action.type){
        case "GET_FAVORITES":
        return {...state, favorites: action.payload};
        case "LIKE_MISS":
            return { ...state, favorites: [...state.favorites, action.payload]};
            case "UNLIKE_MISS":
                console.log(state.favorites)
            return {...state, favorites: state.favorites.filter(favorite => favorite.id !== action.payload.id)}
        default:
            return state;
    }
}
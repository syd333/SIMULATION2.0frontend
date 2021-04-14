export default (state = {misses: [], selectedMis: {}}, action) => {
  switch (action.type) {
    case "FETCH_MISSES":
      return {...state, misses: action.payload};
      case 'SELECTED_MIS':
        return {...state, selectedMis: action.payload};
        case 'ADD_MISS':
          
    default:
      return state;
  }
};
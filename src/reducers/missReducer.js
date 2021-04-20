export default (state = { misses: [], selectedMis: {}, currentIndex: 0}, action) => {
  switch (action.type) {
    case "FETCH_MISSES":
      return { ...state, misses: action.payload };
    case "SELECTED_MIS":
      return { ...state, selectedMis: action.payload };
    case "ADD_MISS":
      return { ...state, misses: [action.payload, ...state.misses] };
    case 'DELETE_MISS':
      return {...state, misses: state.misses.filter(miss => miss.id !== action.payload.id)}
      case 'SLICE_MISS':
        console.log(state)
        return {...state, misses: state.misses.slice(state.currentIndex, state.currentIndex + 15)}
    default:
      return state;
  }
};

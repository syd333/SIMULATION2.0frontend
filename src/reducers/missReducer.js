export default (state = { misses: [], selectedMis: {} }, action) => {
  switch (action.type) {
    case "FETCH_MISSES":
      return { ...state, misses: action.payload };
    case "SELECTED_MIS":
      return { ...state, selectedMis: action.payload };
    case "ADD_MISS":
      return { ...state, misses: [...state.misses, action.payload] };
    case 'DELETE_MISS':
      console.log(state.misses)
      console.log(action.payload)
      return {...state, misses: state.misses.filter((miss => miss.id !== action.payload.id))}
    default:
      return state;
  }
};

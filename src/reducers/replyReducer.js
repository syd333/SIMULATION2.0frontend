export default (state = { replies: [] }, action) => {
    switch (action.type) {
        case "GET_REPLIES":
            return {...state, replies: action.payload}
      case "ADD_REPLY":
        return { ...state, replies: [action.payload, ...state.replies] };
      default:
        return state;
    }
  };
  
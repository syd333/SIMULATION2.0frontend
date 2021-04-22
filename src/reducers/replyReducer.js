export default (state = { replies: [] }, action) => {
    switch (action.type) {
      case "ADD_REPLY":
        return { ...state, replies: [action.payload, ...state.replies] };
      default:
        return state;
    }
  };
  
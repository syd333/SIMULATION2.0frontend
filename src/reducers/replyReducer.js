export default (state = { replies: [] }, action) => {
    switch (action.type) {
      case "ADD_REPLY":
        return { replies: [action.payload, ...state.replies], ...state };
      default:
        return state;
    }
  };
  
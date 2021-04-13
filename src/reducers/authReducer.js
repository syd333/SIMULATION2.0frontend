export default (state = { user: {} }, action) => {
  switch (action.type) {
    case "AUTH":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return { user: {} };
    default:
      return state;
  }
};

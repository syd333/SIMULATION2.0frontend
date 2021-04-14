export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_MISSES":
      return action.payload;
    default:
      return state;
  }
};

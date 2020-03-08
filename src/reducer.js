
const reducer = function(state = { count: 0 }, action) {
  const count = state.count;
  switch (action.type) {
    case 'add':
      return { count: count + 1 }
    case 'sub': 
      return { count: count - 1};
    default:
      return state
  }
}

export default reducer;
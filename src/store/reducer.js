const initialStore = {
  count: Number(0),
};

function reducer(state = initialStore, action) {
  switch (action.type) {
      case 'INCREASE_COUNTER':
        return state.count += 1;
      case 'DECREASE_COUNTER':
          return state.count -= 1;
      case 'RESET_COUNTER':
          return state.count = 0;
      default :
          break;
  }
}

export default reducer;

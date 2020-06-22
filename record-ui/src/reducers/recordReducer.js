const recordReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'CREATE':
      return [...state, action.data];
    case 'INIT_RECORDS':
      return action.data;
    default: return state;
  }
}

export default recordReducer
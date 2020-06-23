const recordReducer = (state = [], action) => {
  // console.log('state now: ', state)
  // console.log('action', action)
  switch(action.type) {
    case 'CREATE':
      console.log(action.data);
      return action.data;
    case 'INIT_RECORDS':
      console.log('action: ',action);
      return action.data;
    default: return state;
  }
}

export default recordReducer
const recordReducer = (state = [], action) => {
  switch(action.type) {
    case 'CREATE':
      return action.data.newRecords;
    case 'INIT_RECORDS':
      return action.data;
    default: return state;
    case 'DELETE_RECORD':
      return action.data.newRecords;
  }
}

export default recordReducer
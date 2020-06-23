import recordService from '../services/records';

export const initRecords = () => {
  return async dispatch => {
    const records = await recordService.getAll();
    console.log('from actions: ', records);
    dispatch({
      type: 'INIT_RECORDS',
      data: records
    })
  };
}

export const createRecord = (record) => {
  return async dispatch => {
    const newRecord = await recordService.createRecord(record);
    const newRecords = await recordService.getAll();
    dispatch({
      type: 'CREATE',
      data: {
        newRecord: newRecord,
        newRecords: newRecords
      }
    });
  };
}
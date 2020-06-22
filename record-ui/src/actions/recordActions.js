import recordsService from '../services/records';
import recordService from '../services/records';

export const initRecords = () => {
  return async dispatch => {
    const records = await recordService.getAll();
    dispatch({
      type: 'INIT_RECORDS',
      data: records
    })
  };
}

export const createRecord = (record) => {
  return async dispatch => {
    const newRecord = await recordService.createRecord(record);
    dispatch({
      type: 'CREATE',
      data: newRecord
    });
  };
}
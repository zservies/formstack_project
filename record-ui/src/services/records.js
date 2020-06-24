import axios from 'axios';

const getAll = async () => {
  const response = await axios.get('https://xk37wm9k7i.execute-api.us-east-2.amazonaws.com/dev/records');
  return response.data;
}

const createRecord = async (record) => {
  const createPayload = {albumName: record.albumName, artist: record.artist, id: record.id};
  const response = await axios.post('https://xk37wm9k7i.execute-api.us-east-2.amazonaws.com/dev/create', createPayload);
  return response.data;
}

const deleteRecord = async (id) => {
  const deletePayload = { 
    data: {
      id: id
  } 
};
  const response = await axios.delete('https://xk37wm9k7i.execute-api.us-east-2.amazonaws.com/dev/delete', deletePayload);
  return response.data;
}

export default {getAll, createRecord, deleteRecord}
import axios from 'axios';

const baseUrl = 'https://xk37wm9k7i.execute-api.us-east-2.amazonaws.com/dev/create';

export const getAll = async () => {
  const response = await axios.get('http://localhost:3001/records');
  return response.data;
}

export const createRecord = async (record) => {
  const createPayload = {albumName: record.albumName, artist: record.artist, id: record.id};
  const response = await axios.post('https://xk37wm9k7i.execute-api.us-east-2.amazonaws.com/dev/create', createPayload);
  return response.data;
}

export default {getAll, createRecord}
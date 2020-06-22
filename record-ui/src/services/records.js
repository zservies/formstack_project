import axios from 'axios';

const baseUrl = 'http://localhost:3001/records';

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
}

export const createRecord = async (record) => {
  const createPayload = {albumName: record.albumName, artist: record.artist};
  const response = await axios.post(baseUrl, createPayload);
  return response.data;
}

export default {getAll, createRecord}
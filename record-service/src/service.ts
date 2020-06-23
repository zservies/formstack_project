export default (io) => ({
  create: async data => {

    await io.db.put({
      PK: data.id,
      SK: data.albumName,
      artist: data.artist,
    })

    return 'HELLO: ' + data;
  },
  get: async () => {
    const record = await io.db.get();
    return 'goodbye -'+ JSON.stringify(record);
  }
})
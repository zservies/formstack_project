import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


export default function RecordList() {
  const dispatch = useDispatch();
  const records = useSelector(state=>state.records);
  console.log('state: ', records[0])
  return (
    <div>
      <h3>Albums</h3>
      {records.map(record =>
        <div key={record.id}>
          {record.albumName} by {record.artist}
        </div>
      )}
    </div>
  )
}

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteRecord } from "../actions/recordActions";

export default function RecordList(props) {
  const dispatch = useDispatch();
  let records = useSelector((state) => state.records.Items);

  const recordDelete = (recordToDelete) => {
    dispatch(deleteRecord(recordToDelete.id));
  };
  return (
    <div>
      <h3>Albums</h3>
      {records &&
        records.map((record) => (
          <div key={record.id}>
            {record.albumName} by {record.artist}
            <br></br>
            <button onClick={() => recordDelete(record)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function RecordList() {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.records.Items);
  console.log("state: ", records);
  return (
    <div>
      <h3>Albums</h3>
      {records && records.map((record) => (
        <div key={record.id}>
          {record.albumName} by {record.artist}
        </div>
      ))}
    </div>
  );
}

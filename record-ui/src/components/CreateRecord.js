import React from "react";
import { createRecord } from "../actions/recordActions";
import { useDispatch } from "react-redux";
import {v4 as uuid } from 'uuid';

export default function CreateRecord() {
  const dispatch = useDispatch();

  const addRecord = async (event) => {
    event.preventDefault()
    const albumDetails = {
      id: uuid(),
      albumName: event.target.albumName.value,
      artist: event.target.artist.value
    };
    event.target.albumName.value ='';
    event.target.artist.value ='';
    dispatch(createRecord(albumDetails));
  }
  return (
    <div>
    <h2>Create New Record</h2>
      <form onSubmit={addRecord}>
        <div>
          <input name= "albumName" placeholder="Album title" />
        </div>
        <div>
          <input name = "artist" placeholder="Artist/Band"></input>
        </div>
        <button type = "submit">Submit</button>
        <button type = "reset">Clear</button>
      </form>
    </div>
  );
}

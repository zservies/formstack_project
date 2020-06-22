import React, {useEffect} from 'react';
import './App.css';
import RecordList from './components/RecordList';
import CreateRecord from './components/CreateRecord';
import {useDispatch} from 'react-redux';
import { initRecords } from './actions/recordActions';

function App() {
  const dispatch = useDispatch();

  // Gets initial record list.
  useEffect(() => {
    dispatch(initRecords());
  }, [dispatch])
  return (
    <div className="App">
      <CreateRecord />
      <RecordList/>
    </div>
  );
}

export default App;

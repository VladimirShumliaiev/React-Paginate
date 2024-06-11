import React, {useEffect} from 'react';
import './App.css';
import TestList from "./componets/testList";
import {useAppDispatch} from "./hooks/hooks";
import {fetchTodo} from "./Redux/Slices/testSlice";

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchTodo())
    },[])
  return (
    <div className="App">
       <TestList/>
    </div>
  );
}

export default App;

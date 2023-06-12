import React, {useEffect, useState} from "react";
import './App.css';
import Users from "./Components/Users";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users').then
      (({data}) => setUsers(data))
  },[])
  return (
    <div className="App">
      <Users data={users}/>
    </div>
  );
}

export default App;

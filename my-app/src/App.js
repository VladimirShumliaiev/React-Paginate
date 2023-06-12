import React, {useState} from "react";
import './App.css';
import Users from "./Components/Users";
import GetUsers from "./Components/urls/GetUsers";

function App() {
    const [users, setUsers] = useState([])

    return (
        <div className="App">
            <GetUsers users={users} setUsers={setUsers}/>
            <Users data={users}/>
        </div>
    );
}

export default App;

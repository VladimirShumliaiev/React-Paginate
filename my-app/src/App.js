import React, {useState} from "react";
import './App.css';
import GetImages from "./Components/GetImages";
import Pagination from "./Components/Pagination";


function App() {
    const [image, setImage] = useState([])

    return (
        <div className="App">
            <GetImages setImage={setImage}/>
            <Pagination data={image}/>
        </div>
    );
}

export default App;

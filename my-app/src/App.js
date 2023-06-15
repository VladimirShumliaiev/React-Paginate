import React, {useState} from "react";
import './App.css';
import GetImages from "./Components/GetImages";
import Pagination from "./Components/Pagination";


function App() {
    const [images, setImages] = useState([])

    return (
        <div className="App">
            <GetImages setImages={setImages}/>
            <Pagination data={images}/>
        </div>
    );
}

export default App;

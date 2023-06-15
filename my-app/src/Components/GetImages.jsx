import React, {useEffect} from 'react';
import axios from "axios";

const GetImages = (props) => {
    const {setImages} = props
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then
        (({data}) => setImages(data))
    },[])
    return (
        <div>

        </div>
    );
};

export default GetImages;
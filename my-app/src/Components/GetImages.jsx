import React, {useEffect} from 'react';
import axios from "axios";

const GetImages = (props) => {
    const {image, setImage} = props
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then(({data}) => setImage(data))
    }, [image])
    return (
        <div>
            {/*{image.map(i => (*/}
            {/*    <div>*/}
            {/*        <div><img src={i.url} alt={i.title}/></div>*/}
            {/*    </div>*/}
            {/*    )*/}
            {/*)}*/}
        </div>
    );
};

export default GetImages;
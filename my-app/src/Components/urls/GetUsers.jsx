import React, {useEffect} from 'react';
import axios from "axios";


export const GetUsers = (props) => {
    const {users, setUsers} = props

    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then
    (({data}) => setUsers(data))
    },[users])

    return (
        <div>

        </div>
    );
};

export default GetUsers;
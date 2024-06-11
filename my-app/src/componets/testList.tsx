import React from 'react';
import {useAppSelector} from "../hooks/hooks";

const TestList = () => {
    const list = useAppSelector(state => state.todo.list)
    return (
        <div>
            {
                list.map(e => <div>{e.title}</div>)
            }
        </div>
    );
};

export default TestList;
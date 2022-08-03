import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./Components/Button";


type getType = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}

function App() {
    const [get, setGet] = useState<getType[]>([])
    const cleanRequestHandler = () => {
        setGet([])
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setGet(json))
    },[])

    return (
        <div className="App">
            <Button nickName={'CLEAN PAGE'} callback={() => cleanRequestHandler()}/>
            <p></p>
            <ul>
                {
                    get.map((el) => {
                        return (
                            <li key={el.id}>
                                <span>{el.id} - </span>
                                <span>{el.userId} - </span>
                                <span>{el.title}</span>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );
}

export default App;

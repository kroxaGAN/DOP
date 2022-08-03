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
type userType={
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}
type photosType={
    "albumId": number,
    "id": number,
    "title":string,
    "url": string,
    "thumbnailUrl": string
}

function App() {
    const [get, setGet] = useState<getType[]>([])
    const [users, setUsers] = useState<userType[]>([])
    const [photos, setPhotos] = useState<photosType[]>([])
    console.log(users)
    const cleanRequestHandler = () => {
        setGet([])
    }
    const usersRequestHandler=()=>{
        setGet([])
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }
    const photosRequestHandler = () => {
        setGet([])
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => setPhotos(json))
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setGet(json))
    },[])

    return (
        <div className="App">
            <Button nickName={'CLEAN PAGE'} callback={() => cleanRequestHandler()}/>
            <Button nickName={'Give users'} callback={() => usersRequestHandler()}/>
            <Button nickName={'Photos'} callback={() => photosRequestHandler()}/>
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
            <p></p>
            <ul>
                {
                    users.map((el) => {
                        return (
                            <li key={el.id}>
                                <span>{el.name} - </span>
                                <span>{el.company.name} - </span>
                                <span>{el.username}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <p></p>
            <ul>
                {
                    photos.map((el) => {
                        return (
                            <li key={el.id}>
                                <span>{el.title} - </span>
                                <img src={el.url} />
                                <span>{el.id} - </span>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );
}

export default App;

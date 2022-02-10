import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.scss'
import config from '../config/config'
import { Link, Route } from 'react-router-dom';


export default function Home() {
    const [datas, setDatas] = useState([])
    const [url, setUrl] = useState("")
    const token = JSON.parse(sessionStorage.getItem('token'))
    const apiURL = config.API_URL

    // useEffect(async() => {
    //     await axios.get("http://localhost:5201/geturl", { headers: { "token": `Bearer ${token}` } })
    //         .then((res) => {
    //             setDatas(res.data.urlData)
    //             // console.log("dataoi", res.data.urlData)

    //         })
    // }, [datas])
    useEffect(async () => {
        async function getUrls() {
            const res = await axios.get("https://shortu6l.herokuapp.com/geturl", { headers: { "token": `Bearer ${token}` } })
            setDatas(res.data.urlData)
        }
        getUrls();
    }, [])


    const generate = async (event) => {
        event.preventDefault();
        const data = { url };
        await axios.post('https://shortu6l.herokuapp.com/createurl', { longurl: url },
            { headers: { "token": `Bearer ${token}` } }).then((response) => {
                // console.log(response)
            })

    }


    return (
        <>
            <div className="home-container">
                <div className="home-body">
                    <div className="url-shortner">

                        <input className="url-input-data" type="text" placeholder='Place your url'
                            onChange={(event) => {
                                setUrl(event.target.value);
                            }}
                        />
                        <button className="btn btn-primary" onClick={generate}>Generate URL</button>

                    </div>
                    <div className="url_data">
                        {/* {datas.map((key,value) =>{
                            return(
                                <div>
                                    <div>{value.shorturl}</div><br/>
                                </div>
                            )
                        })} */}

                        {
                            datas && datas.map((value) => {
                                return (
                                    <>
                                        <div>
                                            <Link to={value.longurl}>
                                                <p>https://shorturl.com/{value.shorturl}</p>
                                            </Link>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

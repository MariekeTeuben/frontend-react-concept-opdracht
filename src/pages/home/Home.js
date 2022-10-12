import React, { useState } from "react";
import axios from 'axios';
import './Home.css';

function Home() {
    const [postData, setPostData] = useState([]);

    async function fetchData() {
        try {
            const result = await axios.get(`https://www.reddit.com/hot.json?limit=15`);
            console.log(result.data);
            setPostData(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <section>
                <h1>Homepagina</h1>
                <button type="button" onClick={fetchData}>Haal data op!</button>
                    {postData &&
                        <>
                            <h2>{postData.data.children[0].data.title}</h2>
                        </>
                    }
        </section>
    );
}

export default Home;
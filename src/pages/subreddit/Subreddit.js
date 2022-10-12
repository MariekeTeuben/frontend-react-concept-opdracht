import React from "react";
import './Subreddit.css';
import { useParams} from "react-router-dom";

function Subreddit() {
    const { subredditid } = useParams();

    return (
        <div>
            <h1>Dit is de Subreddit pagina</h1>
            <h2>Het gaat over {`${subredditid}`}</h2>
        </div>
    );
}

export default Subreddit;
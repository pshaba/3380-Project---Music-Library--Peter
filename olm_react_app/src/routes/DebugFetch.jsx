import React, { useEffect, UseState } from "react";
import axios from "axios";


const DebugFetch = () => {

    const [data, setData] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8080/persons");
            } catch (error) {
                console.error(error);
            }
        };
    }, []);


    return (
        <div className='debug-fetch'>
            <h1>Debug Add</h1>
        </div>
    );
}

export default DebugFetch;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MainUserLocation = () => {
    const [data, setData] = useState({ hits: [] });


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://api.ipstack.com/check?access_key=80f7f3e7606c85653344b0790e5049ac', // todo 1 add process.env
            );
            setData(result.data);
        };

        fetchData();
    }, []);
    console.warn(data)

    return (
        <ul>
            {/* <pre>{JSON.stringify(data)}</pre> */}
            user IP {data.ip} with it’s location on the map latitude{data.latitude} longitude {data.longitude}
        </ul>
    );
}

export default MainUserLocation;
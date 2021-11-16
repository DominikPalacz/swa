import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MainUserLocation = () => {
    const [data, setData] = useState({ location: [] });


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://api.ipstack.com/check?access_key=7fa2193ba019c76b47fa1a874b0f5ace', // todo 1 add process.env
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
import React from 'react';
// import axios from 'axios';

const MainUserLocation = (data) => {
    // const [data, setData] = useState({ location: [] });

    // //** [Required] Any IPv4 or IPv6 address; you can also enter a domain URL to have ipstack resolve the domain to the underlying IP address. */
    //     useEffect(() => {
    //         const fetchData = async () => {
    //             const result = await axios(
    //                 'http://api.ipstack.com/check?access_key=7fa2193ba019c76b47fa1a874b0f5ace', // todo 1 add process.env 
    //             );
    //             setData(result.data);
    //         };

    //         fetchData();
    //     }, []);
 

    return (
        <ul>
            <pre>{JSON.stringify(data)}</pre>
            user IP {data.ip} with it’s location on the map latitude{data.latitude} longitude {data.longitude}
        </ul>
    );
}

export default MainUserLocation;
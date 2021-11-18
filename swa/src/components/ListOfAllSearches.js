import React from 'react';

const ListOdAllSearches = (list) => {
    const greeting = list ? list : ['No history'];
    const listItems = greeting.list.map((item) =>
        <p>{JSON.stringify(item.ip)}</p>
    )

    return (<>
        {listItems}
    </>
    )
};


export default ListOdAllSearches;
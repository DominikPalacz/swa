import React from 'react';

const ListOdAllSearches = (list) => {
    const greeting = list ? list : ['No history'];
    const listItems = greeting.list.map((item) =>
        <p><pre>{JSON.stringify(item)}</pre></p>
    )
    return (<>
        {/* <pre>{JSON.stringify(greeting.list)}</pre> */}
        {listItems}
    </>
    )
};


export default ListOdAllSearches;
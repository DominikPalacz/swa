import React from "react";

const ListOdAllSearches = (list) => {
  const greeting = list ? list : ["No history"];
  const listItems = greeting.list.map((item, index) => (
    <>
      <p key={item.ip + index}>{JSON.stringify(item.ip)}</p>
    </>
  ));

  return <>{listItems}</>;
};

export default ListOdAllSearches;

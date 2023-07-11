// import { MouseEvent } from "react";
import { useState } from "react";

function ListGroup() {
  let items = ["Hello", "this is the 2nd line", "this is 3rd"];
  //   let selectedIndex = -1;

  //(State) Hook; tells that our vaiable would change with time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   items = [];

  //   const message = items.length == 0 ? <p>No item found</p> : null;

  //   const getMsg = () => {
  //     items.length == 0 ? <p>No item found</p> : null;
  //   };
  // Event handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length == 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

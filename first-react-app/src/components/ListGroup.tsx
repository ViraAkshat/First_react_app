import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Hello", "this is the 2nd line", "this is 3rd"];
  //   items = [];

  //   const message = items.length == 0 ? <p>No item found</p> : null;

  //   const getMsg = () => {
  //     items.length == 0 ? <p>No item found</p> : null;
  //   };
  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length == 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

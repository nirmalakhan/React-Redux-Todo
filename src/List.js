import React from "react";

export default React.memo(function List({ data, onTodoClick, onDelete }) {
  console.log("Child");

  return (
    <div>
      {data.map((itm, ind) => (
        <>
          <li
            key={ind + 1}
            onClick={() => onTodoClick(itm.id)}
            style={
              itm.isDone
                ? { textDecoration: "line-through", color: "green" }
                : itm.isDeleted
                ? { textDecoration: "line-through", color: "red" }
                : {}
            }
          >
            {itm.title}
          </li>
          <button onClick={() => onDelete(itm.id)}>delete</button>
        </>
      ))}
    </div>
  );
});

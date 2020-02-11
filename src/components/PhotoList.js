import React from "react";

const PhotoList = props => {
  const photo = props.list.map(todo => (
    <div key={todo.id}>
      {/* <img src={photo.url} alt={photo.id} /> */}
      {todo.title}
      <button onClick={() => props.del(todo.id)}>delete</button>
    </div>
  ));

  return (
    <div>
      <h1>Todos Galery</h1>
      {photo}
    </div>
  );
};
export default PhotoList;

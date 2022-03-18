import React from "react";

export default function Cast({ name, pic }) {
  const unavailable =
    "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";
  return (
    <>
      <div className='cast_container'>
        <img
          className='cast_img'
          src={pic ? `https://image.tmdb.org/t/p/w200${pic}` : unavailable}
          alt={name}
        />
        <h4>{name}</h4>
      </div>
    </>
  );
}

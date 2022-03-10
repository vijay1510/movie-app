import React from "react";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";

function SingleMovie({ title, rating, date }) {
  return (
    <div className='outline'>
      <div className='container'>
        <span className='rating'>{rating}</span>
        <img
          src='https://image.tmdb.org/t/p/w200/74xTEgt7R36Fpooo50r9T25onhq.jpg'
          alt='bat'
        />
        <h4>{title}</h4>
        <div className='subtext'>
          <p>
            {date}
            <span>
              <FavoriteBorderSharpIcon />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleMovie;

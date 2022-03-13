import React from "react";
import { Link } from "react-router-dom";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";

function SingleMovie({ title, rating, date, poster, id }) {
  return (
    <>
      <div className='outline'>
        <div className='container'>
          <span className='rating'>{rating.toFixed(1)}</span>
          <img
            src={
              poster
                ? `https://image.tmdb.org/t/p/w200${poster}`
                : "../Image/poster-holder.jpg"
            }
            alt={title}
          />
          <Link className='link' to={`/movie/${id}`}>
            <h4>{title}</h4>
          </Link>
          <div className='subtext'>
            <p>
              {date}
              <span className='favicon'>
                <FavoriteSharpIcon onClick={() => alert(title)} />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleMovie;

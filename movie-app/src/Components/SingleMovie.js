import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import { addToFavourite } from "../Redux/Action";
import { movieDetails } from "../Redux/Action";

function SingleMovie({ title, rating, date, poster, id }) {
  const favourite = useSelector((state) => state.favourites);
  const colour = favourite && favourite.find((e) => e.id === id);
  const dispatch = useDispatch();
  return (
    <>
      <div className='outline'>
        <div className='container'>
          <span className='rating'>{rating.toFixed(1)}</span>
          <img
            className={!poster ? "outline_img" : ""}
            src={
              poster
                ? `https://image.tmdb.org/t/p/w200${poster}`
                : "https://www.movienewz.com/img/films/poster-holder.jpg"
            }
            alt={title}
          />
          <Link className='link' to={`/movie/${id}`}>
            <h4 onClick={() => dispatch(movieDetails(id))}>{title}</h4>
          </Link>
          <div className='subtext'>
            <p>
              {date}
              <span className='favicon'>
                <FavoriteSharpIcon
                  style={{ color: colour ? "red" : "white" }}
                  onClick={(e) => dispatch(addToFavourite(id))}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleMovie;

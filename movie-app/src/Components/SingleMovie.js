import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function SingleMovie({ title }) {
  return (
    <div className='outline'>
      <div className='container'>
        <img
          src='https://image.tmdb.org/t/p/w200/74xTEgt7R36Fpooo50r9T25onhq.jpg'
          alt='bat'
        />
        <h4>{title}</h4>
        <div className='subtext'>
          <p>movie</p>
          <p>03-09-2022</p>
        </div>
        <span>90</span>
        <div class='rating'>
          <CircularProgress
            variant='determinate'
            value={100}
            size='30px'
            color='success'
          />
        </div>
      </div>
    </div>
  );
}

export default SingleMovie;

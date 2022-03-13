import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to='/' className='header'>
        THE-MOVIE-HUB
      </Link>
    </div>
  );
}

export default Header;

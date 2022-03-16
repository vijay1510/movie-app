import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to='/' className='header'>
        <span onClick={() => window.scroll(0, 0)}>THE-MOVIE-HUB</span>
      </Link>
    </div>
  );
}

export default Header;

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

export default function Footer() {
  const [value, setValue] = React.useState();
  const history = useHistory();
  const results = useSelector((state) => state.favourites);

  useEffect(() => {
    if (value === 0) {
      history.push("/movies");
      setValue();
    }
    if (value === 1) {
      history.push("/tv-series");
      setValue();
    }
    if (value === 2) {
      history.push("/Favorites");
      setValue();
    }
    if (value === 3) {
      history.push("/search");
      setValue();
    }
  }, [value, history]);

  return (
    <div className='footer'>
      <Box sx={{ width: "100%" }}>
        <BottomNavigation
          sx={{ backgroundColor: "#01579B" }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction
            sx={{ color: "#B5E0FF" }}
            label='Movies'
            icon={<MovieIcon />}
          />

          <BottomNavigationAction
            sx={{ color: "#B5E0FF" }}
            label='TV-Series'
            icon={<TvIcon />}
          />

          <BottomNavigationAction
            sx={{ color: "#B5E0FF" }}
            label='Favorites'
            icon={
              <Badge badgeContent={results.length} color='success'>
                <FavoriteIcon />
              </Badge>
            }
          />
          <BottomNavigationAction
            sx={{ color: "#B5E0FF" }}
            label='Search'
            icon={<SearchIcon />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function SingleMovie() {
  return (
    <div className='single-movie'>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='300'
            image='https://image.tmdb.org/t/p/w300/74xTEgt7R36Fpooo50r9T25onhq.jpg'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default SingleMovie;

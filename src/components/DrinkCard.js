import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar'; --> if we add users 
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert'; --> more button in top right-hand corner of card

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

function DrinkCard() {
  const [expanded, setExpanded] = useState(false);

  return (
      <Card sx={{ maxWidth: 345 }}>
          <CardHeader 
            title="Drink Name"
            subheader="Do we need this subheader?"
          />
          <CardMedia 
            component="img"
            height="194"
            image="https://images.unsplash.com/photo-1516486392848-8b67ef89f113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGNvZmZlZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="coffee image"
          />
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Ingredients
                    Instructions
                </Typography>
            </CardContent>
          </Collapse>
          <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={() => setExpanded(!expanded)}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
          </CardActions>

      </Card>
  )
}

export default DrinkCard;
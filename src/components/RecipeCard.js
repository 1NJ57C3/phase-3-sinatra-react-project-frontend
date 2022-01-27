import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Icon from '@mui/material/Icon';
// import Avatar from '@mui/material/Avatar'; --> if we add users 

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

function RecipeCard({ recipe }) {
  const [expanded, setExpanded] = useState(false);

  const { name, image, ingredients, instructions, prep_type, is_heated, prep_time, measurements, source } = recipe;

  console.log('Instructions: ', {instructions})
  console.log('Ingredients: ', {ingredients})

  const instructStr = instructions.map(i => <span>{i} </span>)


  // const ingredsArr = ingredients.ingredients.filter(i => i.is_garnish !== true).map(n => n.name)
  // console.log('ingredsArr: ', {ingredsArr})

  // const ingreds = ingredsArr.map(i => <span>• {i} <br/></span>)

  // const garnish = ingredients.filter(i => i.is_garnish == true).map(n => n.name)


  return (
      <Card sx={{ maxWidth: 345 }}>
          <CardHeader 
            title={name}
            subheader=""
            // {`Prep Type: ${prep_type}`}
          />
          <CardMedia 
            component="img"
            height="194"
            image="https://images.unsplash.com/photo-1516486392848-8b67ef89f113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGNvZmZlZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="coffee image"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Prep time: {prep_time}
            </Typography>
          </CardContent>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph variant="body2">
                  <h4>Ingredients</h4>
                  {/* {ingreds} */}
                  <br/>
                  <h4>Garnish</h4>
                  <br/>
                  {/* • {garnish} */}
                </Typography>
                <Typography paragraph variant="body2">
                  <h4>Instructions</h4>
                  {instructStr}
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

export default RecipeCard;
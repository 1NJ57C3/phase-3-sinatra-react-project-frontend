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
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })
  (({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

function RecipeCard({ recipe, onDeleteClick }) {
  const [expanded, setExpanded] = useState(false);

  const { id, name, image, ingredients, instructions, prep_time, prep_type, source } = recipe;

  const instructStr = instructions.map((i, idx) => <li key={idx}>{i}</li>)
  const filterIngreds = ingredients.filter(i => i.is_garnish !== true)

  const ingreds = filterIngreds.map((i, idx) => <span key={idx}>• {i.measurements} {i.name} {filterIngreds.length - 1 !== idx ? <br /> : null}</span>)

  const filterGarnish = ingredients.filter(i => i.is_garnish === true)

  const garnish = filterGarnish.map((n, i) => <span key={i}>{n.measurements} {n.name}<br/></span>)

  function handleDeleteClick(e, card) {
    onDeleteClick(card)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader 
        title={name}
        subheader={prep_type !== "espresso" ? prep_type+"-ground coffee" : prep_type}
      />
        {/* {!!is_heated ? "Hot" : "Cold"} */}
      <CardMedia 
        height={450}
        component="img"
        image={!!image ? image : "https://images.unsplash.com/photo-1516486392848-8b67ef89f113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGNvZmZlZXxlbnwwfHwwfHw%3D&w=1000&q=80"}
        alt="coffee image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Prep time: {prep_time}
        </Typography>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <h4>Ingredients</h4>
          <Typography paragraph variant="body2">
            {ingreds}
          </Typography>
          <h4>Garnish</h4>
          <Typography paragraph variant="body2">
            {garnish}
          </Typography>
          <h4>Instructions</h4>
          <Typography paragraph variant="body2" style={{textAlign: 'left'}}>
            {instructStr}
          </Typography>
          <h4>Credits</h4>
          <Typography>
            {source ? <a href={source}>Source</a> : `Submitted by \${user.name}`}
            {/* // TODO remove escape from USERNAME once faux Auth is set up */}
          </Typography>
        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton 
          aria-label="add to favorites" 
          id={id}
          onClick={(e) => handleDeleteClick(e, id)}
        >
          <DeleteSharpIcon />
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
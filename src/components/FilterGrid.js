import React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FadeIn from 'react-fade-in';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  backgroundColor: '#6e5a4b',
}));

function FilterGrid() {


    return (
        <div className="filter-img">
            <div className="filter-overlay">
                <div id="filter-grid">
                    <FadeIn delay="1000" transitionDuration="3000">
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={5}>
                            </Grid>
                        </Box>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}

export default FilterGrid;
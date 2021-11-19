import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Collapse } from '@mui/material';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton  { ...other }/>;
})(({ theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const BeerCard = () => {
    const [ expanded, setExpanded ] = useState(false);

    const handleExpanded = () => {
        setExpanded(!expanded);
    }
    return (
        <Card sx={{ maxWidth: 450 }}>
            <CardHeader>
                Beer_Name
            </CardHeader>
            <CardMedia component="img" height="180" alt="Beer" />
            <CardContent>
                <Typography>
                    Beer Description
                </Typography>
            </CardContent>
            <CardActions>
                <ExpandMore expand={expanded} onClick={handleExpanded} aria-expanded={expanded} aria-label="Show more">
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography>
                        Words
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default BeerCard

import React from 'react'
import { Container, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import BeerPic  from '../assets/beers.jpg';

const Home = () => {
    return (
        <Container maxWidth="md" sx={{ pt:2, alignContent: 'center' }}>
            <Paper sx={{ justifyContent: 'center' }}>
                <Box
                    sx={{ 
                        width:'auto', 
                        height:'auto', 
                        backgroundColor:'primary.dark', 
                        p: 2, 
                        alignItems: 'center' 
                    }}>
                    <Typography variant="h3"> Welcome to the Beers Tables</Typography>
                    <Box sx={{ alignItems: 'center' }}>
                        <img src={BeerPic} style={{ width: 500, height: 600 }} />
                    </Box>
                </Box>
            </Paper>
        </Container>
    )
}

export default Home

import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import NotFoundImg from '../../assets/Not_Found.jpg'
const PageNotFound = () => {
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
                <Typography variant="h3">Error Page Not Found</Typography>
                <Box sx={{ alignItems: 'center' }}>
                    <img src={NotFoundImg} alt="Page 404"  style={{ width: 500, height: 600 }} />
                </Box>
            </Box>
        </Paper>
    </Container>
    )
}

export default PageNotFound

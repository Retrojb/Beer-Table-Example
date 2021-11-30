import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { Box } from '@mui/system';

const Profile = () => {

    const user = useSelector((state) => state.user.value);
console.log(user)
    return (
       
            <Box sx={{ m:1, p:2 }}>
                <Paper sx={{ p: 2}}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant="h2"> Profile Page </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h6"> Name: {user.name}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h6"> Age: {user.age}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h6"> Email: {user.email}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
       
    )
}

export default Profile

import React from 'react'
import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Box } from '@mui/system'
import { login } from '../../store/reducers/user'
const Login = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <Box sx={{ m:2, p:2 }} component="form">
                <Paper sx={{ pl: 5 , pb: 2}}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <Typography variant="h2">Login</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="body1">Email: </Typography>
                            <TextField required id="email-field" label="email" />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="body1">Password: </Typography>
                            <TextField required id="password-field" label="password" />
                        </Grid>
                        <Grid item xs={8}>
                            <Button variant="contained" onClick={() => dispatch(login())}>Login</Button>
                        </Grid>
                    </Grid>

                </Paper>
            </Box>
        </div>
    )
}

export default Login

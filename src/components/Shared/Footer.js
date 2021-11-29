import React from 'react';
import { Container, Grid, Link } from '@mui/material';
import { Box } from '@mui/system';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import HomeIcon from '@mui/icons-material/Home';

const Footer = () => {
    return (
    <footer>
        <Box px={{ xs: 3, sm:10}} py={{ xs: 5, sm:10}} component="div" bgcolor="#BEBEBE" border="solid blue 1px">
        <Container maxWidth="lg">
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1} pb={{ xs: 1, sm: 2 }}>Navigation</Box>
                    <Box pt={{ xs: 1, sm: 2 }} pb={{ xs: 1, sm: 2 }}>
                        <Link href="/app/home" color="inherit">
                            <HomeIcon />
                            Home
                        </Link>
                    </Box>
                    <Box pb={{ xs: 1, sm: 2 }}>
                        <Link href="/app/home" color="inherit">
                            <HomeIcon />
                            Home
                        </Link>
                    </Box>
                    <Box pb={{ xs: 1, sm: 2 }}>
                        <Link href="/app/home" color="inherit">
                            <HomeIcon />
                            Home
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1} pb={{ xs: 1, sm: 2 }}>Tables</Box>
                    <Box pt={{ xs: 1, sm: 2 }} pb={{ xs: 1, sm: 2 }}>
                            <Link href="/app/home" color="inherit">
                                <HomeIcon />
                                Home
                            </Link>
                        </Box>
                        <Box pb={{ xs: 1, sm: 2 }}>
                            <Link href="/app/home" color="inherit">
                                <HomeIcon />
                                Home
                            </Link>
                        </Box>
                        <Box pb={{ xs: 1, sm: 2 }}>
                            <Link href="/app/home" color="inherit">
                                <HomeIcon />
                                Home
                            </Link>
                        </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1} pb={{ xs: 1, sm: 2 }}>About Us</Box>
                        <Box pt={{ xs: 1, sm: 2 }} pb={{ xs: 1, sm: 2 }} sx={{ justifyContent: 'center'}}>
                            <Link href="https://github.com/Retrojb" target="_blank" color="inherit">
                                <GitHubIcon />
                                Github
                            </Link>
                        </Box>
                        <Box pb={{ xs: 1, sm: 2 }}>
                            <Link href="http://retrojb.surge.sh/" target="_blank" color="inherit">
                                <FireplaceIcon />
                                Personal Portfolio
                            </Link>
                        </Box>
                        <Box pb={{ xs: 1, sm: 2 }}>
                            <Link href="https://www.linkedin.com/in/john-baltes/" target="_blank" color="inherit" >
                                <LinkedInIcon />
                                LinkedIn
                            </Link>
                        </Box>
                </Grid>
                
            </Grid>
            <Box textAlign="center" pt={{ xs: 3, sm: 7}} pb={{ xs: 3, sm: 0}}>
                Built with @MUI v5 {new Date().getFullYear()}
            </Box>
        </Container>
        </Box>
        </footer>
    )
}

export default Footer

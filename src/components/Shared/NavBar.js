import React, { useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

/*
* @TODO:
    add Navigation
    make name a redirect to home
 */
const NavBar = () => {
    
    const [ anchorEl, setAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleMenuClosed = ( ) => {
        setAnchorEl(null);
    }

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            id="nav-bar-menu"
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            open={isMenuOpen}
            onClose={handleMenuClosed}
        >
            <MenuItem onClick={handleMenuClosed}>Home</MenuItem>
            <MenuItem onClick={handleMenuClosed}>Beer Table</MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1}} >
            <AppBar position="static">
                <Toolbar>
                    <MenuItem onClick={handleOpenMenu}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open menu"
                            sx={{ mr: 2}}
                        >
                            <MenuIcon />
                        </IconButton>
                    </MenuItem>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography 
                        variant="h6" 
                        noWrap 
                        component="div" 
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        John's World of Beer
                    </Typography>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    )
}

export default NavBar

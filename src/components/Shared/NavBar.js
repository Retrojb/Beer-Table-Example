import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { Divider, List, Paper, ListItem, Stack, MenuList, Popper, Grow, Button } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const useStyle = makeStyles((theme) => {
    return {
        root: {
            display: 'flex',
            
        },
        appbar: {
            width: `calc(100%)`, 
            position: 'static',
            marginBottom: '1rem',  
        },
        menu: {
            padding: '1rem',
            width: 'auto',
            alignContent: 'flex-start'
        }
    }
})
const NavBar = () => {
    
    const [ anchorEl, setAnchorEl] = useState(null);

    const classes = useStyle();
    const isMenuOpen = Boolean(anchorEl);

    const handleMenuClosed = ( ) => {
        setAnchorEl(null);
    }

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const onAppTitleClick= () => {
        window.location.pathname='/app/home'
    }

    const renderMenu = (
        <Stack direction="row" spacing={2} className={classes.root}>
            <Paper>
                <Popper 
                    open={isMenuOpen}
                    anchorEl={anchorEl}
                    placement="bottom-start"
                    transition
                >
                    {({ TransitionProps, placement }) =>
                        <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom' }}>
                            <Paper className={classes.menu}>
                                <ClickAwayListener onClickAway={handleMenuClosed}>
                                    <MenuList
                                        
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                        id="nav-bar-menu"
                                        keepMounted
                                        transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                        onClose={handleMenuClosed}
                                        className={classes.menu}
                                    >
                                        <Typography variant="h5">Pages </Typography>
                                        <List component="nav">
                                            <Divider />
                                                <ListItem onClick={handleMenuClosed}>
                                                    <Link to="/app/home">Home</Link>
                                                </ListItem>
                                            <Divider />
                                                <MenuItem onClick={handleMenuClosed}>
                                                    <Link to="/app/tables">Data Tables</Link>
                                                </MenuItem>
                                            <Divider />
                                                <MenuItem onClick={handleMenuClosed}>
                                                    <Link to="/app/beer-datagrid">Data Grid</Link>
                                                </MenuItem>
                                        </List>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper> 
                        </Grow>
                    
                    }
                </Popper>
                
            </Paper>
        </Stack>
        
    );

    return (
        <Box sx={{ flexGrow: 1}} >
            <AppBar className={classes.appbar}>
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
                    <Button 
                        variant="contained" 
                        disableElevation 
                        startIcon={<SportsBarIcon />} 
                        onClick={onAppTitleClick}
                    >
                        John's World of Beer
                    </Button>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    )
}

export default NavBar

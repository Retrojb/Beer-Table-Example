import React, { useState } from 'react'
import { Checkbox, Dialog, Fade, FormControlLabel, FormGroup } from '@mui/material'
import { Paper } from '@mui/material'
import { Button, Popper, Typography } from '@material-ui/core';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import zIndex from '@material-ui/core/styles/zIndex';
const TableFilter = () => {

    const [ anchorEl, setAnchorEl ] = useState();
    const [ open, setOpen ] = useState(false);
    const [ isChecked, setIsChecked ] = useState(false);
    const [ placement, setPlacement ] = useState();
    const [ hasDryHops, setHasDryHops ] = useState();

    const handleFilterClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== 'bottom-start' || !prev);
        setPlacement('bottom-start');
    }

    const handleClickAway = () => {
        setOpen(false);
    }

    const toggleFilterButtonArrowDirection = () => {
        return open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />
    }

    const handleCheckedChange = (name) => (event) => {
        console.log('Handle Check event', event)
        console.log('The State', name);
        setIsChecked({ [name]: event.target.value });
    }
    return (
        <div>
            <Button onClick={handleFilterClick} variant="outlined">
                <FilterListIcon />
                <span>Filters</span>
                {toggleFilterButtonArrowDirection()}
            </Button>
            <Dialog open={open} style={{ zIndex: 0 }}>
                <Popper
                    open={open}
                    anchorEl={anchorEl}
                    placement={placement}
                    transition
                >    
                {({ TransitionProps }) => (
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <div>
                                    <Typography>Filters</Typography>
                                </div>
                                <FormGroup>
                                    <div>
                                        <FormControlLabel 
                                            control={
                                                <Checkbox
                                                    isChecked={hasDryHops}
                                                    onChange={handleCheckedChange("hasDryHops")}
                                                    value="hasDryHops"
                                                />
                                            } 
                                            label="Dry Hops"
                                        />
                                    </div>
                                    <div>
                                        <FormControlLabel 
                                            control={
                                                <Checkbox />
                                            } 
                                            label="Contains Lactose"
                                        />
                                    </div>
                                </FormGroup>
                            </Paper>
                        </Fade>
                    </ClickAwayListener>
                )}               
                </Popper>
            </Dialog>
        </div>
    )
}

export default TableFilter

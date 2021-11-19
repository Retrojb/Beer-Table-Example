import React, { useState } from 'react'
import { Checkbox, Dialog, Fade, FormControlLabel, FormGroup } from '@mui/material'
import { Paper } from '@mui/material'
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ClickAwayListener from '@mui/base/ClickAwayListener';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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
        <>
            <Button onClick={handleFilterClick} variant="contained">
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
        </>
    )
}

export default TableFilter

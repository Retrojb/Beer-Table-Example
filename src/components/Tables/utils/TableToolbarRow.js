import { styled } from '@mui/system'
import React from 'react'
import TableFilter from './TableFilter'
import TableSearch from './TableSearch'

const StyledToolbarContainer = styled('div')`
    display: flex;
    border: black solid 1px;
    algin-items: center;
    justify-content: end;
    padding-right: 1rem;
`
const TableToolbarRow = () => {
    return (
        <StyledToolbarContainer>
            <TableSearch />
            <TableFilter />
        </StyledToolbarContainer>
    )
}

export default TableToolbarRow

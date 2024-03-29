import React from 'react'
import { Chip } from '@mui/material'
import { StyledChip } from './styled'

export const MuiChip = ({
    variant = 'outlined',
    label,
}) => (
    <StyledChip>
        <Chip
            label={label}
            variant={variant}
        />
    </StyledChip>
)

export default MuiChip
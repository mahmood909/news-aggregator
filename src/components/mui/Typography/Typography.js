import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography = ({
    varint = 'body2',
    text,
}) => (
    <Typography
        variant={varint}
    >
        {text}
    </Typography>
)
import React from 'react'
import _ from 'lodash'
import { FormControl, TextField } from '@mui/material'

export const MuiTextField = ({
    id,
    label,
    type,
    value,
    onChange,
    ...others
}) => (
    <FormControl sx={{ m: 1, minWidth: 220 }}>
        <TextField
            variant='outlined'
            id={id}
            label={label}
            type={type}
            value={value}
            onChange={(e) => onChange(e, id)}
            { ...others }
        />
    </FormControl>
)

export default MuiTextField
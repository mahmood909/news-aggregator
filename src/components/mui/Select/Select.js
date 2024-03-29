import React from 'react'
import _ from 'lodash'
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material'

export const MuiSelect = ({
    id,
    label,
    value,
    onChange,
    items,
    ...others
}) => (
    <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id={`${id}-label`}>{label}</InputLabel>
        <Select
            labelId={`${id}-label`}
            id={id}
            value={value}
            label={label}
            onChange={(e) => onChange(e, id)}
            { ...others }
        >
            <MenuItem value=''>---Choose Data Source---</MenuItem>
            { items.map(({ key, value }) => (
                <MenuItem key={key} value={key}>{value}</MenuItem>
            ))}
        </Select>
    </FormControl>
)

export default MuiSelect
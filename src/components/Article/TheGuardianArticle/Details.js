import React from 'react'
import { FormControlLabel } from '@mui/material'
import { MuiTypography, MuiChip, MuiLink, MuiSwitch } from '../../mui'

export const Details = ({
    article: {
        isHosted,
        pillarName,
        sectionName,
        webPublicationDate,
        webUrl
    }
}) => (
    <>
        <MuiTypography text={'Hosted'} varint={'h6'} />
        <FormControlLabel
            control={<MuiSwitch checked={isHosted}/>}
        />
        <MuiTypography text={'Source'} varint={'h6'} />
        <MuiChip label={pillarName} />
        <MuiTypography text={'Section'} varint={'h6'} />
        <MuiTypography text={sectionName} varint={'body2'} />
        <MuiTypography text={'Published Date'} varint={'h6'} />
        <MuiTypography text={new Date(webPublicationDate).toLocaleDateString()} varint={'body2'} />
        <MuiTypography text={'URL'} varint={'h6'} />
        <MuiLink href={webUrl} linkText={webUrl} />
    </>
)
import React from 'react'
import { MuiTypography } from '../../mui'

export const Summary = ({
    article: { title }
}) => (
    <MuiTypography
        text={title}
        varint={'h5'}
    />
)
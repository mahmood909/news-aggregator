import React from 'react'
import { MuiTypography } from '../../mui'

export const Summary = ({
    article: { webTitle }
}) => (
    <MuiTypography
        text={webTitle}
        varint={'h5'}
    />
)
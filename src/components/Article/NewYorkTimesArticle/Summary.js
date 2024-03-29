import React from 'react'
import { MuiTypography } from '../../mui'

export const Summary = ({
    article: { headline: { main, print_headline } }
}) => (
    <MuiTypography
        text={print_headline || main}
        varint={'h5'}
    />
)
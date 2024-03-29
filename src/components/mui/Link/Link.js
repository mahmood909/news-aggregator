import React from 'react'
import { Link } from '@mui/material'
import { StyledLink } from './styled'

export const MuiLink = ({
    underline = 'hover',
    href,
    linkText
}) => (
    <StyledLink>
        <Link
            underline={underline}
            href={href}
            target={'_blank'}
        >
            {linkText}
        </Link>
    </StyledLink>
)
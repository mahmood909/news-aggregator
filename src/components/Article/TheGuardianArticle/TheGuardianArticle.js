import React from 'react'
import { MuiAccordion } from '../../mui'
import { Summary } from './Summary' 
import { Details } from './Details'

export const TheGuardianArticle = (props) => (
    <>
        <MuiAccordion
            Summary={Summary}
            Details={Details}
            { ...props }
        />
    </>
)

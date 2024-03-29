import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { StyledAccordion } from './styled'

export const MuiAccordion = ({
    Summary,
    Details,
    ...others
}) => (
    <StyledAccordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Summary { ...others } />
            </AccordionSummary>
            <AccordionDetails>
                <Details { ...others } />
            </AccordionDetails>
        </Accordion>
    </StyledAccordion>
)

export default MuiAccordion
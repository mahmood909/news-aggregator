import React from 'react'
import _ from 'lodash'
import { MuiTypography, MuiChip, MuiLink } from '../../mui'

export const Details = ({
    article: {
        abstract,
        byline: { person },
        keywords,
        lead_paragraph,
        news_desk,
        pub_date,
        section_name,
        snippet,
        source,
        web_url,
    },
    filters,
}) => {
    let authors = person
    let categories = keywords

    if (filters.author) {
        authors = person.filter(({ firstname, lastname }) => [firstname, lastname].join(' ') ===  filters.author)
    }
    if (filters.category) {
        categories = keywords.filter(({ value }) => value ===  filters.category)
    }

    return (
        <>
            <MuiTypography text={'Abstract'} varint={'h6'} />
            <MuiTypography text={abstract} varint={'body2'} />
            <MuiTypography text={'Author(s)'} varint={'h6'} />
            {authors.map(({ firstname, lastname }) => (
                <MuiChip label={[firstname, lastname].join(' ')} />
            ))}
            <MuiTypography text={'News Desk'} varint={'h6'} />
            <MuiChip label={news_desk} />
            <MuiTypography text={'Source'} varint={'h6'} />
            <MuiChip label={source} />
            <MuiTypography text={'Category(s)'} varint={'h6'} />
            {categories.map(({ value }) => (
                <MuiChip label={value} />
            ))}
            <MuiTypography text={'Section'} varint={'h6'} />
            <MuiChip label={section_name} />
            <MuiTypography text={'Snippet'} varint={'h6'} />
            <MuiTypography text={snippet} varint={'body2'} />
            <MuiTypography text={'Content'} varint={'h6'} />
            <MuiTypography text={lead_paragraph} varint={'body2'} />
            <MuiTypography text={'Published Date'} varint={'h6'} />
            <MuiTypography text={new Date(pub_date).toLocaleDateString()} varint={'body2'} />
            <MuiTypography text={'URL'} varint={'h6'} />
            <MuiLink href={web_url} linkText={web_url} />
        </>
    )
}
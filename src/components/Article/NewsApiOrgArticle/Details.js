import React from 'react'
import { MuiTypography, MuiChip, MuiLink } from '../../mui'

export const Details = ({
    article: {
        author,
        content,
        description,
        publishedAt,
        source,
        url,
        urlToImage
    },
}) => (
    <>
        <MuiTypography text={'Author'} varint={'h6'} />
        <MuiChip label={author} />
        <MuiTypography text={'Source'} varint={'h6'} />
        <MuiChip label={source.name} />
        <MuiTypography text={'Content'} varint={'h6'} />
        <MuiTypography text={content} varint={'body2'} />
        <MuiTypography text={'Description'} varint={'h6'} />
        <MuiTypography text={description} varint={'body2'} />
        <MuiTypography text={'Published Date'} varint={'h6'} />
        <MuiTypography text={new Date(publishedAt).toLocaleDateString()} varint={'body2'} />
        <MuiTypography text={'URL'} varint={'h6'} />
        <MuiLink href={url} linkText={url} />
        <MuiTypography text={'Image'} varint={'h6'} />
        <img src={urlToImage} alt='' style={{ width: 300 }} />
    </>
)
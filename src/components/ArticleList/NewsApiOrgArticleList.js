import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { StyledContainer } from './styled'
import { MuiTypography, MuiSelect, MuiTextField } from '../mui'
import { NewsApiOrgArticle } from '../Article'

export const NewsApiOrgArticleList = ({
    dataSource,
    data,
}) => {
    const authors = _.uniq(_.compact(data.map(({ author }) => author )))
    const sources = _.uniq(_.compact(data.map(({ source: { name } }) => name )))

    const [filters, setFilters] = useState({ author: '', source: '', date: '' })
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        setFilteredData(data)
    }, [data])
    
    useEffect(() => {
        let _data = _.cloneDeep(data)
        if (filters.source) {
            _data = _data.filter((dt) => dt.source.name === filters.source)
        }
        if (filters.author) {
            _data = _data.filter((dt) => dt.author === filters.author)
        }
        if (filters.date) {
            _data = _data.filter((dt) => dt.publishedAt.startsWith(filters.date))
        }
        setFilteredData(_data)
    }, [filters])

    return (
        <>
            <StyledContainer>
                <MuiTypography
                    varint={'h5'}
                    text={`${_.startCase(_.toLower(dataSource.value.replace(/_/g, ' ')))} (Data Source) Filters:`}
                />
                <MuiSelect
                    id={'author'}
                    label={'Author'}
                    items={authors.map((item) => ({ key: item, value: item }) )}
                    value={filters.author}
                    onChange={(e, key) => setFilters({ ...filters, [key]: e.target.value })}
                />
                <MuiSelect
                    id={'source'}
                    label={'Source'}
                    items={sources.map((item) => ({ key: item, value: item }) )}
                    value={filters.source}
                    onChange={(e, key) => setFilters({ ...filters, [key]: e.target.value })}
                />
                <MuiTextField
                    id={'date'}
                    label={'Published Date'}
                    type={'date'}
                    value={filters.date}
                    onChange={(e, key) => setFilters({ ...filters, [key]: e.target.value })}
                    InputLabelProps={{ shrink: true }}
                />
            </StyledContainer>
            <StyledContainer>
                { filteredData.map((article) => (
                    <NewsApiOrgArticle
                        article={article}
                        filters={filters}
                    />
                ))}
            </StyledContainer>
        </>
    )
}

export default NewsApiOrgArticleList
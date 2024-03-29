import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { MuiTypography, MuiSelect, MuiTextField } from '../mui'
import { NewYorkTimesArticle } from '../Article'
import { StyledContainer } from './styled'

export const NewYorkTimesArticleList = ({
    dataSource,
    data,
}) => {
    let authors = [] 
    let categories = []
    data.forEach(({ byline: { person }, keywords }) => {
        person.forEach(({ firstname, lastname }) => authors.push([firstname, lastname].join(' ')))
        keywords.forEach(({ value }) => categories.push(value)) 
    })
    
    authors = _.uniq(_.compact(authors))
    categories = _.uniq(_.compact(categories))
    const sections = _.uniq(_.compact(data.map(({ section_name }) => section_name )))

    const [filters, setFilters] = useState({ author: '', category: '', section: '', date: '' })
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        setFilteredData(data)
    }, [data])
    
    useEffect(() => {
        let _data = _.cloneDeep(data)
        if (filters.category) {
            _data = _data.filter((dt) => dt.keywords.find(({ value }) => value === filters.category) !== undefined)
        }
        if (filters.section) {
            _data = _data.filter((dt) => dt.section_name === filters.section)
        }
        if (filters.author) {
            _data = _data.filter((dt) => dt.byline.person.find(({ firstname, lastname }) => [firstname, lastname].join(' ') === filters.author) !== undefined)
        }
        if (filters.date) {
            _data = _data.filter((dt) => dt.pub_date.startsWith(filters.date))
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
                    id={'category'}
                    label={'Category'}
                    items={categories.map((item) => ({ key: item, value: item }) )}
                    value={filters.category}
                    onChange={(e, key) => setFilters({ ...filters, [key]: e.target.value })}
                />
                <MuiSelect
                    id={'section'}
                    label={'Section'}
                    items={sections.map((item) => ({ key: item, value: item }) )}
                    value={filters.section}
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
                    <NewYorkTimesArticle
                        article={article}
                        filters={filters}
                    />
                ))}
            </StyledContainer>
        </>
    )
}

export default NewYorkTimesArticleList
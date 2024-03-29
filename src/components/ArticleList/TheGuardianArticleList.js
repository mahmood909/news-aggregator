import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { MuiTypography, MuiSelect, MuiTextField } from '../mui'
import { TheGuardianArticle } from '../Article'
import { StyledContainer } from './styled'

export const TheGuardianArticleList = ({
    dataSource,
    data,
}) => {
    const sources = _.uniq(_.compact(data.map(({ pillarName }) => pillarName )))
    const sections = _.uniq(_.compact(data.map(({ sectionName }) => sectionName )))

    const [filters, setFilters] = useState({ source: '', section: '', date: '' })
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        setFilteredData(data)
    }, [data])
    
    useEffect(() => {
        let _data = _.cloneDeep(data)
        if (filters.source) {
            _data = _data.filter((dt) => dt.pillarName === filters.source)
        }
        if (filters.section) {
            _data = _data.filter((dt) => dt.sectionName === filters.section)
        }
        if (filters.date) {
            _data = _data.filter((dt) => dt.webPublicationDate.startsWith(filters.date))
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
                    id={'section'}
                    label={'Section'}
                    items={sections.map((item) => ({ key: item, value: item }) )}
                    value={filters.section}
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
                    <TheGuardianArticle
                        article={article}
                        filters={filters}
                    />
                ))}
            </StyledContainer>
        </>
    )
}

export default TheGuardianArticleList
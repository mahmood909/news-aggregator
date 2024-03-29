import React, { useCallback, useEffect, useState } from 'react'
import _ from 'lodash'
import axios from 'axios'
import { MuiTypography, MuiSelect, MuiTextField } from '../mui'
import { DATA_SOURCES, NEWS_API_ORG, NEW_YORK_TIMES, THE_GUARDIAN, generateQuery } from '../../utils/constants'
import { NewsApiOrgArticleList, NewYorkTimesArticleList, TheGuardianArticleList } from '../ArticleList'
import { StyledContainer } from './styled'

export const Dashboard = () => {

    const [keyword, setKeyword] = useState('')
    const [dataSource, setDataSource] = useState({})
    const [data, setData] = useState([])

    const changeDataSourceHandler = (e) => {
        const dataSource = _.first(DATA_SOURCES.filter(({ key }) => key === e.target.value)) || ''
        setData([])
        setDataSource(dataSource)
    }

    const getArticles = async (q) => {
        const { baseUrl, apiKey: { key, value } } = dataSource
        const qs = generateQuery({ [key]: value, q })
        const result = await axios.get(`${baseUrl}?${qs}`)
        setData(result.data)
    }

    const debounced = useCallback(_.debounce(async (q) => {
        if (!_.isEmpty(q)) getArticles(q)
    }, 1000), [dataSource])

    const changeKeywordHandler = (e) => {
        setKeyword(e.target.value)
        debounced(e.target.value)
    }

    useEffect(() => {
        
        if (!_.isEmpty(dataSource) && !_.isEmpty(keyword)) {
            getArticles(keyword)
        }   
    }, [dataSource])

    return (
        <>
            <MuiTypography
                varint={'h2'}
                text={'News Aggregator Dashboard'}
            />
            <StyledContainer>
                <MuiSelect
                    id={'data-source'}
                    label={'Data Source'}
                    items={DATA_SOURCES.map((dataSource) =>
                        ({
                            ...dataSource, 
                            value: _.startCase(_.toLower(dataSource.value.replace(/_/g, ' '))) 
                        })
                    )}
                    value={dataSource.key}
                    onChange={changeDataSourceHandler}
                />
                <MuiTextField
                    id={'keyword'}
                    label={'Keyword'}
                    type={'text'}
                    value={keyword}
                    onChange={changeKeywordHandler}
                />
            </StyledContainer>
            { !_.isEmpty(data) && dataSource.value === NEWS_API_ORG && (
                <NewsApiOrgArticleList
                    dataSource={ dataSource }
                    data={ data.articles }
                />
            )}
            { !_.isEmpty(data) && dataSource.value === NEW_YORK_TIMES && (
                <NewYorkTimesArticleList
                    dataSource={ dataSource }
                    data={ data.response.docs }
                />
            )}
            { !_.isEmpty(data) && dataSource.value === THE_GUARDIAN && (
                <TheGuardianArticleList
                    dataSource={ dataSource }
                    data={ data.response.results }
                />
            )}
        </>
    )
}

export default Dashboard
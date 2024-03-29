export const NEWS_API_ORG = 'NEWS_API_ORG'
export const NEW_YORK_TIMES = 'NEW_YORK_TIMES'
export const THE_GUARDIAN = 'THE_GUARDIAN'

export const NEWS_API_ORG_API_KEY = '5ec82bc651be457d9e8da9b5b1e94372'
export const NEW_YORK_TIMES_API_KEY = 'TwMAAK1Aa2JRHGApwpAnBcgxrdMFqMNm'
export const THE_GUARDIAN_API_KEY = 'b8281c7d-af20-4a47-b8a1-cafb2c335e57'

export const NEW_API_ORG_BASE_URL = 'https://newsapi.org/v2/everything'
export const NEW_YORK_TIMES_BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
export const THE_GUARDIAN_BASE_URL = 'https://content.guardianapis.com/search'

export const generateQuery = (query) => {
    let q = ''
    for (let key in query) {
        q += `${q && '&'}${key}=${query[key]}`
    }
    return q
}

export const DATA_SOURCES = [
    {
        key: 1,
        value: NEWS_API_ORG,
        baseUrl: NEW_API_ORG_BASE_URL,
        apiKey: {
            key: 'apiKey',
            value: NEWS_API_ORG_API_KEY
        },
    },
    {
        key: 2,
        value: NEW_YORK_TIMES,
        baseUrl: NEW_YORK_TIMES_BASE_URL,
        apiKey: {
            key: 'api-key',
            value: NEW_YORK_TIMES_API_KEY
        },
    },
    {
        key: 3,
        value: THE_GUARDIAN,
        baseUrl: THE_GUARDIAN_BASE_URL,
        apiKey: {
            key: 'api-key',
            value: THE_GUARDIAN_API_KEY
        },
    },
]
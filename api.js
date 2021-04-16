/**
 * @typedef CommonQuery
 * @property { "jpn"| "en" } lang
 */

HOST = "http://localhost:4000"

function APIConnecter(host) {
    this.host = host
    this.request = (url, body) => fetch(
        `${this.host}${url}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
        .then(v => v.json())
        .catch(e => { console.error(e); return [] })
}


/**
 * @typedef QueryNewsQuery
 * @property {string} startDate
 * @property {string} endDate
 * @property {string} word
 * @param {CommonQuery&QueryNewsQuery} query 
 */
function requestQueryNewsList(query) {
    const api = new APIConnecter(HOST)
    return api.request('/list/query', query)
}


/**
 * @typedef GeoNewsQuery
 * @property {string} geo
 * @param {CommonQuery&GeoNewsQuery} query 
 */
function requestGeoNewsList(query) {
    const api = new APIConnecter(HOST)
    return api.request('/list/geo', query)
}

/**
 * @typedef TopicNewsQuery
 * @property { "WORLD" | "NATION" | "BUSINESS" | "TECHNOLOGY" | "ENTERTAINMENT" | "SPORTS" | "SCIENCE" | "HEALTH" } topic
 * @param {CommonQuery&TopicNewsQuery} query 
 */
function requestTopicNewsList(query) {
    const api = new APIConnecter(HOST)
    return api.request('/list/topic', query)
}
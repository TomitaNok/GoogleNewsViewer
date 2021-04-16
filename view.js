const DISPLAY_Id = "display"


let FETCHING_FLAG = false

function getDisplayId() {
    const doc = document.getElementById(DISPLAY_Id)
    if (!doc) throw Error('No display element')
    return doc
}

/**
 * 
 * @param {HTMLElement} doc 
 * @param {Array} list 
 */
function displayList(doc, list) {
    list.forEach(e => {
        const div = document.createElement("div")
        // TODO 必要に応じて修正
        div.innerText = e.title
        doc.appendChild(div)
    })
}

function sleep(s) {
    return new Promise((resolve) => setTimeout(() => resolve(), s * 1000))
}

let LIST_BUSINESS_FLAG = false
let BUSINESS_NEWS_LIST = []
async function listBussinessNews() {
    if (LIST_BUSINESS_FLAG) return
    LIST_BUSINESS_FLAG = true
    while (FETCHING_FLAG) {
        console.debug("FETCHING_FLAG")
        await sleep(1)
    }
    try {
        FETCHING_FLAG = true
        if (BUSINESS_NEWS_LIST.length === 0) {
            BUSINESS_NEWS_LIST = await requestTopicNewsList({
                lang: "jpn",
                topic: "BUSINESS"
            })
        }
    } catch (e) {
        console.error(e)
    }
    const doc = getDisplayId()
    doc.innerHTML = ""
    displayList(doc, BUSINESS_NEWS_LIST)
    FETCHING_FLAG = false
    LIST_BUSINESS_FLAG = false
}

let LIST_WORLD_FLAG = false
let WORLD_NEWS_LIST = []
async function listWorldNews() {
    if (LIST_WORLD_FLAG) return
    LIST_WORLD_FLAG = true
    while (FETCHING_FLAG) {
        console.debug("FETCHING_FLAG")
        await sleep(1)
    }
    try {
        FETCHING_FLAG = true
        if (WORLD_NEWS_LIST.length === 0) {
            WORLD_NEWS_LIST = await requestTopicNewsList({
                lang: "jpn",
                topic: "WORLD"
            })
        }
    } catch (e) {
        console.error(e)
    }
    const doc = getDisplayId()
    doc.innerHTML = ""
    displayList(doc, WORLD_NEWS_LIST)
    FETCHING_FLAG = false
    LIST_WORLD_FLAG = false
}


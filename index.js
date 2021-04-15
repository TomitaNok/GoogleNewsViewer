/**
 * @typedef Item
 * @property {string} title
 * @property {string} link
 * @property {string | undefined} imageUrl
 */

// あらかじめ作成しておいたlistの取得(ファイルのほうがいいかな)
// 文字列を配列で返す
/**
 * @returns {string[]}
 */
function readList() { }


// あらかじめ作成しておいたリストから使う単語を選別
/**
 * 
 * @param {string[]} wordList 
 * @returns {string[]}
 */
function createQueryWords(wordList) { }


// wordでクエリー検索
// タイトルとlinkを配列で返す。{ title:string , link:string } []
/**
 * 
 * @param {string} word 
 * @returns {Promise<Item[]>}
 */
async function querySearch(word) { }


// それぞれの単語についての記事配列を一つの配列にする。
// 一つの配列を返す。{ title:string , link:string } []
/**
 * 
 * @param {Item[][]} articlesList 
 * @returns {Item[]}
 */
function mixArticlesList(articlesList) { }


// 一つの配列を返す。{ title:string , link:string } []
/**
 * 
 * @param {Item[]} articles 
 * @returns {Item[]}
 */
function shuffleArticles(articles) { }
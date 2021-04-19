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
function readList() {}

// 入力プロンプトの値(',' 区切り)をArrayに格納して返す
/**
 * @returns {string[]}
 */
function createWordList(inputs) {
  let wordList = inputs.split(',');
  console.debug(wordList);
  return wordList.filter((word) => word !== '');
}

// あらかじめ作成しておいたリストから使う単語を選別
/**
 *
 * @param {string[]} wordList
 * @returns {string[]}
 */

function createQueryWords(wordList, num = 3) {
  for (let i = wordList.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordList[i], wordList[j]] = [wordList[j], wordList[i]];
  }
  console.debug('shuffled:' + wordList);
  return wordList.slice(0, num);
}

// wordでクエリー検索
// タイトルとlinkを配列で返す。{ title:string , link:string } []
/**
 *
 * @param {string} word
 * @returns {Promise<Item[]>}
 */
async function querySearch(word) {
  const items = await requestQueryNewsList(word);
  const imageUrl = await getImageUrl(word);
  return items.map((item) => ({
    title: item.title,
    link: item.link,
    // imageUrl: null,
    // imageUrl: fetch('http://localhost:4000/search/image/' + word),
    imageUrl: imageUrl,
  }));
}

// 画像のURLを返す
async function getImageUrl(word) {
  return await fetch('http://localhost:4000/search/image/' + word)
    .then((res) => res.json())
    .then((imageUrl) => imageUrl.imageUrl);
}

// それぞれの単語についての記事配列を一つの配列にする。
// 一つの配列を返す。{ title:string , link:string } []
/**
 *
 * @param {Item[][]} articlesList
 * @returns {Item[]}
 */
function mixArticlesList(articlesList) {
  console.debug({ articlesList });
  return [].concat(...articlesList);
}

// 一つの配列を返す。{ title:string , link:string } []
/**
 *
 * @param {Item[]} articles
 * @returns {Item[]}
 */
function shuffleArticles(articles) {
  const newArray = [];
  while (articles.length > 0) {
    n = articles.length;
    k = Math.floor(Math.random() * n);
    newArray.push(articles[k]);
    articles.splice(k, 1);
  }
  return newArray;
}

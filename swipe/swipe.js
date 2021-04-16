// function adjustImageSize(id) {
//     const doc = document.getElementById(id)
//     doc.onload = (e) => {
//         console.debug(doc.naturalWidth)
//         console.debug(doc.naturalHeight)
//         const { width, height } = calculateNewSize(doc.naturalWidth, doc.naturalHeight)
//         doc.style.width = `${width}px`
//         doc.style.height = `${height}px`
//     }
// }

// function calculateNewSize(width, height) {
//     const rate = width / height
//     let newWidth, newHeight
//     if (rate > 1) {
//         newWidth = width > 500 ? 500 : width
//         newHeight = newWidth / rate
//     } else {
//         newHeight = height > 500 ? 500 : height
//         newWidht = newHeight * rate
//     }
//     return { width: newWidth, height: newHeight }
// }

// function bindEventsTarget(id) {
//     const doc = document.getElementById(id)
//     let startPageX = null
//     const FIRST_TARGET_X_POSITION = doc.getBoundingClientRect().x
//     console.debug({ FIRST_TARGET_X_POSITION })
//     document.body.addEventListener('mousedown', (event) => {
//         console.debug('mousedown')
//         startPageX = event.pageX
//     })

//     document.body.addEventListener('mouseup', (event) => {
//         console.debug('mouseup')
//         startPageX = null
//     })

//     let t = null
//     document.body.addEventListener('mousemove', (event) => {
//         console.debug('mousemove')
//         if (!startPageX) return
//         if (t) {
//             clearTimeout(t)
//         }
//         t = setTimeout(() => {
//             doc.style.left = `${FIRST_TARGET_X_POSITION + event.x - startPageX}px`
//         }, 10)
// const diff = event.movementX - startPageX
// console.debug({ movementX: event.x })

// t = setTimeout(() => {
//     const diff = event.movementX - startPageX
//     console.debug('diff', diff)
//     console.debug('startPageX', startPageX)
//     startPageX = null
//     doc.style.left = FIRST_TARGET_X_POSITION
// }, 500)
//     })
// }
// drag開始地点(s地点)の取得(x座標)
// function getStartIndex(id) {
//     const doc = document.getElementById(id)
// }
// drag終了地点(e地点)の取得(x座標)
// e - s > 300 px 右判定
// e - s < -300 px 左判定
// -300 <= e - s <= 300 : 中央に戻る


function listen() {

    const doc = document.getElementsByClassName('center')
    const { x } = doc.getBoundingClientRect()

    const FIRST_X_INDEX = x
    let startX = null
    doc.addEventListener('mousedown', (e) => {
        // offset : ページ内での位置
        const { x } = e
        startX = x;
    })
    document.body.addEventListener('mouseup', (e) => {
        if (!startX) return
        startX = null
        doc.style.left = FIRST_X_INDEX
    })
    doc.addEventListener('mousemove', (e) => {
        if (!startX) return;
        // x 絶対位置
        const { x } = e
        doc.style.left = FIRST_X_INDEX + (x - startX)
    })
}
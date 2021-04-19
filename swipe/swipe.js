function listen() {

    const docs = document.getElementsByClassName('center')
    const doc = Array.from(docs)[0]
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
function getClientWindowSize() {
    const doc = document;
    const docElem = doc.documentElement
    const body = doc.getElementsByTagName('body')[0];
    const x = window.innerWidth || docElem.clientWidth || body.clientWidth;
    const y = window.innerHeight || docElem.clientHeight || body.clientHeight;
    return { x, y }
}
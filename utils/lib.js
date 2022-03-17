
// 线性渐变，在水平线，垂直线这种path上是默认是没有效果的，因为计算渐变的时候，要获取path的getBoundingClientRect,范围盒子的长宽，
// 而水平线，垂直线这两种情况长或宽有一个值为0




// 创建svg内的元素
function createSVGELE(tag, attrs = {}) {
    const ele = document.createElementNS('http://www.w3.org/2000/svg', tag)
    for (let key in attrs) {
        if (key === "style") {
            let styleObj = attrs['style']
            let val = "";
            Object.keys(styleObj).forEach(key => {
                val += key + ":" + styleObj[key] + ";"
            })
            ele.setAttribute('style', val)
        } else {
            ele.setAttribute(key, attrs[key])
        }

    }
    return ele
}


// 获取svg内某个元素的中心点坐标
function getCenterPos(dom) {
    const SVGRect = dom.getBBox()
    const cx = SVGRect.x + SVGRect.width / 2
    const cy = SVGRect.y + SVGRect.height / 2

    // 计算translate
    let node = dom
    let regexp = /translate\((.*),(.*)\)/
    let deltX = 0
    let deltY = 0

    while (node) {

        console.log('node', node)
        const trans = node.getAttribute('transform')

        if (trans) {
            let ret = regexp.exec(trans)
            if (ret) {
                deltX += parseFloat(ret[1] || 0)
                deltY += parseFloat(ret[2] || 0)
            }

        }

        node = node.parentNode

        if (node.tagName === 'svg') {

            break
        }
    }

    return {
        x: cx + deltX,
        y: cy + deltY
    }
}


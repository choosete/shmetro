
// 线性渐变，在水平线，垂直线这种path上是默认是没有效果的，因为计算渐变的时候，要获取path的getBoundingClientRect,范围盒子的长宽，
// 而水平线，垂直线这两种情况长或宽有一个值为0





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


const svgPath = createSVGELE('path', {})

const getBoundingClientRect = svgPath.getBoundingClientRect


window.SVGPathElement.getBoundingClientRect = function () {

    let self = this;

    let result = getBoundingClientRect.apply(self)

    let { width, height } = result;

    if (width == 0) {
        result.width = parseFloat(self.style.stroke)
    }

    if (height = 0) {
        result.height = parseFloat(self.style.stroke)
    }
    return result
}


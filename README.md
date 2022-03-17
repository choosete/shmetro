# shmetro
上海地铁线路图


需求：
 1. 动态在地铁示意图里绘制 故障站点的的 涟漪波纹
    需要根据数据定位到站点的位置以及图形信息 "id": "ST1040-CQL", 这个id是唯一属性值，
    怎么和后台的数据对接？


 2. 线路的path路径支持渐变 线性渐变 
    要根据站点能找到与他相连的两个站点之间的path路径，然后动态设置stroke
    
 3. 线路上path上支持路径动画 https://codepen.io/toptalblog/pen/qXRJeY
    路径动画这个需要整理每条地铁站路的path 化零为整

    


marker

svg的整体背景色 #16161e

站点的名称信息， 颜色值#5f5e63

地铁线默认颜色 #273c49


# api方法
getBBox() 可以后去svg元素的最小矩形信息，进而可以计算出中心点位置



## 问题记录

1. path 路径设置线性渐变的时候，有的线段会没有效果，因为关键属性 gradientUnits 取值 userSpaceOnUse | objectBoundingBox，
https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/gradientUnits ，关键方法getBoundingClientRect获取不到宽度或者高度
使用 userSpaceOnUse 需要指定线段两个端点的具体坐标值，相对于svg viewBox坐标系下的



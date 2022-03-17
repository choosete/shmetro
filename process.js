/*

   1. 站点id(ST_), 关联path路径的id(segmentxx)

   2. 以线路为分组，线路有方向

   3. 换乘站点涉及到多个线路，单独处理


   {
       line01:{
           start: //起点站点id
           end:   //终点id
           stations:[],
           paths:[],
           subways:{ // 按照线路方向排序
              segementxxx: {
                  st:
                  ed:
              }
            }
       }
   }

   //换乘站点
   {
       名称:[line01,line02]
   }


 */

// const stations = require('./assets/metromap.json').levels[0].locations; // []


const map = {
    line01: {
        st: 'ST11-XZ', //莘庄
        ed: 'ST1-FJL', //富锦路
        stations: [
            'ST11-XZ', 'ST1-WHL', "ST1-LHL", 'ST1-JJLY', 'ST4005-SHNZ',
            'ST801-CBL', 'ST9-SHTYG', 'ST501-XJH', 'ST1-HSL', 'ST41-CSL', 'STA01-SXNL',
            'ST2001-HPNL', 'ST83-RMGC', 'ST1-XZL', 'ST1801-HZL', 'STD-SHHCZ', 'ST1-ZSBL',
            'ST1-YCL', 'ST1-SHMXC', 'ST1-WSL', 'ST1-PPXC', 'ST1-GKL', 'ST1-THXC',
            'ST1-HLL', 'ST1-GFXC', 'ST1-BAGL', 'ST1-YYXL', 'ST1-FJL'
        ],
        paths: [
            'segment01110112', 'segment01120113', 'segment01130114', 'segment01140115', 'segment01150116',
            'segment01160117', 'segment01170118', 'segment01180119', 'segment01190120', 'segment01200121',
            'segment01210122', 'segment01220123', 'segment01230124', 'segment01240125', 'segment01250126',
            'segment01260127', 'segment01270128', 'segment01280129', 'segment01290130', 'segment01300131',
            'segment01310132', 'segment01320133', 'segment01330134', 'segment01340135', 'segment01350136',
            'segment01360137', 'segment01370138'
        ],
    },
    line02: {
        st: 'ST2-XJD', // 徐泾东
        ed: "ST2-PDGJJC", // 浦东国际机场
        stations: [
            'ST2-XJD', 'ST10202-HQHCZ', 'ST202-HQHZL2H', 'ST2-SHL', 'ST2-BXJ', 'ST2-WNL', 'ST4002-LSGL', 'STE-ZSGY',
            'ST402-JSL', 'ST2042-JAS', 'ST1802-NJXL', 'ST83-RMGC', 'ST202-NJDL', 'ST2002-LJZ', 'ST2-DCL',
            'ST12A-SJDD', 'ST2-SHKJG', 'ST2-SJGY', 'ST28042-LYL', 'ST2-ZJGK', 'ST2-JKL', 'ST2-GLL', 'ST2-TZ',
            'ST2-CXZL', 'ST2-HXDL', 'ST2-CS', 'ST2-LKL', 'ST2-YDDD', 'ST2-HTSL', 'ST2-PDGJJC'
        ],
        paths: [
            'segment02340235', 'segment02350236', 'segment02360237', 'segment02370238', 'segment02380239',
            'segment02390240', 'segment02400241', 'segment02410242', 'segment02420243', 'segment02430244',
            'segment02440245', 'segment02450246', 'segment02460247', 'segment02470248', 'segment02480249',
            'segment02490250', 'segment02500251', 'segment02510252', 'segment02520253', 'segment02530254',
            'segment02540255', 'segment02550256', 'segment02560257', 'segment02570258', 'segment02580259',
            'segment02590260', 'segment02600261', 'segment02610262', 'segment02620263'
        ]
    },
    line03: {
        st: "ST4005-SHNZ", //上海南站,
        ed: "ST4-JYBL", //江杨北路
        stations: [
            'ST4005-SHNZ', 'ST4-SLL', 'ST804-LCL', 'ST4-CXL', 'ST10C-YSL', 'ST20C-HQL', 'STC-YAXL',
            'STE-ZSGY', 'ST100C-JSJL', 'ST240C-CYL', 'ST4C-ZPL', 'STC-ZTL', 'STD-SHHCZ', 'STC-BSL', 'ST4-DBXL',
            'ST84-HKZQC', 'ST4-CFL', 'ST4-DBS', 'ST4-JWZ', 'ST4-YGXL', 'ST20004-CJNL', 'ST4-SFL',
            'ST4-ZHB', 'ST4-SBL', 'ST4-SCL', 'ST4-BYL', 'ST4-YYL', 'ST4-TLL', 'ST4-JYBL'
        ],
        paths: [
            'segment03110312', 'segment03120313', 'segment03130314', 'segment03140315', 'segment03150316',
            'segment03160317', 'segment03170318', 'segment03180319', 'segment03190320', 'segment03200321',
            'segment03210322', 'segment03220323', 'segment03230324', 'segment03240325', 'segment03250326',
            'segment03260327', 'segment03270328', 'segment03280329', 'segment03290330', 'segment03300331',
            'segment03310332', 'segment03320333', 'segment03330334', 'segment03340335', 'segment03350336',
            'segment03360337', 'segment03370338', 'segment03380339'
        ]
    },
    line04: {
        st: 'ST9-SHTYG', //上海体育馆
        ed: 'ST8-SHTYC', //上海体育场
        stations: [
            'ST9-SHTYG', 'ST10C-YSL', 'ST20C-HQL', 'STC-YAXL', 'STE-ZSGY', 'ST100C-JSJL',
            'ST240C-CYL', 'ST4C-ZPL', 'STC-ZTL', 'STD-SHHCZ', 'STC-BSL', 'ST208-HLL',
            'ST8-LPL', 'ST808-DLL', 'ST8-YSPL', 'ST2008-PDDD', 'ST12A-SJDD', 'ST8-PDL',
            'ST28-LCL', 'ST8-TQ', 'ST8-NPDQ', 'ST88-XZNL', 'ST8-LBL', 'ST48-DAL', 'ST8-SHTYC'
        ],
        paths: [

        ]
    }
}


// console.log(map.line01.paths.length)

const paths = map.line01.paths;
const stations = map.line01.stations;
const subways = {}
for (let i = 0; i < paths.length; i++) {
    const element = paths[i]
    subways[element] = {}
    subways[element].st = stations[i]
    subways[element].ed = stations[i + 1]
}


map.line01.subways = subways

// Object.keys(map).forEach(line => {
//     console.log(line, map[line].stations.length, map[line].paths.length)
// })


// console.log(map)

window.mapJSON = map

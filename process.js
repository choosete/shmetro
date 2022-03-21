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
            'segment04010402', 'segment04020403', 'segment04030404', 'segment04040405', 'segment04050406',
            'segment04060407', 'segment04070408', 'segment04080409', 'segment04090410', 'segment04100411',
            'segment04110412', 'segment04120413', 'segment04130414', 'segment04140415', 'segment04150416',
            'segment04160417', 'segment04170418', 'segment04180419', 'segment04190420', 'segment04200421',
            'segment04210422', 'segment04220423', 'segment04230424', 'segment04240425', 'segment04250426',
            'segment04010426',
        ]
    },
    line05: {
        st: 'ST11-XZ',
        ed: 'ST10-MHKFQ',
        ed2: 'ST10-FXXC',
        stations: [
            'ST11-XZ', 'ST10-CSL', 'ST10-YDL', 'ST10-ZQ', 'ST10-BQ', 'ST10-JCL', 'ST10-DCL',
            'ST10-JPL', 'ST10-HNL', 'ST10-WJL', 'ST10-MHKFQ', 'ST10-DCL', 'ST10-ICL', 'ST10-XD',
            'ST10-XT', 'ST10-FPDD', 'ST10-HCDL', 'ST10-WYL', 'ST10-JHH', 'ST10-FXXC'
        ],
        paths: [
            'segment05010502', 'segment05020503', 'segment05030505', 'segment05050507', 'segment05070508',
            'segment05080509', 'segment05090510', 'segment05100511', 'segment05110512', 'segment05120513',
            'segment05090531', 'segment05310532', 'segment05320533', 'segment05330534', 'segment05340535',
            'segment05350536', 'segment05360537', 'segment05370538'
        ]
    },
    line06: {
        st: 'ST4A0-DFTYZX',
        ed: 'ST220-GCL',
        stations: [
            'ST4A0-DFTYZX', 'ST20-LYNL', 'ST20-SNL', 'ST20-HXXL', 'ST20-GQL', 'ST1020-DML', 'ST60-GKXL',
            'ST20-LYXC', 'ST20-SHETYXZX', 'ST28-LCL', 'ST20-PDL', 'ST12A-SJDD', 'ST20-YSTYZX', 'ST20020-MSL',
            'ST20-BYJL', 'ST20-DPL', 'ST2020-YSL', 'ST20-JQL', 'ST20-BXL', 'ST20-WLL', 'ST820-JFL',
            'ST20-DJL', 'ST20-WZDD', 'ST20-ZHL', 'ST20-WGQBSQNZ', 'ST20-HJL', 'ST20-WGQBSQBZ', 'ST220-GCL'
        ],
        paths: [
            'segment06210622', 'segment06220623', 'segment06230624', 'segment06240625', 'segment06250626',
            'segment06260627', 'segment06270628', 'segment06280629', 'segment06290630', 'segment06300631',
            'segment06310632', 'segment06320633', 'segment06330634', 'segment06340635', 'segment06350636',
            'segment06360637', 'segment06370638', 'segment06380639', 'segment06390640', 'segment06400641',
            'segment06440645', 'segment06420643', 'segment06430644', 'segment06410642', 'segment06450646',
            'segment06460647', 'segment06470648'
        ]
    },
    line07: {
        st: 'ST40-MLH',
        ed: 'ST40-HML',
        stations: [
            'ST40-MLH', 'ST40-LNXC', 'ST40-PGL', 'ST40-LH', 'ST4040-GCGY', 'ST40-QHL',
            'ST40-SHDX', 'ST40-NCL', 'ST40-SDL', 'ST40-CZL', 'ST40-DCZ', 'ST40-XZL',
            'ST40-DHSL', 'ST40-XCL', 'ST40-LGL', 'ST4C-ZPL', 'ST1040-CSL', 'ST40-CPL',
            'ST2042-JAS', 'ST41-CSL', 'ST140-ZJBL', 'ST48-DAL', 'ST840-LHZL', 'ST40-HT',
            'ST1040-CQL', 'STC0-YHL', 'ST40-YTL', 'ST60-GKXL', 'ST40-YGNL', 'ST40-JXL',
            'ST40-FHL', 'ST28042-LYL', 'ST40-HML'

        ],
        paths: [
            'segment07210722', 'segment07220723', 'segment07230724', 'segment07240725', 'segment07250726',
            'segment07260727', 'segment07270728', 'segment07280729', 'segment07290730', 'segment07300731',
            'segment07310732', 'segment07320733', 'segment07330734', 'segment07340735', 'segment07350736',
            'segment07360737', 'segment07370738', 'segment07380739', 'segment07390740', 'segment07400741',
            'segment07410742', 'segment07420743', 'segment07430744', 'segment07440745', 'segment07450746',
            'segment07460747', 'segment07470748', 'segment07480749', 'segment07490750', 'segment07500751',
            'segment07510752', 'segment07520753'

        ]
    },
    line08: {
        st: 'ST10000000080-SDGL',
        ed: 'ST80-SGL',
        stations: [
            'ST10000000080-SDGL', 'ST80-LHL', 'ST80-JYL', 'ST80-PJZ', 'ST80-UHL', 'ST80-LZXC',
            'ST4A0-DFTYZX', 'ST80-YS', 'ST1080-CSL', 'STC0-YHL', 'ST80-ZHYYG', 'ST88-XZNL',
            'ST180-LJBL', 'ST280-LXM', 'ST2080-DSJ', 'ST83-RMGC', 'ST880-QFL', 'ST80-ZXL',
            'ST80-XZBL', 'ST84-HKZQC', 'ST80-QYL', 'ST280-SPL', 'ST80-ASXC', 'ST20080-JPL',
            'ST80-HXL', 'ST80-YJZL', 'ST80-HXGY', 'ST80-XYL', 'ST80-NJL', 'ST80-SGL'
        ],
        paths: [
            'segment08200821', 'segment08210822', 'segment08220823', 'segment08230824', 'segment08240825',
            'segment08250826', 'segment08260827', 'segment08270828', 'segment08280829', 'segment08290830',
            'segment08300831', 'segment08310832', 'segment08320833', 'segment08330834', 'segment08340835',
            'segment08350836', 'segment08360837', 'segment08370838', 'segment08380839', 'segment08390840',
            'segment08400841', 'segment08410842', 'segment08420843', 'segment08430844', 'segment08440845',
            'segment08450846', 'segment08460847', 'segment08470848', 'segment08480849'
        ]
    },
    line09: {
        st: 'ST100-SJNZ',
        ed: 'ST100-CL',
        stations: [
            'ST100-SJNZ', 'ST100-ZBC', 'ST100-SJTYZX', 'ST100-SJXC', 'ST100-SJDXC', 'ST100-DJ',
            'ST100-SS', 'ST100-SJ', 'ST100-JT', 'ST100-ZCL', 'ST100-QB', 'ST100-XZL', 'ST100-HCL',
            'ST100-CHJKFQ', 'ST4100-GLL', 'ST10C-YSL', 'ST501-XJH', 'ST140-ZJBL', 'ST900-JSL',
            'ST100-DPQ', 'ST1100-MDL', 'ST180-LJBL', 'ST100-XNM', 'ST100-SCL', 'ST12A-SJDD',
            'ST20100-SHKJG', 'ST20100-YGZL', 'ST100-FDL', 'ST2100-LTL', 'ST100-TEZL',
            'ST100-JQ', 'ST100-JJL', 'ST900-JHL', 'ST100-GTL', 'ST100-MLL', 'ST100-CL'
        ],
        paths: [
            'segment09180919', 'segment09190920', 'segment09200921', 'segment09210922', 'segment09220923',
            'segment09230924', 'segment09240925', 'segment09250926', 'segment09260927', 'segment09270928',
            'segment09280929', 'segment09290930', 'segment09300931', 'segment09320933', 'segment09330934-1',
            'segment09330934', 'segment09340935', 'segment09350936', 'segment09360937', 'segment09370938',
            'segment09380939', 'segment09390940', 'segment09400941', 'segment09410942', 'segment09420943',
            'segment09430944', 'segment09440945', 'segment09450946', 'segment09460947', 'segment09470948',
            'segment09480949', 'segment09490950', 'segment09500951', 'segment09510952'
        ]
    },
    line10: {
        st: 'ST200-JLL',
        ed: 'ST10202-HQHCZ',
        ed2: 'ST200-HZL',
        stations: [
            'ST200-JLL', 'ST220-GCL', 'ST200-GQ', 'ST200-GQX', 'ST200-SJL', 'ST200-GFL',
            'ST200-XJWC', 'ST200-YGDL', 'ST200-SML', 'ST200-JWTYC', 'ST200-WJC', 'ST20200-GQL',
            'ST200-TJDX', 'ST280-SPL', 'ST200-YDXC', 'ST208-HLL', 'ST200-SCBL', 'STA00-TTL',
            'ST202-NJDL', 'ST2200-YY', 'ST280-LXM', 'ST1200-XTD', 'STA01-SXNL', 'ST200-SHTSG',
            'ST600-JTDX', 'ST20C-HQL', 'ST200-SYL', 'ST200-YLL', 'ST200-SCL', 'ST200-LXL',
            'ST200-SHDWY', 'ST200-HQHZL1H', 'ST202-HQHZL2H', 'ST10202-HQHCZ', 'ST200-LXL',
            'ST200-LBXC', 'ST200-ZTL', 'ST200-HZL'
        ],
        paths: [
            'segment10731074', 'segment10721073', 'segment10711072', 'segment10701071', 'segment10691070',
            'segment10681069', 'segment10671068', 'segment10661067', 'segment10651066', 'segment10641065',
            'segment10631064', 'segment10621063', 'segment10611062', 'segment10601061', 'segment10591060',
            'segment10581059', 'segment10571058', 'segment10561057', 'segment10551056', 'segment10541055',
            'segment10531054', 'segment10521053', 'segment10511052', 'segment10501051', 'segment10491050',
            'segment10481049', 'segment10471048', 'segment10461047', 'segment10451046', 'segment10441045',
            'segment10431044', 'segment10421043', 'segment10411042', 'segment10201045', 'segment10191020',
            'segment10181019'

        ]
    },
    line11: {
        st: 'ST400-DSN',
        ed: 'ST400-JDB',
        ed2: 'ST400-HQ',
        stations: [
            'ST400-DSN', 'ST400-KXGL', 'ST400-XYL', 'ST8400-LSL', 'ST20400-YQ', 'ST400-PSL', 'ST400-SLD',
            'ST400-SL', 'ST4A0-DFTYZX', 'ST400-LYL', 'ST400-YJL', 'STC00-LH', 'ST400-SHYYG', 'ST501-XJH',
            'ST600-JTDX', 'ST402-JSL', 'ST1400-LDL', 'ST240C-CYL', 'ST400-FQL', 'ST2400-ZR', 'ST4400-SHXZ',
            'ST400-LZY', 'ST400-QLSL', 'ST400-WWL', 'ST400-TPXC', 'ST400-NX', 'ST400-CXGL', 'ST400-ML',
            'ST400-JDXC', 'ST400-BYL', 'ST400-JDX', 'ST400-JDB', 'ST400-JDXC', 'ST400-SHSCC', 'ST400-CJDL',
            'ST400-SHQCC', 'ST400-AT', 'ST400-ZFL', 'ST400-GML', 'ST400-HQ'
        ],
        paths: [
            'segment11621163', 'segment11611162', 'segment11601161', 'segment11591160', 'segment11581159',
            'segment11561157', 'segment11551156', 'segment11541155', 'segment11531154', 'segment11521153',
            'segment11511152', 'segment11501151', 'segment11491150', 'segment11481149', 'segment11471148',
            'segment11461147', 'segment11451146', 'segment11441145', 'segment11431144', 'segment11421143',
            'segment11411142', 'segment11401141', 'segment11391140', 'segment11381139', 'segment11371138',
            'segment11361137', 'segment11351136', 'segment11341135', 'segment11331134', 'segment11321133',
            'segment11311132', 'segment11201134', 'segment11191120', 'segment11181119', 'segment11171118',
            'segment11161117', 'segment11151116', 'segment11141115'
        ]
    },
    line12: {
        st: '',
        ed: '',
        stations: [
            'ST900-JHL', 'ST800-SJL', 'ST800-JJL', 'ST800-YGBL', 'ST820-JFL', 'ST800-DLUL', 'ST800-FXD',
            'ST800-AGL', 'ST800-LCL', 'ST800-NGL', 'ST20800-JPGY', 'ST808-DLL', 'ST800-TLQ', 'ST800-GJKYZX',
            'STA00-TTL', 'ST880-QFL', 'ST1801-HZL', 'ST1802-NJXL', 'STA01-SXNL', 'ST900-JSL', 'ST808-DMQL',
            'ST840-LHZL', 'STC00-LH', 'ST804-LCL', 'ST801-CBL', 'ST4800-GLGY', 'ST800-HCL', 'ST800-HML',
            'ST800-DLL', 'ST800-GDL', 'ST800-HXL', 'ST800-QXL'
        ],
        paths: [
            'segment12501251', 'segment12491250', 'segment12481249', 'segment12471248', 'segment12461247',
            'segment12451246', 'segment12441245', 'segment12431244', 'segment12421243', 'segment12411242',
            'segment12401241', 'segment12391240', 'segment12381239', 'segment12371238', 'segment12361237',
            'segment12351236', 'segment12341235', 'segment12331234', 'segment12321233', 'segment12311232',
            'segment12301231', 'segment12291230', 'segment12281229', 'segment12271228', 'segment12261227',
            'segment12251226', 'segment12241225', 'segment12231224', 'segment12221223', 'segment12211222',
            'segment12201221'
        ]
    },
    line13: {
        st: 'ST1000-JYL',
        ed: 'ST1000-ZJL',
        stations: [
            'ST1000-JYL', 'ST1000-JSJXL', 'ST1000-FZ', 'ST1000-QLSNL', 'ST1000-ZBL', 'ST5000-DDHL',
            'ST100C-JSJL', 'ST1400-LDL', 'ST3000-WNL', 'ST1040-CSL', 'ST1000-JNL', 'ST1801-HZL',
            'ST1000-ZRBWG', 'ST1802-NJXL', 'ST1000-HHZL', 'ST1200-XTD', 'ST1100-MDL', 'ST1000-SBHBWG',
            'ST1000-SBDD', 'ST1040-CQL', 'ST1080-CSL', 'ST1020-DML', 'ST1000-HPL', 'ST1000-XNL', 'ST1000-BC',
            'ST1000-CCL', 'ST21000LXL', 'ST9000-HXZL', 'ST1000-ZKL', 'ST1000-XLL', 'ST1000-ZJL'
        ],
        paths: [
            'segment13211322', 'segment13221323', 'segment13231324', 'segment13241325', 'segment13251326',
            'segment13261327', 'segment13271328', 'segment13281329', 'segment13291330', 'segment13301331',
            'segment13311332', 'segment13321333', 'segment13331334', 'segment13341335', 'segment13351336',
            'segment13361337', 'segment13371338', 'segment13381339', 'segment13391340', 'segment13401341',
            'segment13411342', 'segment13421343', 'segment13431344', 'segment13441345', 'segment13451346',
            'segment13461347', 'segment13471348', 'segment13481349', 'segment13491350', 'segment13501351'
        ]
    },
    line14: {
        st: 'ST2000-FB',
        ed: 'ST2000-GQL',
        stations: [
            'ST2000-GQL', 'ST2000-LXL', 'ST2000-LTL', 'ST2000-JYL', 'ST2000-DBL', 'ST2000-ZXXC',
            'ST2000-ZGL', 'ST6000-TCL', 'ST2400-ZR', 'ST2000-ZNL', 'ST240C-CYL', 'ST3000-WNL',
            'ST2000-WDL', 'ST2042-JAS', 'ST2001-HPNL', 'ST2080-DSJ', 'ST2200-YY', 'ST2002-LJZ',
            'ST2000-PDNL', 'ST2000-YSL', 'ST22000-CYL', 'ST2000-XPL', 'ST2020-YSL', 'ST2100-LTL',
            'ST2000-HYL', 'ST2000-YHL', 'ST2000-PDZQC', 'ST2000-JUL', 'ST2000-GQL'
        ],
        paths: [
            'segment14211422', 'segment14221423', 'segment14231424', 'segment14241425', 'segment14251426',
            'segment14261427', 'segment14271428', 'segment14281429', 'segment14291430', 'segment14301431',
            'segment14311432', 'segment14321433', 'segment14331434', 'segment14341435', 'segment14351436',
            'segment14361437', 'segment14371438', 'segment14381439', 'segment14391440', 'segment14401441',
            'segment14411442', 'segment14421443', 'segment14431445', 'segment14451446', 'segment14461447',
            'segment14471448', 'segment14481449', 'segment14491450', 'segment14501451'
        ]
    },
    line15: {
        st: 'ST4040-GCGY',
        ed: 'ST4000-ZZGXQ',
        stations: [
            'ST4040-GCGY', 'ST4000-JQL', 'ST4000-FXL', 'ST4000-NDL', 'ST4000-QAL', 'ST4000-GLL', 'ST4000-WWDL',
            'ST4400-SHXZ', 'ST6000-TCL', 'ST4000-MLBL', 'ST5000-DDHL', 'ST4000-CFGY', 'ST4002-LSGL', 'ST4000-HBSL',
            'ST4000-YHL', 'ST4000-WZL', 'ST4100-GLL', 'ST4800-GLGY', 'ST4005-SHNZ', 'ST4000-HDLGDX', 'ST4000-LXL',
            'ST4000-ZML', 'ST4000-HJX', 'ST4000-HMNL', 'ST4000-JXL', 'ST4000-SJL', 'ST4000-SBL', 'ST4000-YJL',
            'ST4000-YDL', 'ST4000-ZZGXQ'

        ],
        paths: [
            'segment15491550', 'segment15481549', 'segment15471548', 'segment15461547', 'segment15451546',
            'segment15441545', 'segment15431544', 'segment15421543', 'segment15411542', 'segment15401541',
            'segment15391540', 'segment15381539', 'segment15371538', 'segment15361537', 'segment15351536',
            'segment15341535', 'segment15331534', 'segment15321533', 'segment15311532', 'segment15301531',
            'segment15281529', 'segment15291530', 'segment15271528', 'segment15261527', 'segment15251526',
            'segment15241525', 'segment15231524', 'segment15221523', 'segment15211522'
        ]
    },
    line16: {
        st: 'ST28042-LYL',
        ed: 'ST8000-DSH',
        stations: [
            'ST28042-LYL', 'ST9000-HXZL', 'ST8400-LSL', 'ST8000-ZPD', 'ST8000-HSHC', 'ST8000-HTD',
            'ST8000-XC', 'ST8000-YSDWY', 'ST8000-HN', 'ST8000-HND', 'ST8000-SY', 'ST8000-LGDD', 'ST8000-DSH'
        ],
        paths: [
            'segment16211622', 'segment16221623', 'segment16231624', 'segment16241625', 'segment16251626',
            'segment16261627', 'segment16271628', 'segment16281629', 'segment16291630', 'segment16301631',
            'segment16311632', 'segment16321633'
        ]
    },
    line17: {
        st: 'ST10000-DFLZ',
        ed: 'ST10202-HQHCZ',
        stations: [
            'ST10000-DFLZ', 'ST10000-ZJJ', 'ST10000-DSHDD', 'ST10000-CYL', 'ST10000-QPXC', 'ST10000-HJL',
            'ST10000-ZX', 'ST10000-JSZL', 'ST10000-XJBC', 'ST10000-XYL', 'ST10000-PLL', 'ST10000-CGL',
            'ST10202-HQHCZ',
        ],
        paths: [
            'segment17321733', 'segment17311732', 'segment17301731', 'segment17291730', 'segment17281729',
            'segment17271728', 'segment17261727', 'segment17251726', 'segment17241725', 'segment17231724',
            'segment17221723', 'segment17211722'
        ]
    },
    line18: {
        st: 'ST20004-CJNL',
        ed: 'ST20000-HT',
        stations: [
            'ST20004-CJNL', 'ST20000-YGL', 'ST20000-SHCJDX', 'ST20000-FDDX', 'ST20200-GQL', 'ST20000-FSL',
            'ST20080-JPL', 'ST20800-JPGY', 'ST20000-PLL', 'ST20000-DYL', 'ST22000-CYL', 'ST20020-MSL',
            'ST20100-YGZL', 'ST20000-YCL', 'ST28042-LYL', 'ST20000-FXL', 'ST20000-BZL', 'ST21000LXL',
            'ST20400-YQ', 'ST20000-KQ', 'ST20000-ZP', 'ST20000-FRL', 'ST20000-SML', 'ST20000-HTL',
            'ST20000-XS', 'ST20000-HT'
        ],
        paths: [
            'segment18451846', 'segment18441845', 'segment18431844', 'segment18421843', 'segment18411842',
            'segment18401841', 'segment18391840', 'segment18381839', 'segment18371838', 'segment18361837',
            'segment18351836', 'segment18341835', 'segment18331834', 'segment18321833', 'segment18311832',
            'segment18301831', 'segment18291830', 'segment18281829', 'segment18271828', 'segment18261827',
            'segment18251826', 'segment18241825', 'segment18231824', 'segment18221823', 'segment18211822'
        ]
    },
    // 浦江线
    line41: {
        st: 'ST10000000080-SDGL',
        ed: 'ST10000000000-HZL',
        stations: [
            'ST10000000080-SDGL', 'ST10000000000-SLGL', 'ST10000000000-MRL', 'ST10000000000-PHL',
            'ST10000000000-DCYL', 'ST10000000000-HZL'
        ],
        paths: [
            'segment4101', 'segment4102', 'segment4103', 'segment4104', 'segment4105'
        ]
    },
}


// console.log(map.line01.paths.length)



Object.keys(map).forEach(line => {

    const paths = map[line].paths;
    const stations = map[line].stations;
    const subways = {}
    for (let i = 0; i < paths.length; i++) {
        const element = paths[i]
        subways[element] = {}
        subways[element].st = stations[i]
        subways[element].ed = stations[i + 1]
    }
    map[line].subways = subways
})


// console.log(map)

window.mapJSON = map

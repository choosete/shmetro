/*

   1. 站点id(ST_), 关联path路径的id(segmentxx)

   2. 以线路为分组，线路有方向

   3. 换乘站点涉及到多个线路，单独处理


   {
       line01:{
           start: //起点站点id
           end:   //终点id
           stations:[]
           paths:[ // 按照线路方向排序
               {
                   id: 'segment',
                   st: 
                   ed:
               },
                {
                   id: 'segment',
                   st: 
                   ed:
               },
           ]
       }
   }

   //换乘站点
   {
       名称:[line01,line02]
   }


 */

const stations = require('./assets/metromap.json').levels[0].locations; // []



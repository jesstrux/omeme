import { FETCH_IMAGES, SWITCH_TABS } from "../actions";
import { formatImages } from "../api";
import { filter } from "lodash";
// export default function() {
//     return [{h:201,w:480,src:'https://i.imgur.com/hg4qWC4.gif',thumb:'https://i.imgur.com/hg4qWC4m.gif',size:1217602},{h:2220,w:1080,src:'https://i.imgur.com/Aa3dhDe.jpg',thumb:'https://i.imgur.com/Aa3dhDem.jpg',size:195472},{h:2560,w:1312,src:'https://i.imgur.com/oEChHoB.png',thumb:'https://i.imgur.com/oEChHoBm.png',size:503888},{h:1749,w:1440,src:'https://i.imgur.com/ehsD75b.jpg',thumb:'https://i.imgur.com/ehsD75bm.jpg',size:867844},{h:1022,w:1080,src:'https://i.imgur.com/rkUbWG7.jpg',thumb:'https://i.imgur.com/rkUbWG7m.jpg',size:87308},{h:315,w:600,src:'https://i.imgur.com/ULPorsP.jpg',thumb:'https://i.imgur.com/ULPorsPm.jpg',size:73527},{h:787,w:720,src:'https://i.imgur.com/JsRkl1u.png',thumb:'https://i.imgur.com/JsRkl1um.png',size:1157786},{h:950,w:960,src:'https://i.imgur.com/Ufbz7p9.png',thumb:'https://i.imgur.com/Ufbz7p9m.png',size:604572},{h:787,w:720,src:'https://i.imgur.com/L3CTIMv.png',thumb:'https://i.imgur.com/L3CTIMvm.png',size:1161383},{h:801,w:1080,src:'https://i.imgur.com/rAOc83P.jpg',thumb:'https://i.imgur.com/rAOc83Pm.jpg',size:168389},{h:210,w:1080,src:'https://i.imgur.com/o5G7uyC.jpg',thumb:'https://i.imgur.com/o5G7uyCm.jpg',size:53309},{h:900,w:728,src:'https://i.imgur.com/0tc21Gq.jpg',thumb:'https://i.imgur.com/0tc21Gqm.jpg',size:169019},{h:543,w:493,src:'https://i.imgur.com/VCghXaI.jpg',thumb:'https://i.imgur.com/VCghXaIm.jpg',size:96612},{h:540,w:540,src:'https://i.imgur.com/NsgvwD1.jpg',thumb:'https://i.imgur.com/NsgvwD1m.jpg',size:8212},{h:1536,w:2048,src:'https://i.imgur.com/w8BKjh6.jpg',thumb:'https://i.imgur.com/w8BKjh6m.jpg',size:948154},{h:1536,w:2048,src:'https://i.imgur.com/BTDwKpT.jpg',thumb:'https://i.imgur.com/BTDwKpTm.jpg',size:877594},{h:2048,w:1536,src:'https://i.imgur.com/T8HkTEk.jpg',thumb:'https://i.imgur.com/T8HkTEkm.jpg',size:788354},{h:314,w:236,src:'https://i.imgur.com/tuMurUy.jpg',thumb:'https://i.imgur.com/tuMurUym.jpg',size:14815},{h:1028,w:720,src:'https://i.imgur.com/BjM9WOY.mp4',thumb:'https://i.imgur.com/BjM9WOYm.mp4',size:2112437},{h:528,w:680,src:'https://i.imgur.com/0SYySYK.jpg',thumb:'https://i.imgur.com/0SYySYKm.jpg',size:167005},{h:800,w:800,src:'https://i.imgur.com/7Szmn2W.jpg',thumb:'https://i.imgur.com/7Szmn2Wm.jpg',size:94315},{h:4032,w:3024,src:'https://i.imgur.com/yJBh5J2.jpg',thumb:'https://i.imgur.com/yJBh5J2m.jpg',size:594922},{h:9350,w:800,src:'https://i.imgur.com/zAI1K0Z.jpg',thumb:'https://i.imgur.com/zAI1K0Zm.jpg',size:2107926},{h:3264,w:1836,src:'https://i.imgur.com/bGbvhDO.jpg',thumb:'https://i.imgur.com/bGbvhDOm.jpg',size:311393},{h:960,w:539,src:'https://i.imgur.com/A7iRVco.jpg',thumb:'https://i.imgur.com/A7iRVcom.jpg',size:31841},{h:1400,w:1400,src:'https://i.imgur.com/MWguJ5Q.jpg',thumb:'https://i.imgur.com/MWguJ5Qm.jpg',size:239662},{h:2800,w:2800,src:'https://i.imgur.com/2PH169J.jpg',thumb:'https://i.imgur.com/2PH169Jm.jpg',size:3453386},{h:600,w:600,src:'https://i.imgur.com/sU0kPiV.jpg',thumb:'https://i.imgur.com/sU0kPiVm.jpg',size:83557},{h:584,w:415,src:'https://i.imgur.com/4KazuRE.jpg',thumb:'https://i.imgur.com/4KazuREm.jpg',size:45613},{h:500,w:341,src:'https://i.imgur.com/PKi8ZqW.jpg',thumb:'https://i.imgur.com/PKi8ZqWm.jpg',size:48789},{h:741,w:540,src:'https://i.imgur.com/plPNtBl.jpg',thumb:'https://i.imgur.com/plPNtBlm.jpg',size:86322},{h:960,w:616,src:'https://i.imgur.com/t1b9QPk.jpg',thumb:'https://i.imgur.com/t1b9QPkm.jpg',size:95438},{h:718,w:960,src:'https://i.imgur.com/ATHwJ9d.jpg',thumb:'https://i.imgur.com/ATHwJ9dm.jpg',size:106155},{h:880,w:960,src:'https://i.imgur.com/nesKC7v.jpg',thumb:'https://i.imgur.com/nesKC7vm.jpg',size:71354},{h:737,w:750,src:'https://i.imgur.com/rbngcfi.jpg',thumb:'https://i.imgur.com/rbngcfim.jpg',size:52117},{h:376,w:391,src:'https://i.imgur.com/Nm8PDrV.jpg',thumb:'https://i.imgur.com/Nm8PDrVm.jpg',size:34764},{h:7053,w:500,src:'https://i.imgur.com/iuz2Svm.jpg',thumb:'https://i.imgur.com/iuz2Svmm.jpg',size:661887},{h:586,w:500,src:'https://i.imgur.com/Be8XlW7.jpg',thumb:'https://i.imgur.com/Be8XlW7m.jpg',size:71214},{h:960,w:780,src:'https://i.imgur.com/Z3KXtF9.jpg',thumb:'https://i.imgur.com/Z3KXtF9m.jpg',size:272588},{h:525,w:369,src:'https://i.imgur.com/Iic1Vo2.jpg',thumb:'https://i.imgur.com/Iic1Vo2m.jpg',size:49413},{h:656,w:368,src:'https://i.imgur.com/9yevIbj.gif',thumb:'https://i.imgur.com/9yevIbjm.gif',size:6654982},{h:1618,w:1280,src:'https://i.imgur.com/zx6r1FU.jpg',thumb:'https://i.imgur.com/zx6r1FUm.jpg',size:353356},{h:1416,w:1584,src:'https://i.imgur.com/TMldTuY.png',thumb:'https://i.imgur.com/TMldTuYm.png',size:1141315},{h:398,w:400,src:'https://i.imgur.com/dEDBpC4.jpg',thumb:'https://i.imgur.com/dEDBpC4m.jpg',size:42847},{h:1518,w:854,src:'https://i.imgur.com/nzpA9ps.mp4',thumb:'https://i.imgur.com/nzpA9psm.mp4',size:3607012},{h:515,w:941,src:'https://i.imgur.com/bNeMAlC.png',thumb:'https://i.imgur.com/bNeMAlCm.png',size:273143},{h:711,w:741,src:'https://i.imgur.com/GUTJJF0.jpg',thumb:'https://i.imgur.com/GUTJJF0m.jpg',size:76905},{h:317,w:400,src:'https://i.imgur.com/hq18Qnr.png',thumb:'https://i.imgur.com/hq18Qnrm.png',size:30698},{h:623,w:622,src:'https://i.imgur.com/nOaAP8d.jpg',thumb:'https://i.imgur.com/nOaAP8dm.jpg',size:110433},{h:906,w:800,src:'https://i.imgur.com/zZXaaEh.jpg',thumb:'https://i.imgur.com/zZXaaEhm.jpg',size:90188},{h:1920,w:933,src:'https://i.imgur.com/EldnIzy.jpg',thumb:'https://i.imgur.com/EldnIzym.jpg',size:601058},{h:375,w:500,src:'https://i.imgur.com/QxLAHcS.jpg',thumb:'https://i.imgur.com/QxLAHcSm.jpg',size:49022},{h:800,w:600,src:'https://i.imgur.com/kPJCDJJ.jpg',thumb:'https://i.imgur.com/kPJCDJJm.jpg',size:32784},{h:1563,w:1327,src:'https://i.imgur.com/Jbk1z26.png',thumb:'https://i.imgur.com/Jbk1z26m.png',size:1484653},{h:180,w:500,src:'https://i.imgur.com/yOpT7HD.gif',thumb:'https://i.imgur.com/yOpT7HDm.gif',size:551128},{h:450,w:617,src:'https://i.imgur.com/WE7lkvw.jpg',thumb:'https://i.imgur.com/WE7lkvwm.jpg',size:29125},{h:2000,w:1213,src:'https://i.imgur.com/Eo6C7Am.jpg',thumb:'https://i.imgur.com/Eo6C7Amm.jpg',size:231318},{h:5312,w:2988,src:'https://i.imgur.com/JJvqCN0.jpg',thumb:'https://i.imgur.com/JJvqCN0m.jpg',size:1309294},{h:404,w:720,src:'https://i.imgur.com/jWwdP9C.mp4',thumb:'https://i.imgur.com/jWwdP9Cm.mp4',size:4746999},{h:4032,w:3024,src:'https://i.imgur.com/9uZYDnl.jpg',thumb:'https://i.imgur.com/9uZYDnlm.jpg',size:2135551},{h:784,w:500,src:'https://i.imgur.com/zfTbz7q.jpg',thumb:'https://i.imgur.com/zfTbz7qm.jpg',size:71405},{h:687,w:777,src:'https://i.imgur.com/hbt5bda.png',thumb:'https://i.imgur.com/hbt5bdam.png',size:159173},{h:480,w:480,src:'https://i.imgur.com/vRQuJfz.jpg',thumb:'https://i.imgur.com/vRQuJfzm.jpg',size:28589},{h:883,w:660,src:'https://i.imgur.com/os3c4Ze.jpg',thumb:'https://i.imgur.com/os3c4Zem.jpg',size:73315},{h:3264,w:2448,src:'https://i.imgur.com/RHgQWV3.jpg',thumb:'https://i.imgur.com/RHgQWV3m.jpg',size:902270},{h:884,w:1066,src:'https://i.imgur.com/1cu4pBI.png',thumb:'https://i.imgur.com/1cu4pBIm.png',size:789562},{h:576,w:421,src:'https://i.imgur.com/VodscmE.jpg',thumb:'https://i.imgur.com/VodscmEm.jpg',size:95347}]
// }

const initialState = {
  default: [],
  filtered: []
};

export default function gifs(state = initialState, action) {
    switch (action.type) {
      case FETCH_IMAGES:
        let images = formatImages(action.payload.body.data);

        images = images.slice(0,50).map( img => {
          const src = img.src;
          const ext = src.substring(src.lastIndexOf(".") + 1);
          img.type = ext === "gif" ? "gif" : "meme";
    
          return img;
        });

        return {
          ...state, default: images, filtered: images
        };
      case SWITCH_TABS:
        let tab = action.tab;
        if(tab > 0) 
          return {
            ...state, filtered: filter(state.default, ["type", tab === 1 ? "meme" : "gif"])
          };
        else
          return {
            ...state, filtered: state.default
          };
      default:
        return state;
    }
}
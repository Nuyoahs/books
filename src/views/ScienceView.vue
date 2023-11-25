<script setup>
import {reactive} from 'vue';
let arr = reactive([
    {id:1,img:'../assets/science/science001.jpg',msg:'科研项目',text:'科研项目是开展高水平科学研究和支撑高质量人才培养的重要依托，也是引领学科发展的重要力量。国家科技计划（专项、基金等）是我校科研项目和经费的重要来源。',
    list:[
        {title:'科研项目概况'},
        {title:'新立重大项目'},
        {title:'重点推广项目'}
    ]},
    {id:2,img:'../assets/science/science002.jpg',msg:'科研机构',text:'清华大学科研机构根据其批准设立的主体不同，分为三类，包括政府批准机构、学校自主设立机构和学校与校外独立法人单位联合共建机构。',
    list:[
        {title:'政府批准机构'},
        {title:'自主设立机构'},
        {title:'联合共建机构'}
    ]},
    {id:3,img:'../assets/science/science003.jpg',msg:'科研合作',text:'清华大学面向国民经济主战场，同国家战略发展地区、行业龙头企业等开展深度产学研合作，推进重大项目和平台建设，为创建创新型国家做出重要贡献。清华大学与世界一流大学、研究机构和海外知名跨国企业积极开展前瞻性、高水平的科研合作与交流，提升科研水平，促进学科建设，提升学校学术科研的国际影响力和知名度。',
    list:[
        {title:'地方合作'},
        {title:'企业合作'},
        {title:'海外合作'}
    ]},
    {id:4,img:'../assets/science/science004.jpg',msg:'科研成果',text:'围绕建设世界一流大学，清华大学瞄准世界科技前沿和国家重大需求，在重大基础研究、战略高技术、服务经济发展等方面，取得了一批重要科研成果。',
    list:[
        {title:'获奖成果'},
        {title:'论文显著'}
    ]},
    {id:5,img:'../assets/science/science005.jpg',msg:'技术转移',text:'将现有的科技成果通过技术许可、技术转让、技术作价投资等方式转移到企业实施运用',
    },
    {id:6,img:'../assets/science/science006.jpg',msg:'学术交流',text:'随着学校世界一流大学建设和全球战略的全面推进，学校积极开展多渠道、高层次、实质性的科研合作与学术交流活动，高水平论坛、国际学术会议、学术期刊日益成为学校人才培养、科学研究、合作交流的重要平台。',
    list:[
        {title:'清华论坛'},
        {title:'国际会议'},
        {title:'学术期刊'}
    ]},
])
let yj = reactive([
    {id:1,img:'../assets/science/yj001.jpg',text:'材料学院刘锴课题组在二维可重构器件方面取得进展'},
    {id:2,img:'../assets/science/yj002.jpg',text:'生命学院颉伟课题组揭示哺乳动物基因组激活到第一次细胞命运决定转换的...'},
    {id:3,img:'../assets/science/yj003.jpg',text:'自动化系谢震团队提出环状RNA的可编程翻译调控策略实现目标细胞类型的精...'},
    {id:4,img:'../assets/science/yj004.jpg',text:'电子系方璐团队在大规模光电智能计算方向取得进展'},
    {id:5,img:'../assets/science/yj005.png',text:'化工系生物育种技术与装备团队报道高精度对蛋白表达特征进行大规模并行...'},
    {id:6,img:'../assets/science/yj006.jpg',text:'机械系温鹏团队合作提出机器学习超材料设计方法用于3D打印多孔骨植入物'},
])
</script>
<template>
    <div class="science">
        <div class="image">
            <div class="img">
                <img src="../assets/science/banner.jpg" alt="">
            </div>
            <div class="titlebox">
                <div class="title">
                    <p>教育教学</p>
                    <span>
                        建校早期，清华就确立了"培植全才，增进国力" 的宗旨。百年树人，桃李芬芳，十七万莘莘学子 在清华精神熏陶下奋发向上，一大批治学、兴业、治国的英才挺起民族的脊梁。
                    </span>
                </div>
            </div>
        </div>
        <div class="scient">
            <ul>
                <li v-for="item,index in arr" :key="index">
                    <div class="text">
                        <h4>{{item.msg}}</h4>
                        <span>{{ item.text }}</span>
                        <p v-for="items,indexs in item.list" :key="indexs">{{items.title}}<img src="../assets/rr6.png" alt=""></p>
                    </div>
                    <div class="pic">
                        <img :src="item.img" alt="">
                    </div>
                </li>
            </ul>
        </div>
        <div class="reserach">
            <div class="title">
                <h5>学术研究在清华</h5>
            </div>
            <ul>
                <li v-for="item,index in yj" :key="index">
                    <div class="img">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="txt">
                        <p>{{ item.text }}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bz"></div>
    </div>
</template>
<style scoped>
.science{
    display: flex;
    flex-direction:column;
    align-items: center;
}
.image{
    width:100%;
    height:34.5rem;
}
.image>.img{
    position:relative;
    z-index:1;
}
.image>.img>img{
    display: block;
    width:100%;
    height:100%;
}
.image>.titlebox{
    position:relative;
    z-index:10;
}
.image>.titlebox>.title {
    position: absolute;
    top: -15rem;
    left: 10rem;
    width: 44rem;
    height: auto;
    color: #fff;
}

.image>.titlebox>.title>p {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.image>.titlebox>.title>span {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
}

.scient{
    width:70%;
}
.scient>ul>li{
    display: flex;
    justify-content: space-between;
    margin-bottom:5rem;
    height:16.3rem;
    border-left:0.5rem solid #791CB5;
}
.scient>ul>li>.text{
    width:32rem;
    height:16.3rem;
    margin-left:2.5rem;
}
.scient>ul>li>.text>h4{
    font-size:2rem;
    font-weight:400;
    margin-bottom:1rem;
}
.scient>ul>li>.text>span{
    display: block;
    color:#929292;
    font-size:0.9rem;
    margin-bottom:2rem;
}
.scient>ul>li>.text>p{
    display: block;
    font-size:1.1rem;
    color:#791CB5;
    margin-bottom:1.3rem;
}
.scient>ul>li>.pic{
    width:25.3rem;
    height:100%;
    background:skyblue;
}

.reserach{
    width:90%;
    height:auto;
    margin-bottom:5rem;
    background: #791CB5;
}
.reserach>.title{
    width:80%;
    height:2.5rem;
    margin:1rem auto;
    border-left:0.2rem solid #fff;
}
.reserach>.title>h5{
    display: block;
    font-size:1.5rem;
    margin-left:2rem;
    line-height:2.5rem;
    color:#fff;
}
.reserach>ul{
    display: flex;
    flex-wrap: wrap;
}
.reserach>ul>li{
    width:calc(100% / 3);
    height:18.5rem;
    background:sandybrown;
}
.reserach>ul>li>.img{
    width:100%;
    height:100%;
}
.reserach>ul>li>.txt{
    width:100%;
    height:8rem;
    position:relative;
    left:0;
    bottom:8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* line-height: 4rem; */
}
.reserach>ul>li>.txt>p{
    display: block;
    width:86%;
    height:auto;
    font-size:1.1rem;
    color:#fff;
}
/* .bz{
    position:relative;
    bottom:55rem;
    left:0;
    background:url('../assets/assets/science/bg4.jpg') no-repeat center;
    width:100%;
    height:10rem;
    z-index:10;
} */
</style>
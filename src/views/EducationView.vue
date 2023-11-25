<script setup>
import {reactive} from 'vue';
let recent = reactive([
    {title:'清华大学三位教师在第五届全国高校混合式教学设计创新大赛中获得佳绩'},
    {title:'2022年度北京市科学技术奖揭晓 清华荣获突出贡献中关村奖1人，成果奖一等奖7项...'},
    {title:'清华大学物理人才培养“攀登计划”启动仪式举行'},
    {title:'2023年清华大学本科生特等奖学金答辩会举行'},
    {title:'第一届“王玉明科技强基奖”颁奖典礼举行'},
    {title:'清华大学在第十八届全国“挑战杯”竞赛中取得佳绩'}
])
</script>
<template>
    <div class="education">
        <div class="image">
            <div class="img">
                <img src="../assets/education/banner.jpg" alt="">
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
        <div class="teachbox">
            <div class="teach">
                <div class="title">
                    <h4>师资队伍</h4>
                    <p>清华大学培育和凝聚了一批又一批高水平的专家学者。近年来，学校遵循"引进与培养并举"的方针，加强青年教师队伍建设，在国内外选聘优秀人才，师资队伍水平稳步提高。</p>
                </div>
                <div class="main">
                    <ul class="ul1">
                        <li>
                            <img src="../assets/education/jsrs.png" alt="">
                            <p>国际重要奖励获得者</p>
                        </li>
                        <li>
                            <img src="../assets/education/kxyys.png" alt="">
                            <p>中国中科院院士</p>
                        </li>
                        <li>
                            <img src="../assets/education/gcyys.png" alt="">
                            <p>中国工程院院士</p>
                        </li>
                    </ul>
                    <ul class="ul2">
                        <li>
                            <h4>125</h4>
                            <p>历任国家及北京市教学名师奖获得者</p>
                        </li>
                        <li>
                            <h4>624</h4>
                            <p>历任清华大学荣誉奖励获得者</p>
                        </li>
                        <li>
                            <h4>3837</h4>
                            <p>教师人数</p>
                        </li>
                        <li>
                            <h4>2838</h4>
                            <p>博士后在站人数</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="educat">
            <div class="li">
                <img src="../assets/education/picLink01.jpg" alt="">
                <div>
                    <ul>
                        <li>本科专业</li>
                        <li>教学名师</li>
                        <li>优质课程</li>
                        <li>实质教学</li>
                        <li>教学成果</li>
                        <li>特色项目</li>
                    </ul>
                </div>
            </div>
            <div class="li">
                <img src="../assets/education/picLink02.jpg" alt="">
                <div>
                    <ul>
                        <li>学术学位教育</li>
                        <li>专业学位教学</li>
                        <li>课程与教学</li>
                        <li>国际化培养</li>
                        <li>授权学科</li>
                        <li>学位授予</li>
                        <li>奖助体系</li>
                        <li>工程博士项目</li>
                    </ul>
                </div>
            </div>
            <div class="li">
                <img src="../assets/education/picLink03.jpg" alt="">
                <div>
                    <ul>
                        <li>发展概况</li>
                        <li>平台介绍</li>
                        <li>优质在线资源</li>
                        <li>国际合作</li>
                        <li>在线教育研究</li>
                    </ul>
                </div>
            </div>
            <div class="li">
                <img src="../assets/education/picLink04.jpg" alt="">
                <div>
                    <ul>
                        <li>课程项目</li>
                        <li>精品项目</li>
                        <li>教师进修</li>
                        <li>教育扶贫与乡村振兴</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="recentbox">
            <div class="recent">
                <div class="title">
                    <h4>最新教学动态</h4>
                    <span>查看更多</span>
                </div>
                <div class="msg">
                    <ul>
                        <li v-for="item,index in recent" :key="index">
                            <div class="img">
                                <img src="" alt="">
                            </div>
                            <div>
                                <span>{{ item.title }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.education {
    display: flex;
    flex-direction: column;
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

.teachbox {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
}

.teach {
    width: 80%;
    height: auto;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.teach>.title {
    width: 80%;
    height: auto;
    text-align: center;
    margin-bottom: 2.5rem;
}

.teach>.title>h4 {
    font-size: 2rem;
    font-weight: 400;
    position: relative;
    margin-bottom: 2rem;
}

.teach>.title>h4::before {
    content: '';
    position: absolute;
    left: 45%;
    top: 2.8rem;
    width: 5rem;
    height: 0.3rem;
    background: #791CB5;
}

.teach>.title>p {
    color: #929292;
}

.teach>.main>.ul1 {
    display: flex;
    margin: 2rem;
}

.teach>.main>.ul1>li {
    width: 19rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.teach>.main>.ul1>li:nth-child(2) {
    border-left: 1px solid #929292;
    border-right: 1px solid #929292;
}

.teach>.main>.ul1>li>img {
    display: block;
    width: 8rem;
    height: 8rem;
}

.teach>.main>.ul2 {
    display: flex;
    justify-content: center;
}

.teach>.main>.ul2>li {
    width: 13.5rem;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.teach>.main>.ul2>li>h4 {
    font-size: 4.8rem;
    color: #791CB5;
}

.teach>.main>.ul2>li>p {
    font-size: 0.8rem;
}

.teach>.main>.ul2>li:nth-child(2) {
    border-left: 1px solid #929292;
    border-right: 1px solid #929292;
}

.teach>.main>.ul2>li:nth-child(3) {
    border-right: 1px solid #929292;
}

.educat {
    width: 100%;
    height: auto;
    margin-bottom: 5rem;
    display: flex;
}

.educat>.li {
    width: calc(100% / 4);
    height: 38rem;
    border-bottom: 0.1px solid #ccc;
    border-top: 0.1px solid #ccc;
}

.educat>.li:nth-child(2) {
    border-left: 0.1px solid #ccc;
    border-right: 0.1px solid #ccc;
}

.educat>.li:nth-child(3) {
    border-right: 0.1px solid #ccc;
}
.educat>.li>img{
    display: block;
    width:100%;
    height:16.5rem;
}
.educat>.li>div>ul{
    display: flex;
    flex-wrap: wrap;
}
.educat>.li>div>ul>li{
    width:7rem;
    height:auto;
    font-size:1.3rem;
    margin-top:2rem;
    margin-left:2.5rem;
}
.educat>.li>div>ul>li:hover{
    color:red
}

.recentbox{
    width:1005;
    height:auto;
    margin-bottom:5rem;
    display: flex;
    justify-content: center;
}
.recent{
    width:90%;
    height:auto;
    display: flex;
    flex-direction:column;
    align-items:center;
}
.recent>.title{
    width:80%;
    height:3rem;
    margin-bottom:1.5rem;
    display: flex;
    justify-content: space-between;
    border-left:0.2rem solid #791CB5;
    align-items: center;
}
.recent>.title>h4{
    font-size:1.6rem;
    font-weight:400;
    margin-left:1.5rem;
}
.recent>.title>span{
    color:#791CB5;
    position:relative;
}
.recent>.title>span::before{
    content:'';
    position:absolute;
    top:2rem;
    left:0;
    width:4rem;
    height:0.1rem;
    background:#791CB5;
}
.recent>.msg{
    width:100%;
    height:auto;
}
.recent>.msg>ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.recent>.msg>ul>li{
    width:27rem;
    height:17rem;
}
.recent>.msg>ul>li>.img{
    width:100%;
    height:100%;
}
.recent>.msg>ul>li>div>img{
    display: block;
    width:100%;
    height:100%;
}
.recent>.msg>ul>li>div>span{
    position:relative;
}
.recent>.msg>ul>li>div>span::before{
    content:'';
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    height:13rem;
}
</style>
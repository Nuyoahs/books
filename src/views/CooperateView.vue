<script setup>
import { reactive } from 'vue'
let cnco = reactive([
    { title: '全面合作' },
    {
        title: '科研合作', list: [
            { text: '科学研究' },
            { text: '技术转移' }
        ]
    },
    {
        title: '人才培养与交流', list: [
            { text: '学生就业' },
            { text: '学生社会实践' }
        ]
    },
    { title: '终生教育' },
    { title: '战略咨询与智库' },
    { title: '校地合作研究院' },
    { title: '对口支援与定点帮扶' },
])
let gjhz = reactive([
    {
        title: '全球战略', list: [
            { msg: '海外基地' },
            { msg: '世界大学联盟' }
        ]
    },
    { title: '全球胜任力' },
    { title: '国际学生学者' },
    { title: '国际校园' },
    { title: '海外合作' },
    {
        title: '暑期学校', list: [
            { msg: '云上全球暑期学校GSS' },
            { msg: '院系暑期学校' }
        ]
    },
    { title: '清华共识' }
])
let news = reactive([
    { title: '校长王希勤会见新加坡卫生部部长王乙康' },
    { title: '校长王希勤赴广州调研 深化市校合作' },
    { title: '校党委副书记过勇带队赴烟台、青岛访问并看望慰问校友' },
    { title: '石家庄市与清华大学座谈会暨全面合作框架协议签署仪式举行' },
    { title: '校长王希勤会见意大利驻华大使安博思一行' },
    { title: '校党委副书记过勇会见国际原子能机构人力资源司司长彼得·福洛...' }
])
</script>
<template>
    <div class="cooperate">
        <div class="image">
            <div class="img">
                <img src="../assets/cooperate/bz.png" alt="">
            </div>
            <div class="titlebox">
                <div class="title">
                    <p>合作交流</p>
                    <span>清华大学深度参与国家创新驱动发展战略实施，与多个部委、省市、企业等深入开展科技、人才、教育、咨询等全方位的合作。清华大学积极开展多渠道、高层次、实质性的国际合作与交流活动，加强国际化能力建设；与一批世界知名大学和机构建立了战略伙伴关系，在面向全球性重大问题进行学术研究、科技研发和决策咨询方面发挥了重要作用。</span>
                </div>
            </div>
        </div>
        <div class="cncobox">
            <div class="cnco">
                <div class="title">
                    <h4>国内合作</h4>
                    <p>清华大学坚持服务国家，深度参与创新驱动发展战略实施，建设校地合作研究院，与各级地方政府、企业、高校、中央部委、事业单位等国内合作对象，在科学研究、人才培养、终身教育、战略咨询等方面开展全面合作。
                    </p>
                </div>
                <div class="main">
                    <ul>
                        <li v-for="item, index in cnco" :key="index">
                            <h4>{{ item.title }}</h4>
                            <p v-for="items, index in item.list" :key="index">{{ items.text }} <img src="../assets/rr6.png"
                                    alt=""></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="gjhzbox">
            <div class="gjhz">
                <div class="title">
                    <h4>国际合作</h4>
                    <p>清华大学积极开展多渠道、高层次、实质性的国际合作与交流活动，加强国际化能力建设；与一批世界知名大学和机构建立了战略伙伴关系，在面向全球性重大问题进行学术研究、科技研发和决策咨询方面发挥了重要作用。通过联合培养、学生交换、开设海外名师讲堂和主办国际会议等多种形式，培养具有全球视野、能够适应国际竞争的拔尖创新人才；通过策划推进重大国际文化和学术交流活动，提升学校国际声誉和学术影响力。
                    </p>
                </div>
                <div class="main">
                    <ul>
                        <li v-for="item, index in gjhz" :key="index">
                            <h4>{{ item.title }}</h4>
                            <p v-for="items, index in item.list" :key="index">
                                {{ items.msg }} 
                                <img src="../assets/rr6.png" alt="">
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="newsbox">
            <div class="news">
                <div class="title">
                    <h4>合作交流最新动态</h4>
                    <span>查看更多</span>
                </div>
                <div class="msg">
                    <ul>
                        <li v-for="item, index in news" :key="index">
                            <div class="img">
                                <img src="" alt="">
                            </div>
                            <div class="title">
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
.cooperate {
    display: flex;
    flex-direction: column;
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

.cncobox {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cncobox>.cnco {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.cncobox>.cnco>.title {
    width: 80%;
    height: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
}

.cncobox>.cnco>.title>h4 {
    font-size: 2rem;
    font-weight: 500;
    position: relative;
    margin-bottom: 2rem;
}

.cncobox>.cnco>.title>h4::after {
    content: '';
    position: absolute;
    top: 3rem;
    left: 2rem;
    display: block;
    width: 4rem;
    height: 0.3rem;
    background: #791CB5;
}

.cncobox>.cnco>.title>p {
    font-size: 1rem;
    text-align: center;
    color: #929292;
}

.cncobox>.cnco>.main>ul {
    display: flex;
    flex-wrap: wrap;
}

.cncobox>.cnco>.main>ul>li {
    width: 18.5rem;
    height: auto;
    margin-bottom: 3rem;
    border-left: 0.1rem solid #791CB5;
}

.cncobox>.cnco>.main>ul>li>h4 {
    margin-left: 1.5rem;
    font-size: 1.7rem;
    font-weight: 500;
    margin-bottom: 1rem;
}

.cncobox>.cnco>.main>ul>li>p {
    font-size: 1.1rem;
    color: #791CB5;
    margin-bottom: 0.5rem;
    margin-left: 1.5rem;
}

.gjhzbox {
    width: 100%;
    height: auto;
    background: red;
    background: url(../assets/cooperate/bj.jpg) no-repeat center;
    display: flex;
    justify-content: center;
    align-items: end;
    margin-bottom: 5rem;
}

.gjhz {
    width: 80%;
    height: 88%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.gjhz>.title {
    width: 60%;
    color: #fff;
    text-align: center;
    margin-bottom: 5rem;
}

.gjhz>.title>h4 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
}

.gjhz>.title>p {
    font-size: 0.9rem;
}

.gjhz>.main {
    width: 100%;
    height: auto;
    background: #fff;
    display: flex;
    justify-content: center;
}

.gjhz>.main>ul {
    width: 80%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.gjhz>.main>ul>li {
    width: 16rem;
    height: auto;
    border-left: 1px solid #791CB5;
    margin-top: 3rem;
}

.gjhz>.main>ul>li>h4 {
    margin-left: 2rem;
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 1rem;
}

.gjhz>.main>ul>li>p {
    margin-left: 2rem;
    margin-bottom: 0.5rem;
    color: #791CB5;
}

.newsbox {
    width: 100%;
    height: 46rem;
    display: flex;
    justify-content: center;
}

.news {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.news>.title {
    width: 80%;
    height: 3rem;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    border-left: 0.2rem solid #791CB5;
    align-items: center;
}

.news>.title>h4 {
    font-size: 1.6rem;
    font-weight: 400;
    margin-left: 1.5rem;
}

.news>.title>span {
    color: #791CB5;
    position: relative;
}

.news>.title>span::before {
    content: '';
    position: absolute;
    top: 2rem;
    left: 0;
    width: 4rem;
    height: 0.1rem;
    background: #791CB5;
}

.news>.msg {
    width: 100%;
    height: auto;
}

.news>.msg>ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.news>.msg>ul>li{
    width: 27rem;
    height: 17rem;
    position:relative;
    display: flex;
    align-items: end;
}

.news>.msg>ul>li>.img {
    width: 100%;
    height: 100%;
    position:absolute;
    background:red;
    z-index:1;
}
.news>.msg>ul>li>.img>img{
    position:absolute;
    left:0;
    top:0;
}
.news>.msg>ul>li>.title{
    position:absolute;
    width:100%;
    height:30%;
    z-index:10;
    display: flex;
    justify-content: center;
}
.news>.msg>ul>li>.title>span{
    display: block;
    width:80%;
    font-size:1.2rem;
    /* text-align: center; */
    /* line-height:4.5rem; */
}
</style>
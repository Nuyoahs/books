<script setup>
import { reactive } from 'vue';
let point = reactive([
    { title: '出光华记：袁运甫艺术教育思想暨于会见、马泉、张大力、袁加...' },
    { title: '2023年度唯真讲坛系列理论宣讲：关于学习理解马克思主义中国...' },
    { title: '铁笔丹华： 谢磊明、方介堪、徐无闻篆刻艺术展' },
    { title: '中央芭蕾舞团经典芭蕾舞剧《天鹅湖》' },
    { title: '清华论坛第105讲暨清华五道口全球名师大讲堂:创业适配？中国...' },
    { title: '禮运东方：山东古代文明精粹' }
])
</script>
<template>
    <div class="walk">
        <div class="image">
            <div class="img">
                <img src="../assets/walk/bz.jpg" alt="">
            </div>
            <div class="titlebox">
                <div class="title">
                    <p>走进清华</p>
                    <span>
                        清华是一所有理想的大学，也是清华人实现自己梦想的殿堂。来到这里，你将获得学术大师对你人生梦想的指点，你将触碰到科技和学术梦想的最前沿，你将沐浴在共同追寻梦想的良好氛围中。
                    </span>
                </div>
            </div>
        </div>
        <div class="point">
            <div class="news">
                <div class="title">
                    <h4>合作交流最新动态</h4>
                    <span>查看更多</span>
                </div>
                <div class="msg">
                    <ul>
                        <li v-for="item, index in point" :key="index">
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
        <div class="scenerybox">
            <div class="scenery">
                <div class="title">
                    <h4>合作交流最新动态</h4>
                    <span>查看更多</span>
                </div>
                <div class="swiper">

                </div>
            </div>
        </div>
        <div class="inforbox">
            <div class="infor">
                <span>实用信息</span>
                <div>
                    <p>校园交通 <img src="../assets/rr6.png" alt=""></p>
                    <p>周边交通 <img src="../assets/rr6.png" alt=""></p>
                    <p>校园参观 <img src="../assets/rr6.png" alt=""></p>
                    <p>服务信息 <img src="../assets/rr6.png" alt=""></p>
                    <p>宣传资源 <img src="../assets/rr6.png" alt=""></p>
                    <p>清华校历 <img src="../assets/rr6.png" alt=""></p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.walk {
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

.point {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
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

.news>.msg>ul>li {
    width: 27rem;
    height: 17rem;
}

.news>.msg>ul>li>.img {
    width: 100%;
    height: 100%;
}

.news>.msg>ul>li>div>img {
    display: block;
    width: 100%;
    height: 100%;
}

.news>.msg>ul>li>div>span {
    position: relative;
}

.news>.msg>ul>li>div>span::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 13rem;
}

.scenerybox{
    width:100%;
    height:auto;
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
}
.scenery {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.scenery>.title {
    width: 80%;
    height: 3rem;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    border-left: 0.2rem solid #791CB5;
    align-items: center;
}

.scenery>.title>h4 {
    font-size: 1.6rem;
    font-weight: 400;
    margin-left: 1.5rem;
}

.scenery>.title>span {
    color: #791CB5;
    position: relative;
}

.scenery>.title>span::before {
    content: '';
    position: absolute;
    top: 2rem;
    left: 0;
    width: 4rem;
    height: 0.1rem;
    background: #791CB5;
}
.scenery>.swiper{
    width:100%;
    height:36rem;
}

.inforbox{
    width:100%;
    height:auto;
    display: flex;
    justify-content:center;
    margin-bottom:5rem;
}
.infor{
    width:75%;
    height:auto;
    border-left:0.2rem solid #791CB5;
}
.infor>span{
    margin-left:1rem;
    font-size:2rem;
}
.infor>div{
    margin-left:1rem;
    display: flex;
    flex-wrap:wrap;
    width:25rem;
    height:auto;
}
.infor>div>p{
    font-size:1.2rem;
    color:#791CB5;
    width:10rem;
    margin-top:1rem;
}
.infor>div>p>img{
    margin-left:1.5rem;
}
</style>
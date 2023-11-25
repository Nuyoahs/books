<script setup>
import {reactive} from 'vue'
let arr = reactive([
    {id:1,path:'../assets/beckon/pic11.png',text:'本科招生'},
    {id:2,path:'../assets/beckon/pic22.png',text:'研究生招生'},
    {id:3,path:'../assets/beckon/pic33.png',text:'博士生招生'},
]);
let text= reactive([
    '清华大学平均每年毕业学生（档案在校）约8000人，就业率长期保持高位，毕业生去向以工作就业、国内升学和出国（境）留学为主。',
    '2022年，清华大学毕业生就业人数较多的行业主要包括信息传输、软件和信息技术服务业，教育，公共管理、社会保障和社会组织，科学研究和技术服务业等。',
    '2022年，QS发布《全球大学毕业生就业力排名》，清华大学被评为全球第六，亚洲第一；2016-2022年，清华大学持续位列全球前十，亚洲第一。'
])
</script>
<template>
    <div class="beckon">
        <div class="image">
            <div class="titlebox">
                <div class="title">
                <p>招生就业</p>
                <span>
                    <span>32年前，我怀着人生梦想来到清华，从此就一直浸润在这个美丽而充满生机的园子里。今天，你们像当年的我一样，怀揣梦想、憧憬未来。如果你们要问我:“大学有多大？”我会告诉你们，“清华足够大，就看你的梦想有多大。”</span>
                    <i>--清华大学党委书记 邱勇</i>
                </span>
            </div>
            </div>
        </div>
        <div class="student">
            <div class="peoplenum">
                <div>
                    <p>16320</p>
                    <span>本科生</span>
                </div>
                <div>
                    <p>22423</p>
                    <span>研究生</span>
                </div>
                <div>
                    <p>20527</p>
                    <span>博士生</span>
                </div>
            </div>
            <div class="recruit">
                <div v-for="item,index in arr" :key="index">
                    <img :src="item.path" alt="">
                    <div>
                        <h4>
                            <span>{{item.text}}</span>
                            <img src="../assets/rr6.png" alt="">
                        </h4>
                        <p>你希望直接找哪些内容</p>
                    </div>
                </div>
            </div> 
        </div>
        <div class="careerbox">
            <div class="career">
                <div class="text">
                    <h5>学生职业发展<span></span></h5>
                    <p v-for="item,index in text" :key="index">{{ item }}</p>
                    <div>
                        <a href="">查看详细</a>
                        <img src="../assets/rr6.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.beckon{
    display:flex;
    flex-direction:column;
    align-items: center;
}
.image{
    width:100%;
    height:34rem;
    background:url(../assets/beckon/banner.jpg) no-repeat center center/100%;
    margin-bottom:5rem;
    display: flex;
    align-items: end;
}
.image>.titlebox{
    position:relative;
    width:100%;
    height:50%;
}
.image>.titlebox>.title{
    position:absolute;
    top:1rem;
    left:10rem;
    width:43rem;
    height:auto;
    color:#fff;
}
.image>.titlebox>.title>p{
    font-size:2rem;
    margin-bottom:1rem;
}
.image>.titlebox>.title>span{
    display: flex;
    flex-direction: column;
    font-size:1.2rem
}
.image>.titlebox>.title>span>i{
    text-align:right;
}

.student{
    width:90%;
    height:40rem;
    border-top:1px solid #ccc;
    position:relative;
}
.student::before{
    content:'在校学生人数';
    position:absolute;
    top:-1rem;
    left:46%;
    width:9rem;
    font-size:1.2rem;
    background:#fff;
    text-align:center;
    font-weight:bold;
}
.student>.peoplenum{
    display: flex;
    justify-content: space-between;
    margin-top:2rem;
}
.student>.peoplenum>div{
    width:28rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom:5rem;
}
.student>.peoplenum>div>p{
    color:#791CB5;
    font-size:5rem;
    font-weight:bold;
}
.student>.peoplenum>div>span{
    color:#909090;
    font-size:1.1rem;
}

.student>.recruit{
    display: flex;
    justify-content: space-between;
}
.student>.recruit>div{
    width:27rem;
    height:17.5rem;
    position:relative;
}
.student>.recruit>div>img{
    display:block;
    width:100%;
    height:100%;
}
.student>.recruit>div>div{
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    height:50%;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;
}
.student>.recruit>div>div>h4{
    display: block;
    width:80%;
    height:3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.student>.recruit>div>div>h4>span{
    font-size:2rem;
    color:#fff;
    font-weight:400;
    border-top:1px solid sandybrown;
}
.student>.recruit>div>div>p{
    width:80%;
    height:3.5rem;
    font-size:1rem;
    background:#fff;
    border:1px solid #909090;
    line-height:3.5rem;
    text-align:center;
}

.careerbox{
    width:100%;
    height:30rem;
    background:url(../assets/beckon/career.jpg) no-repeat center;
    display: flex;
    align-items: center;
}
.career{
    width:100%;
    height:80%;
    position:relative;
}
.career>.text{
    width:40%;
    height:100%;
    position:absolute;
    left:50%;
    top:0;
    color:#fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.career>.text>h5{
    font-size:2rem;
}
.career>.text>h5>span{
    display: block;
    width:5rem;
    height:0.2rem;
    background:sandybrown;
}
.career>.text>p{
    font-size:1.1rem;
}
.career>.text>div{
    width:9rem;
    height:3rem;
    background:#fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.career>.text>div>a{
    display: block;
    font-size:0.9rem;
    color:#791CB5;
}
</style>
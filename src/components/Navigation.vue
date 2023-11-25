<script setup>
import { RouterLink } from 'vue-router'
import {reactive} from 'vue'
let small = reactive(['访客','校友','招聘','内网','邮箱','图书馆','|','English','@'])
function more(){
    console.log(111)
}
</script>

<template>
    <div class="header">
        <div class="ident">
            <img src="../assets/home/logo.png"/>
        </div>
        <div class="wrapper">
            <div class="small">
                <ul>
                    <li v-for="item,index in small" :key="index">{{ item }}</li>
                </ul>
            </div>
            <div class="nav">
                <RouterLink  to="/" >清华新闻</RouterLink>
                <RouterLink  to="/about">学校概括</RouterLink>
                <RouterLink  to="/college" >院系设置</RouterLink>
                <RouterLink  to="/education">教育教学</RouterLink>
                <RouterLink  to="/science">科学研究</RouterLink>
                <RouterLink  to="/beckon" >招生就业</RouterLink>
                <RouterLink  to="/cooperate">合作交流</RouterLink>
                <RouterLink  to="/walk">走进清华</RouterLink>
            </div>
        </div>
        <div class="more">
            <div class="menuToggle" @click="more"></div>
        </div>
    </div>
</template>

<style scoped>
.header{
    width:100%;
    height:6rem;
    /* background:rgba(90,90,54,.5); */
    display:flex;
    justify-content: space-between;
    position:absolute;
    z-index: 999;
}
.ident{
    width:16rem;
    height:100%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
}
.ident>img{
    display:block;
    width:11rem;
    height:60%;
}
.wrapper{
    width:calc(100% - 30rem);
    height:100%;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
}
.wrapper>.small{
    width:100%;
    height:40%;
    display:flex;
    justify-content: flex-end;
    align-items:center;
}
.wrapper>.small>ul{
    width:30rem;
    display: flex;
    justify-content: space-evenly;
    font-size:0.8rem;
    color:block;
    opacity:0.75;
}

.wrapper>.nav{
    width:100%;
    height:40%;
    display: flex;
    justify-content: space-evenly;
    align-items:center;
}
.wrapper::before{
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: -5px;
    right: 0;
    height: 1.38rem;
    /* background:linear-gradient(); */
    background-size: auto 99%;
}
.wrapper>.nav>a{
    display:block;
    font-size:1.2rem;
    color:#fff;
    text-align:center;
    font-weight:bold;
    width:6rem;
}
.wrapper>.nav>a:hover{
    color:sandybrown;
    transition:linear 0.3s;
}
.wrapper>.nav>a:focus{
    color:sandybrown;
}
.nav>.nav-list{
    display: none;
}
.nav>.nav-list>.nav-ul{
    display: none;
}
.nav>.nav-list:hover .nav-ul{
    display: block;
    position:absolute;
    top:5rem;
}
.nav>.nav-list>.nav-ul>li{
    display: block;
    width:6rem;
    height:2rem;
    background:red;
    text-align:center;
}
.more{
    width:7rem;
    height:100%;
    background:#6510AD;
    display: flex;
    justify-content: center;
    align-items:center;
}
.menuToggle{
    /* position:absolute; */
    width:2rem;
    height:4rem;
    padding:0 25px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    cursor:pointer;
}
.menuToggle::before{
    content:'';
    position:absolute;
    width:2rem;
    height:2px;
    background:#fff;
    transform:translateY(-8px);
    transition:.5s;
}
.menuToggle::after{
    content:'';
    position:absolute;
    width:2rem;
    height:2px;
    background:#fff;
    transform:translateY(8px);
    box-shadow:0 -8px 0 #fff;
    transition:.5s;
}
/* header.active .menuToggle::before{
    transform:translateY(0) rotate(45deg);
}
header.active .menuToggle::after{
    transform:translateY(0) rotate(-45deg);
    box-shadow:0 0 0 #333;
}
header.active{
    height:100vh;
} */
</style>

<script setup>

</script>
<template>
    <div class="college">
        <div class="image">
            <div class="img">
                <img src="../assets/college/banner07.jpg" alt="">
            </div>
            <div class="titlebox">
                <div class="title">
                    <p>院系设置</p>
                    <span>目前，清华大学设有21个学院，59个系， 已成为一所具有理学、工学、文学、艺术学、历史学、哲学、经济学、管理学、法学、教育学和医学等学科的综合性的研究型大学。</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.college {
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
</style>
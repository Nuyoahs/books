<template>
  <div class="about">
    <div class="image">
      <div class="img">
        <img src="../assets/about/banner06.jpg" alt="">
      </div>
      <div class="titlebox">
        <div class="title">
          <p>学校概括</p>
          <span>
            清华大学（Tsinghua University）是中国著名高等学府，坐落于北京西北郊风景秀丽的清华园，是中国高层次人才培养和科学技术研究的重要基地。
          </span>
        </div>
      </div>
    </div>
    <div class="dedicatbox">
      <div class="dedicat">
        <div class="title">
          <h2>校庆献辞</h2>
          <h4>
            自强奋发新时代 团结携手向未来
            <span>—清华大学112周年校庆献辞</span>
          </h4>
          <p>
            飞阁凌芳树，华池落彩云。在最美人间四月天，清华大学即将迎来112岁生日。很多很久没有相见的校友、朋友又将欢聚在春意融融、喜气洋洋的清华园，我们感到十分高兴并代表学校向海内外广大校友和全体师生员工致以亲切的问候和良好的祝愿，向多年来关心支持我校发展的各界人士和朋友表示衷心的感谢！
          </p>
          <p>
            宏伟蓝图鼓舞人心，时代号角催人奋进。2022年是党和国家历史上极为重要、极为关键的一年。党的二十大胜利召开，发出了全面建设社会主义现代化国家、全面推进中华民族伟大复兴的动员令，也为清华大学走好建设中国特色世界一流大学的新路指明了前进方向、确立了行动指南。学习贯彻党的二十大精神的热潮在清华园持续澎湃涌动，广大师生员工坚持不懈用习近平新时代中国特色社会主义思想凝心铸魂，坚决拥护“两个确立”，自觉增强“四个意识”、坚定“四个自信”、做到“两个维护”，努力把发展科技第一生产力、培养人才第一资源、增强创新第一动力更好结合起来，汇聚激扬起奋进新征程、建功新时代的必胜信心和强大力量。
          </p>
          <div>
            <span>
              查看详细
              <img src="../assets/rr6.png" alt="">
            </span>
          </div>
        </div>
        <div class="img">
          <img src="../assets/about/people011.png" alt="">
        </div>
      </div>
    </div>
    <div class="xxygbox">
      <div class="xxyg">
        <h2>学校沿革</h2>
        <p>
          清华大学的前身清华学堂始建于1911年，1912年更名为清华学校。1928年更名为国立清华大学。1937年抗日战争全面爆发后南迁长沙，与北京大学、南开大学组建国立长沙临时大学，1938年迁至昆明改名为国立西南联合大学。1946年迁回清华园，设有文、法、理、工、农等5个学院、26个系。
        </p>
        <div class="more">
          <p>查看详细 <img src="../assets/rr6.png" alt=""></p>
        </div>
      </div>
      <div class="con">
        <ul>
          <li>
            <img src="../assets/about/picyg01.png" alt="">
          </li>
          <li>
            <img src="../assets/about/picyg02.png" alt="">
          </li>
          <li>
            <img src="../assets/about/picyg03.png" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div class="ld">

    </div>
    <div class="tjbox">
      <div class="zzjg">
        <div>
          <h2>组织机构</h2>
          <div>
            <p>查看详情
            <img src="../assets/rr6.png" alt="">
            </p>
          </div>
        </div>
      </div>
      <div class="tjzl">
        <h4>统计资料</h4>
        <ul class="ul1">
          <li>
            <h4>21</h4>
            <p>学院（个）</p>
          </li>
          <li>
            <h4>59</h4>
            <p>系（个）</p>
          </li>
          <li>
            <h4>88</h4>
            <p>本科专业（个）</p>
          </li>
        </ul>
        <ul class="ul2">
          <li>
            <h4>16485</h4>
            <p>教职工（人）</p>
          </li>
          <li>
            <h4>59270</h4>
            <p>在校学生（人）</p>
          </li>
          <li>
            <h4>578.61</h4>
            <p>图书馆馆藏（万册/件）</p>
          </li>
          <li>
            <h4>460.19</h4>
            <p>校园面积（公顷）</p>
          </li>
        </ul>
        <div class="more">
          <p>查看更多统计资料 <img src="../assets/rr7.png" alt=""></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image {
  width: 100%;
  height: 34.5rem;
  margin-bottom: 5rem;
}

.image>.img {
  position: relative;
  z-index: 1;
}

.image>.img>img {
  display: block;
  width: 100%;
  height: 100%;
}

.image>.titlebox {
  position: relative;
  z-index: 10;
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

.dedicatbox {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
}

.dedicat {
  width: 80%;
  height: 29.5rem;
  ;
  display: flex;
  position: relative;
}

.dedicat>.title {
  position: absolute;
  z-index: 10;
  width: 48rem;
  height: 100%;
}

.dedicat>.title>h2 {
  font-size: 2rem;
  font-weight: 400;
  position: relative;
  margin-bottom: 3rem;
}

.dedicat>.title>h2::before {
  content: '';
  position: absolute;
  left: 0;
  top: 3.5rem;
  width: 4rem;
  height: 0.2rem;
  background: #791CB5;
}

.dedicat>.title>h4 {
  font-size: 1.4rem;
  margin-bottom: 2rem;
}

.dedicat>.title>h4>span {
  font-size: 1rem;
  font-weight: 200;
  color: black;
}

.dedicat>.title>p {
  font-size: 0.9rem;
  color: #929292;
  margin-bottom: 2rem;
}

.dedicat>.title>div>span {
  color: #791CB5;
  border-bottom:1px solid #791CB5;
}
.dedicat>.title>div>span>img{
  margin-left:1rem;
}

.dedicat>.img {
  position: absolute;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
}

.dedicat>.img>img {
  display: block;
}

.xxygbox {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
}

.xxygbox>.xxyg {
  width: 48rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
}

.xxygbox>.xxyg>h2 {
  font-size: 2.1rem;
  font-weight: 400;
  margin-bottom: 2rem;
}

.xxygbox>.xxyg>p {
  font-size: 0.9rem;
  text-align: center;
  color: #929292;
  margin-bottom: 2rem;
}

.xxygbox>.xxyg>.more {
  color: #791CB5;
  height: 2rem;
  border-bottom: 1px solid #791CB5;
}

.xxygbox>.xxyg>.more>p>img {
  margin-left: 2rem;
}

.xxygbox>.con>ul {
  display: flex;
}

.xxygbox>.con>ul>li {
  width: 27rem;
  height: 17.5rem;
}

.xxygbox>.con>ul>li>img {
  display: block;
  width: 100%;
  height: 100%;
}

.ld{
  width:100%;
  height:3rem;
  margin-bottom:10rem;
}

.tjbox {
  width: 100%;
  height: auto;
  background: url(../assets/about/zlBg.jpg) no-repeat center center/100%;
  position:relative;
}
.tjbox>.zzjg{
  position:absolute;
  z-index:10;
  left:10%;
  top:-5rem;
  display: block;
  width:80%;
  height:8.5rem;
  background:#faf3f9;
}
.tjbox>.zzjg>div{
  width:90%;
  height:4rem;
  margin:2.25rem auto;
  border-left:0.2rem solid #791CB5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tjbox>.zzjg>div>h2{
  font-size:2rem;
  margin-left:3rem; 
  font-weight:400;
}
.tjbox>.zzjg>div>div{
  color:#791CB5;
  display: flex;
  height:2rem;
  border-bottom:1px solid #791CB5;
}
.tjbox>.zzjg>div>div>img{
  margin-left:2rem;
}
.tjbox>.tjzl {
  width: 80%;
  height: auto;
  margin: 5.5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
}

.tjbox>.tjzl>h4 {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 3rem;
}

.tjbox>.tjzl>ul {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem
}

.tjbox>.tjzl>.ul1>li {
  width: 24rem;
  height: 7rem;
  text-align: center;
}

.tjbox>.tjzl>.ul1>li:nth-child(2) {
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
}

.tjbox>.tjzl>.ul1>li>h4 {
  font-size: 4.4rem;
}

.tjbox>.tjzl>.ul1>li>p {
  font-size: 1.5rem;
}

.tjbox>.tjzl>.ul2>li {
  width: 18rem;
  height: 7rem;
  text-align: center;
}

.tjbox>.tjzl>.ul2>li:nth-child(2) {
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
}

.tjbox>.tjzl>.ul2>li:nth-child(3) {
  border-right: 1px solid #fff;
}

.tjbox>.tjzl>.ul2>li>h4 {
  font-size: 4.4rem;
}

.tjbox>.tjzl>.ul2>li>p {
  font-size: 1.5rem;
}

.tjbox>.tjzl>.more {
  border-bottom: 1px solid #fff;
}

.tjbox>.tjzl>.more>p {
  margin-bottom: 1rem;
}

.tjbox>.tjzl>.more>p>img {
  margin-left: 1.5rem;
}</style>

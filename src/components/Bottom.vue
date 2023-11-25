<script setup>

</script>

<template>
  <div class="footer">
      <div class="wal">
        <div class="foot-link">
          <p>常用连接</p>
          <div class="school-info">
            <ul>
              <li>校园参观</li>
              <li>校园公交车</li>
              <li>清华校历</li>
              <li>校园地图</li>
              <li>使用信息</li>
              <li>教育基金会</li>
              <li>校友总会</li>
              <li>清华标志</li>
              <li>宣传资源</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="g-wal">
        <div class="foot-link">
          <div class="foot-info">
            <div class="details">
              <div class="logo">
                <img src="../assets/home/logo.png" alt="">
              </div>
              <div class="contact">
                <div>
                  <p>010-62793001</p>
                  <p>webmaster@tsinghua.edu.cn</p>
                </div>
                <div>
                  <p>北京海淀区清华大学</p>
                  <p>意见反馈</p>
                </div>
              </div>
            </div>
          </div>
          <div class="foot-note">
            <div class="filings">
              <p>版权所有@清华大学</p>
              <p>京ICP备15006448号</p>
              <p>京公网安备110402430053号</p>
            </div>
            <div class="num">
              <p>@</p>
              <p>231117921</p>
            </div>
          </div>
        </div>
      </div>
    <div class="image">
      <img src="../assets/home/guanweierweima.jpg" alt="">
      <p>欢迎关注微信大学公众号</p>
    </div>
  </div>
</template>

<style scoped>
.footer {
  border-top: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  width:100%;
  height:36rem;
  position:relative;
}

.wal {
  width: 100%;
  height: 22rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.foot-link {
  width: 80%;
  height: 100%;
  z-index: 1
}

.wal>.foot-link {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.wal>.foot-link>p {
  font-size: 2.3rem;
}

.wal>.foot-link>.school-info>ul {
  width: 50rem;
  height: 12rem;
  display: flex;
  flex-wrap: wrap;
}

.wal>.foot-link>.school-info>ul>li {
  display: block;
  width: 12rem;
  height: 3.5rem;
  line-height: 3.5rem;
  border-bottom: 1px solid #ccc;
  margin-right: 3rem;
}

.g-wal {
  width: 100%;
  height: 14rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.g-wal::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  background: #C6CFD7;
  width: 97%;
  height: 12rem;
}

.g-wal::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  background: #4B0C77;
  width: 94%;
  height: 100%;
}

.g-wal>.foot-link>.foot-info {
  width: 100%;
  height: 74%;
  border-bottom: 1px solid #ccc;
}

.g-wal>.foot-link>.foot-info>.details {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.g-wal>.foot-link>.foot-info>.details>.logo {
  width: 11rem;
  height: 3.8rem;
}

.g-wal>.foot-link>.foot-info>.details>.logo>img {
  display: block;
  width: 100%;
  height: 100%;
}

.g-wal>.foot-link>.foot-info>.details>.contact {
  width: 20rem;
  height: 3.8rem;
}

.g-wal>.foot-link>.foot-info>.details>.contact>div {
  width: 18rem;
  height: 2rem;
  display: flex;
  font-size: 0.7rem;
  color: #fff;
}

.g-wal>.foot-link>.foot-info>.details>.contact>div>p {
  margin-right: 1rem;
}

.g-wal>.foot-link>.foot-note {
  width: 100%;
  height: 26%;
  display: flex;
  justify-content: space-between;
}

.g-wal>.foot-link>.foot-note>.filings {
  width: 25rem;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.7rem;
  color: #ccc;
}

.g-wal>.foot-link>.foot-note>.num {
  width: 4.8rem;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.7rem;
  color: #ccc;
}

.image {
  position: absolute;
  right: 10%;
  bottom: 24%;
  color: #fff;
  font-size: 0.7rem;
}

.image>img {
  display: block;
  width: 14rem;
  height: 14rem;
}

.image>p {
  margin-top: 0.5rem;
  text-align: center;
}
</style>

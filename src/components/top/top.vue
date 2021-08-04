<template>
  <div class="zong">
    <div class="main">
      <ul class="headItem">
        <li>主题超市</li>
        <li><a href="">天猫</a></li>
        <li><a href="">聚划算</a></li>
        <li><a href="">天猫超市</a></li>
        <li><a href="">|</a></li>
        <li><a href="">司法拍卖</a></li>
        <li><a href="">飞猪旅行</a></li>
        <li><a href="">天天拍卖</a></li>
        <li><a href="">|</a></li>
        <li><a href="">造点新货</a></li>
        <li><a href="">苏宁易购</a></li>
        <li><a href="">淘宝心选</a></li>
        <li><a href="">智能生活</a></li>
      </ul>
    </div>
    <div class="headLeft">
      <ul>
        <li class="right">></li>
        <li><a href="">女装</a></li>
        <li>/</li>
        <li><a href="">内衣</a></li>
        <li>/</li>
        <li><a href="">家具</a></li>
      </ul>
      <ul>
        <li class="right">></li>
        <li><a href="">女鞋</a></li>
        <li>/</li>
        <li><a href="">男鞋</a></li>
        <li>/</li>
        <li><a href="">箱包</a></li>
      </ul>
      <ul>
        <li class="right">></li>
        <li><a href="">母婴</a></li>
        <li>/</li>
        <li><a href="">童装</a></li>
        <li>/</li>
        <li><a href="">玩具</a></li>
      </ul>
      <ul>
        <li class="right">></li>
        <li><a href="">美妆</a></li>
        <li>/</li>
        <li><a href="">彩妆</a></li>
        <li>/</li>
        <li><a href="">个护</a></li>
      </ul>
      <ul>
        <li class="right">></li>
        <li><a href="">美妆</a></li>
        <li>/</li>
        <li><a href="">彩妆</a></li>
        <li>/</li>
        <li><a href="">个护</a></li>
      </ul>
      <ul>
        <li class="right">></li>
        <li><a href="">美妆</a></li>
        <li>/</li>
        <li><a href="">彩妆</a></li>
        <li>/</li>
        <li><a href="">个护</a></li>
      </ul>
      <ul>
        <li class="right">></li>
        <li><a href="">美妆</a></li>
        <li>/</li>
        <li><a href="">彩妆</a></li>
        <li>/</li>
        <li><a href="">个护</a></li>
      </ul>
      <ul>
        <li class="right">></li>
        <li><a href="">美妆</a></li>
        <li>/</li>
        <li><a href="">彩妆</a></li>
        <li>/</li>
        <li><a href="">个护</a></li>
      </ul>
      <ul>
        <li class="right">></li>
        <li><a href="">美妆</a></li>
        <li>/</li>
        <li><a href="">彩妆</a></li>
        <li>/</li>
        <li><a href="">个护</a></li>
      </ul>
      <ul>
        <li class="right">></li>
        <li><a href="">美妆</a></li>
        <li>/</li>
        <li><a href="">彩妆</a></li>
        <li>/</li>
        <li><a href="">个护</a></li>
      </ul>
      <ul>
        <li class="right">></li>
        <li><a href="">美妆</a></li>
        <li>/</li>
        <li><a href="">彩妆</a></li>
        <li>/</li>
        <li><a href="">个护</a></li>
      </ul>
      <ul>
        <li class="right">></li>
        <li><a href="">美妆</a></li>
        <li>/</li>
        <li><a href="">彩妆</a></li>
        <li>/</li>
        <li><a href="">个护</a></li>
      </ul>
      <ul>
        <li class="right">></li>
        <li><a href="">美妆</a></li>
        <li>/</li>
        <li><a href="">彩妆</a></li>
        <li>/</li>
        <li><a href="">个护</a></li>
      </ul>
      <ul>
        <li class="right">></li>
        <li><a href="">美妆</a></li>
        <li>/</li>
        <li><a href="">彩妆</a></li>
        <li>/</li>
        <li><a href="">个护</a></li>
      </ul>
      <ul>
        <li class="right">></li>
        <li><a href="">美妆</a></li>
        <li>/</li>
        <li><a href="">彩妆</a></li>
        <li>/</li>
        <li><a href="">个护</a></li>
      </ul>
    </div>
    <div class="yin">
      <div class="yin-top">
        <el-carousel height="390px">
          <el-carousel-item v-for="(item, index) in swiperlist" :key="index">
            <a :href="item.link"><img :src="item.image" alt="" /></a>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="yin-buttom">
        <div
          class="yin-buttom-list"
          v-for="(item, index) in recommendList"
          :key="index"
        >
          <a :href="item.link">
            <img :src="item.image" alt="" />
          </a>
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
    <div class="right">
      <img src="../../assets/2.png" alt="" />
      <img src="../../assets/3.png" alt="" />
      <div class="right-text">
        <ul>
          <li><a href="">公告</a></li>
          <li><a href="">规则</a></li>
          <li><a href="">安全</a></li>
          <li><a href="">公益</a></li>
          <li><a href="">千牛</a></li>
        </ul>
      </div>
      <div class="bt">
        <img src="../../assets/4.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { getHomeMultidata } from "../../network/lunbo";
export default {
  name: "top",
  data() {
    return {
      swiperlist: [],
      recommendList: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.swiperlist = res.data.banner.list;
      this.recommendList = res.data.recommend.list;
    });
  },
  methods: {},
};
</script>

<style scoped>
.zong {
  position: relative;
}
.main {
  height: 30px;
  margin-bottom: 5px;
}
.headItem {
  display: flex;
  text-align: center;
  line-height: 30px;
}
.headItem li a {
  padding: 0 10px;
  font-size: 14px;
  text-decoration: none; /* 去除默认的下划线 */
  outline: none; /* 去除旧版浏览器的点击后的外虚线框 */
}
.headItem li:nth-child(n + 5) a:hover {
  color: #ff5000;
}
.main .headItem li:nth-child(1) {
  width: 190px;
  color: #ff6200;
}
.main .headItem li:nth-child(2) a {
  color: #ff0036;
}
.main .headItem li:nth-child(3) a {
  color: #ff0036;
}
.main .headItem li:nth-child(4) a {
  color: #33c900;
}
.main .headItem li:nth-child(4) a:hover {
  color: #ff0036;
}

.headLeft {
  width: 190px;
  height: 510px;
  position: absolute;
}
.headLeft ul {
  width: 190px;
  height: 34px;
}
.headLeft ul:hover {
  background-color: #ffe4dc;
}
.headLeft li:nth-child(n + 2) {
  float: left;
  text-align: center;
  line-height: 34px;
  margin-left: 7px;
}
.headLeft li:nth-child(n + 2) a:hover {
  color: #ff5000;
  text-decoration: underline;
}
.headLeft li a {
  text-decoration: none;
  color: #666666;
}
.headLeft li {
  color: #666666;
}
.headLeft ul .right {
  display: block;
  color: #666666;
  float: right;
  text-align: center;
  line-height: 34px;
}

.yin {
  width: 714px;
  height: 505px;
  position: absolute;
  margin-left: 200px;
  border-radius: 15px;
  display: block;
}
.yin .yin-top {
  width: 714px;
  height: 390px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.yin .yin-buttom {
  width: 714px;
  height: 115px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  justify-content: space-around;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 390px;
  margin: 0;
}
.yin-buttom-list {
  width: 80px;
  height: 80px;
  text-align: center;
  margin-top: 7px;
}
.yin-buttom-list img {
  width: 100%;
  height: 100%;
}
.yin-buttom-list span {
  display: block;
  margin-top: 5px;
  font-size: 14px;
}

.right {
  position: absolute;
  width: 290px;
  top: 35px;
  left: 914px;
}
.right img {
  width: 100%;
  height: 91px;
}
.right-text {
  width: 290px;
  height: 20px;
}
.right-text ul {
  display: flex;
  justify-content: space-around;
}
.right-text ul li a {
  float: left;
  text-decoration: none;
  color: #3c3c3c;
  font-size: 12px;
  font-weight: 700;
  margin-top: 5px;
}
.right-text ul li a:hover {
  color: #ff4400;
  border-bottom: 1px solid red;
}
.bt {
  width: 290px;
  height: 300px;
}
.bt img {
  width: 100%;
  height: 100%;
}
</style>
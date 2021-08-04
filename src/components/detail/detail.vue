<template>
  <div class="detail">
    <div class="main">
      <!-- 顶部 -->
      <div class="head">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <div class="top">
        <div class="topImage">
          <el-carousel trigger="click" height="700px">
            <el-carousel-item
              v-for="(item, index) in detailTopImg"
              :key="index"
            >
              <img :src="item" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="topRight">
          <h3>{{ this.title }}</h3>
          <div class="price">
            <ul>
              <li>价格</li>
              <li>
                ¥
                {{ this.detailData.lowNowPrice }} -
                {{ this.detailData.lowPrice }}
              </li>
              <li>
                <h4>{{ this.columns[0] }}</h4>
                <h4>{{ this.columns[1] }}</h4>
                <h4>{{ this.columns[2] }}</h4>
              </li>
            </ul>
          </div>
          <div class="list">
            <h4>颜色分类</h4>
            <div class="listimg">
              <div v-for="(item, index) in listimg" :key="index">
                <img :src="item.img" alt="" />
              </div>
            </div>
          </div>
          <div class="computed">
            <h4>数量：</h4>
            <el-input-number
              v-model="num"
              @change="handleChange"
              :min="1"
              :max="10"
              label="描述文字"
            ></el-input-number>
          </div>
          <div class="buttom">
            <el-button
              type="warning"
              plain
              style="
                width: 163px;
                background-color: #ffe4d0;
                color: #e5511d;
                height: 50px;
              "
              >立即购买</el-button
            >
            <el-button
              type="danger"
              plain
              style="
                width: 163px;
                background-color: #f40;
                color: #fff;
                height: 50px;
              "
              >加入购物车</el-button
            >
          </div>
          <div class="footer"></div>
        </div>
      </div>

      <!-- 详情照片 -->
      <detail-commend></detail-commend>
      <!-- <div class="detailsHead">
        <div class="detailsImage">商品详情</div>
        <div class="deyailsComment">评论区</div>
      </div> -->
      <!-- <div class="detailsImage">
        <img
          src="//s11.mogucdn.com/mlcdn/c45406/180423_3hfhi2j7c12dbbd6l7i4117916eic_750x1114.jpg"
          alt=""
        />
      </div> -->
    </div>
  </div>
</template>

<script>
import detailCommend from "./detailCommend.vue";
import { getDetail } from "../../network/detail";
export default {
  name: "detail",
  data() {
    return {
      id: null,
      detailTopImg: [],
      detailData: {},
      title: "",
      columns: [],
      listimg: {},
      num: 1,
    };
  },
  created() {
    this.id = this.$route.params.iid;
    getDetail(this.id).then((res) => {
      this.detailTopImg = res.result.itemInfo.topImages;
      this.detailData = res.result.itemInfo;
      this.title = this.detailData.title;
      this.columns = res.result.columns;
      this.listimg = res.result.skuInfo.skus;
    });
  },
  methods: {
    handleChange(value) {},
  },
  components: {
    detailCommend,
  },
};
</script>

<style scoped>
.detail {
  height: 1023px;
  background-image: url("../../assets/home_top_bg.jpg");
  width: 100%;
}
.main {
  margin: 0 300px;
  background-color: #fff;
  height: 100%;
}
.head {
  width: 100%;
  height: 120px;

  text-align: center;
}
.head img {
  display: inline-block;
  margin: 0 auto;
}
.topImage {
  float: left;
  height: 300px;
  width: 500px;
  margin-top: 10px;
  margin-left: 50px;
}

.topRight {
  float: right;
  /* background-color: pink; */
  width: 700px;
  height: 700px;
  margin-top: 10px;
  margin-right: 43px;
}
.topRight h3 {
  display: block;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
}
.topRight .price {
  background-color: #fff2e8;
  margin: 10px 10px;
  height: 60px;
}
.price ul li {
  display: block;

  margin-top: 10px;
  margin-left: 10px;
}
.price ul li:nth-child(1) {
  line-height: 40px;
  float: left;

  font-size: 16px;
  color: #6c6c6c;
}
.price ul li:nth-child(2) {
  line-height: 40px;
  float: left;
  margin-left: 50px;
  font-size: 24px;
  color: rgb(255, 68, 0);
  font-weight: 700;
}
.price ul li:nth-child(3) h4 {
  line-height: 60px;
  float: right;
  padding-right: 20px;
  color: #6c6c6c;
  font-size: 12px;
}
.list {
  height: 300px;
  margin: 5px 10px;
}
.list h4 {
  float: left;
  font-size: 14px;
  color: #6c6c6c;
  line-height: 30px;
  margin-left: 10px;
  margin-right: 5px;
}
.list .listimg {
  float: left;
  height: 300px;
  width: 600px;
}
.list .listimg div {
  margin: 7px 7px;
  float: left;
  width: 60px;
  height: 60px;
  cursor: pointer;
}
.list .listimg img:hover {
  border: 1px solid red;
}
.list .listimg img {
  width: 58px;
  height: 58px;
}
.computed {
  margin-left: 20px;
}
.computed h4 {
  line-height: 40px;
  color: #6c6c6c;
  float: left;
}
.computed el-input-number {
  float: left;
}
.buttom {
  margin-top: 50px;
  height: 50px;
  margin-left: 20px;
}
.footer {
  height: 160px;
  margin: 0 0;
  background: url("../../assets/foreground.png");
}
/* .detailsHead {
  height: 50px;
  background-color: #f6f6f6;
  margin-top: 750px;
} */
/* .detailsImage {
  width: 500px;
  margin-top: 340px;
}
.detailsImage img {
} */
</style>
<template>
  <div class="newlist">
    <div class="head">
      <span>有好货</span>
      <span>全民口碑</span>
    </div>
    <div class="list">
      <ul>
        <li>
          <a href="">
            <img src="../../assets/t1.webp" alt="" />
            <div>
              <h4>Pure Cashmere 保暖针织帽</h4>
              <p>
                这款针织帽风格休闲可爱，帽口双面装饰设计，非常有层次感，带上也会更舒服，简约的外型，柔软的纯羊绒面料，既美观又保暖。
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href=""
            ><img src="../../assets/t2.webp" alt="" />
            <div>
              <h4>二胎家庭都在用这种床</h4>
              <p>
                软床质量很好很高档，很喜欢外观高档，工艺精湛，气味不大，直观上有档次，厚重。
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href=""
            ><img src="../../assets/t3.webp" alt="" />
            <div>
              <h4>周大福 简约蛇骨链</h4>
              <p>极简风格，雅致大气人人皆可驾驭。</p>
            </div>
          </a>
        </li>
        <li>
          <a href=""
            ><img src="../../assets/t4.webp" alt="" />
            <div>
              <h4>速干超薄透气防晒衣</h4>
              <p>防风性能好，清爽透气不闷热，耐磨性强。</p>
            </div>
          </a>
        </li>
        <li>
          <a href=""
            ><img src="../../assets/t5.webp" alt="" />
            <div>
              <h4>便携战术防身扇，户外防身更实用</h4>
              <p>
                钛扇的整体手感舒适，大扇骨起着决定性的作用，在传统竹制折扇的基础上，考虑实际使用时的握姿，结合科学的分析和测试，钛大扇骨的不同部位边缘，采用不同的曲面过渡，无论开启还是闭合，均确保手感温润如玉。
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="guanggao">
      <ul>
        <li>
          <a href="">
            <img src="../../assets/i1.jpg" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="../../assets/i2.jpg" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="../../assets/i3.jpg" alt="" />
          </a>
        </li>
      </ul>
    </div>
    <div class="newGoodsHead">
      <h3>猜你喜欢</h3>
      <p>个性推荐</p>
      <el-button
        type="primary"
        plain
        @click="changeSell"
        style="float: right; margin-right: 10px"
        >流行</el-button
      >
      <el-button
        type="primary"
        plain
        @click="changeNew"
        style="float: right; margin-right: 10px"
        >新品</el-button
      >
      <el-button
        type="primary"
        plain
        @click="changePop"
        style="float: right; margin-right: 10px"
        >畅销</el-button
      >
    </div>
    <div class="newGoods">
      <div class="goodsList" v-for="(item, index) in newGoods" :key="index">
        <!-- <a href=""> -->
        <div class="a" @click="getId(item.iid)">
          <img :src="item.showLarge.img" alt="" />
          <h4>{{ item.title }}</h4>
        </div>
        <!-- </a> -->
      </div>
    </div>
    <div class="page">
      <el-pagination
        @current-change="handleCurrentChange"
        layout="prev, pager, next, jumper"
        :total="300"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getHomeGoods } from "../../network/list";
export default {
  name: "new",
  data() {
    return {
      newGoods: {},
      page: "",
      leixing: "",
      id: "",
    };
  },
  created() {
    getHomeGoods("pop", 1).then((res) => {
      this.leixing = "pop";
      this.newGoods = res.data.list;
      console.log(this.leixing);
    });
  },
  methods: {
    changeSell() {
      getHomeGoods("sell", 1).then((res) => {
        this.leixing = "sell";
        this.newGoods = res.data.list;
        console.log(this.leixing);
      });
    },
    changeNew() {
      getHomeGoods("new", 1).then((res) => {
        this.leixing = "new";
        this.newGoods = res.data.list;
        console.log(this.leixing);
      });
    },
    changePop() {
      getHomeGoods("pop", 1).then((res) => {
        this.leixing = "pop";
        this.newGoods = res.data.list;
        console.log(this.leixing);
      });
    },
    handleCurrentChange(newPage) {
      this.page = newPage;
      getHomeGoods(this.leixing, this.page).then((res) => {
        this.newGoods = res.data.list;
      });
    },
    getId(id) {
      this.id = id;
      console.log(this.id);
      this.$router.push("/detail/" + this.id);
    },
  },
};
</script>

<style scoped>
.newlist {
  position: relative;
  top: 550px;
}
.newlist .head span:nth-child(1) {
  font-size: 24px;
  color: #111;
  font-weight: 14px;
  line-height: 24px;
  margin-left: 30px;
}
.newlist .head span:nth-child(2) {
  width: 65px;
  height: 20px;
  background-color: rgb(110, 110, 243);
  margin-left: 5px;
  border-radius: 5px;
  font-size: 12px;
  color: aliceblue;
}
.list ul {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
.list ul li {
  width: 215px;
  height: 215px;
}
.list ul li img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: #000;
}
.list ul a {
  text-decoration: none;
  color: #333;
}
.list ul li div h4 {
  width: 198px;
  height: 16px;
  line-height: 16px;
  margin-top: 10px;
  overflow: hidden;
  font-size: 16px;
  text-align: center;
}
.list ul li div p {
  font-size: 14px;
  margin-top: 8px;
  line-height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #999;
}
.guanggao ul {
  display: flex;
  justify-content: space-around;
  margin-top: 70px;
  overflow: hidden;
}

.guanggao ul li {
  width: 375px;
  height: 130px;
  overflow: hidden;
}
.guanggao ul li a img {
  width: 370px;
  height: 124px;
  border-radius: 15px;
}
.guanggao ul li a img:hover {
  border: 2px solid red;
}
.newGoodsHead {
  margin-top: 20px;
  margin-left: 20px;
  text-align: center;
}
.newGoodsHead h3 {
  font-size: 24px;
  font-weight: 16px;
  line-height: 24px;
  float: left;
}
.newGoodsHead p {
  float: left;
  margin-left: 10px;
  line-height: 24px;
  background-color: rgb(243, 65, 109);
  font-size: 12px;
  border-radius: 8px;
  color: aliceblue;
}
.newGoods .goodsList .a img {
  width: 215px;
  height: 215px;
  border-radius: 15px;
}
.newGoods {
  width: 1203px;
  overflow: hidden;
}
.newGoods .goodsList {
  width: 215px;
  height: 260px;
  margin-top: 30px;
  float: left;
  margin: 20px 10px;
  padding-left: 5px;
  cursor: pointer;
}
.newGoods .goodsList .a h4 {
  margin-top: 9px;
  line-height: 22px;
  width: 215px;
  height: 44px;
  font-size: 16px;
  color: #111;
  font-weight: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.newGoods .goodsList .a {
  text-decoration: none;
}
</style>
<template>
  <div id="detailCommend">
    <div class="detailsHead">
      <div class="detailschange" @click="changeImage">商品详情</div>
      <div class="detailschange" @click="changeComment">评论区</div>
    </div>
    <div class="image" v-if="this.click">
      <div v-for="(item, index) in detailImage" :key="index" class="xxx">
        <img :src="item" alt="" />
      </div>
    </div>
    <div class="commend" v-else>
      <div class="commendHead" v-for="(item, index) in rate" :key="index">
        <img :src="item.user.avatar" alt="" />
        <h4>{{ item.user.uname }}</h4>
        <h3>{{ item.content }}</h3>
      </div>
      <div class="foot">
        <img src="../../assets/footer.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { getDetail } from "../../network/detail";
export default {
  name: "detailCommend",
  data() {
    return {
      click: true,
      click1: false,
      id: null,
      detailImage: [],
      rate: {},
    };
  },
  created() {
    this.id = this.$route.params.iid;
    getDetail(this.id).then((res) => {
      this.detailImage = res.result.detailInfo.detailImage[0].list;
      this.rate = res.result.rate.list;
      console.log(this.rate);
    });
  },
  methods: {
    changeImage() {
      this.click = true;
      this.click1 = false;
    },
    changeComment() {
      this.click = false;
      this.click1 = true;
    },
  },
};
</script>

<style scoped>
#detailCommend {
  position: relative;
  top: 0;
  left: 0;
}
.detailsHead {
  height: 50px;
  border: 1px solid #c6c6c6;
  margin-top: 750px;
  line-height: 50px;
}
.detailsHead .detailschange {
  padding: 0 10px;
  float: left;
  width: 110px;
  text-align: center;
  border-right: 1px solid #c6c6c6;
  cursor: pointer;
}
.detailsHead .detailschange:active {
  border-top: 1px solid red;
}

#detailCommend .image {
  width: 100%;
  position: absolute;
  top: 52px;
  left: 0;
  z-index: 1;
}
.image .xxx {
  width: 500px;
  height: 700px;
  float: left;
  margin: 10px 75px;
  border-radius: 10px;
  overflow: hidden;
}
.image .xxx img {
  width: 500px;
  height: 700px;
}
#detailCommend .commend {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 52px;
  left: 0;
}
.commend .commendHead {
  height: 100px;
  width: 100%;
  border: 1px solid #c6c6c6;
}
.commend .commendHead img {
  float: left;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border-radius: 20px;
}
.commend .commendHead h4 {
  float: left;
  line-height: 40px;
}
.commend .commendHead h3 {
  display: block;
  margin-top: 50px;
  margin-left: 10px;
}
.foot {
  margin-top: -20px;
  margin-left: 150px;
}
</style>
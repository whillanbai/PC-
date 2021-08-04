<template>
  <div class="home">
    <div class="head">
      <img src="../assets/nothome_top_bg.jpg" alt="" />
    </div>
    <div class="main">
      <top></top>
      <newlist></newlist>
    </div>
    <div class="foot">
      <img src="../assets/footer.png" alt="" />
    </div>
  </div>
</template>



<script>
/* import { getHomeMultidata } from "../network/lunbo"; */
import top from "../components/top/top.vue";
import newlist from "../components/list/new";
export default {
  name: "Home",
  components: {
    top,
    newlist,
  },
  created() {
    /*  getHomeMultidata().then((res) => {
      this.swiperlist = res.data;
      console.log(this.swiperlist);
    }); */
  },
  data() {
    return {
      /* swiperlist: [], */
    };
  },
  methods: {},
};
</script>


<style scoped>
.home {
  height: 300px;
}
.head {
  width: 100%;
  height: 272px;
  overflow: hidden;
  position: relative;
}
.head img {
  position: absolute;
  left: 0;
  top: -400px;
}
.main {
  margin: 0 350px;
  background-color: #fff;
  box-shadow: 0px 3px 49px -17px #000;
  height: 2950px;
}
.foot {
  margin-left: 25%;
  margin-top: -20px;
}
</style>

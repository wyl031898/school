<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="1"><div class="grid-content1 bg-purple-light">
        <img src="../image/stwttp.png" class="image-size" >
      </div></el-col>
      <el-col :span="10"><div class="grid-content bg-purple-light">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-menu-item index="2">处理中心</el-menu-item>
          <el-menu-item index="3">处理中心</el-menu-item>
        </el-menu>
      </div></el-col>
    </el-row>

  </div>

</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style>
.image-size {
  width :60px;
  height: 60px;
  flex: auto;
}
.el-menu-demo{
  padding-left: 60px;
  height: 60px;
  text-align: left;
}

.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 0px;
  min-height: 0px;
  height: 60px;
}
.grid-content1 {
  border-radius: 0px;
  min-height: 0px;
  height: 60px;
  width: 60px;
}

</style>

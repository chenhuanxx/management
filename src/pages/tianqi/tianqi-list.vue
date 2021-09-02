<template>
  <div class="pb_45 mb20">
    <el-breadcrumb separator=">" class="wrap-breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadCrumbList"
        :to="{ path: item.link }"
        :key="index"
        >{{ item.name }}</el-breadcrumb-item
      >
    </el-breadcrumb>

    <div class="new-dashed-line mt20 mb20"></div>
    <el-table
      :data="tableData"
      style="width: 100%; margin-top: 20px"
      v-loading="loading"
    >
      <el-table-column type="index" label="序号" align="center">
      </el-table-column>
      <el-table-column prop="tem_day" label="白天天气温"> </el-table-column>
      <el-table-column prop="tem_night" label="晚间气温"> </el-table-column>
      <el-table-column prop="win" label="风向"> </el-table-column>
      <el-table-column prop="win_speed" label="风速"> </el-table-column>
      <el-table-column prop="wea" label="天气"  > </el-table-column>
      <el-table-column prop="date" label="时间"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadCrumbList: [
        {
          name: "天气中心",
          link: "",
        },
        {
          name: "天气列表",
          link: "",
        },
      ],
      loading: false,
      tableData: [],
    };
  },
  methods: {
    getList() {
      let params = {};
      this.$api.axios({
          useOption: true,
          url: process.env.PURCHASE_URL + "/free/week?appid=78939759&appsecret=Mp16zElc",
          withCredentials: false,
          params,
        })
        .then((res) => {
          console.log(res.data);
          this.tableData = res.data.data || []
        });
    },
  },
  mounted() {
    this.$emit("navChange", false, 10, "lg");
    this.getList();
  },
};
</script>

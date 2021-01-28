<template>
  <div class="pb_45 mb20 ">
    <el-breadcrumb separator=">" class="wrap-breadcrumb" >
      <el-breadcrumb-item v-for="(item, index) in breadCrumbList" :to="{ path: item.link}" :key="index">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="mt30 mb20">
      <el-button type='primary' icon="el-icon-circle-plus-outline"  @click.stop="addUse">新增新闻</el-button>
    </div>
    <div class="new-dashed-line mt20 mb20"></div>
    <el-table :data='tableData' style='width: 100%; margin-top: 20px' v-loading='loading'>
      <el-table-column type="index" label='序号' align="center"> </el-table-column>
      <el-table-column prop='title' label='标题'> </el-table-column>
      <el-table-column prop='author' label='作者' width="100px"> </el-table-column>
      <el-table-column prop='createtTime' label='创建时间'> </el-table-column>
      <el-table-column prop='roleCode' label='操作' align="center" fixed="right" width="140px">
        <template slot-scope="scope">
          <el-button @click="view(scope.row.newId)" size="mini" type="success" icon="el-icon-view" circle></el-button>
          <el-button @click="edit(scope.row.newId)" size="mini" type="primary" icon="el-icon-edit" circle></el-button>
          <el-button @click="deleteItem(scope.row.newId)" size="mini" type="danger" icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      breadCrumbList: [
        {
          name: '新闻中心',
          link: ''
        },
        {
          name: '新闻列表',
          link: ''
        }
      ],
      loading: false,
      tableData: []
    }
  },
  methods: {
    getList () {
      this.loading = true
      this.$api.getNewsList('get', 'list').then((res) => {
        this.tableData = res.data || []
        console.log('this.tableData', this.tableData)
        this.loading = false
      })
    },
    view (id) {
      console.log('id', id)
      this.$router.push('/news-detail/view/' + id)
    },
    edit (id) {
      this.$router.push('/news-detail/edit/' + id)
    },
    deleteItem (id) {
      this.$confirm('删除该角色, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })          
      })
    },
    addUse () {
      this.$router.push('/news-detail/create/' + '')
    }
  },
  beforeMount () {
    this.$emit('navChange', false, 1, 'lg',)
    this.getList()
  }
}
</script>

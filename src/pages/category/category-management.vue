<template>
  <div>
    <el-breadcrumb separator=">" class="wrap-breadcrumb" >
      <el-breadcrumb-item v-for="(item, index) in breadCrumbList" :to="{ path: item.link}" :key="index">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="mt30 mb20">
      <el-button type='primary' @click.stop="addUse" icon="el-icon-circle-plus-outline" >新增品类</el-button>
    </div>
    <div class="new-dashed-line mt20 mb20"></div>
    <el-table :data='tableData' style='width: 100%; margin-top: 20px'  v-loading='loading'>
      <el-table-column prop='name' label='品类名称'> </el-table-column>
      <el-table-column prop='use_name' label='创建时间'> </el-table-column>
      <el-table-column prop='roleName' label='是否启用'>
        <template slot-scope="scope">
          <el-switch  :active-value="scope.row.enable === '1'" :inactive-value="scope.row.enable === '0'" active-text="启用" inactive-text="禁用"></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop='roleCode' label='操作' align="center" fixed="right" width="140px">
        <template slot-scope="scope">
          <el-dropdown  placement="bottom" class="table-module-content">
            <span class="optionBtn"></span>
            <el-dropdown-menu slot="dropdown" class="new-option-list">
              <el-dropdown-item >
                <router-link :to="`/use-management-detail/view/${scope.row.id}`"><span class="viewIcon"></span>查看</router-link>
              </el-dropdown-item>
              <el-dropdown-item  >
                <router-link :to="`/use-management-detail/edit/${scope.row.id}`"><span class="editIcon"></span>编辑</router-link>
              </el-dropdown-item>
              <el-dropdown-item >
                <a @click="deleteItem(scope.row.id)"><span class="deleteIcon"></span>删除</a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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
          name: '首页',
          link: '/'
        },
        {
          name: '品类管理',
          link: ''
        }
      ],
      loading: false,
      tableData: [
        {name:'cccc'}
      ]
    }
  },
  methods: {
    getList () {
      // this.loading = true
      // this.$api.getUserList('get', 'list').then((res) => {
      //   this.tableData = res.data || []
      //   this.loading = false
      // })
    },
    view (id) {
      this.$router.push('/use-management-detail/view/' + id)
    },
    edit (id) {
      this.$router.push('/use-management-detail/edit/' + id)
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
      this.$router.push('/use-management-detail/create/' + '')
    }
  },
  beforeMount () {
    this.$emit('navChange', false, 2, 'lg')
    this.getList()
  }
}
</script>

<template>
  <div class=" pb_45 mb20 ">
    <el-breadcrumb separator=">" class="wrap-breadcrumb" >
      <el-breadcrumb-item v-for="(item, index) in breadCrumbList" :to="{ path: item.link}" :key="index">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="new-dashed-line mt20 mb20">
      <div class="authority-main mt20">
        <div class="authority-left">
            <el-tree
              :data="data"
              show-checkbox
              node-key="id"
              default-expand-all
              :expand-on-click-node="false"
              :render-content="renderContent">
            </el-tree>
        </div>
        <div class="authority-right">
          <el-form :model="authorityForm" status-icon :rules="rules2" ref="authorityForm" label-width="140px" class="demo-ruleForm" style="width: 100%">
              <el-form-item label="权限编码" prop="authorityCode" >
                <el-input v-model="authorityForm.authorityCode"  style="width: 220px;" :maxlength="20" show-password clearable></el-input>
              </el-form-item>
              <el-form-item label="权限名称" prop="authorityName">
                <el-input type="password" v-model="authorityForm.roleName" autocomplete="off" style="width: 220px;" :maxlength="20" show-password clearable></el-input>
              </el-form-item>
              <el-form-item label="权限描述" prop="authorityRmark">
                <el-input type="password" v-model="authorityForm.roleRmark" autocomplete="off" style="width: 220px;" :maxlength="20" show-password clearable></el-input>
              </el-form-item>
              <el-form-item label="权限url" prop="authorityUrl">
                <el-input type="password" v-model="authorityForm.roleUrl" autocomplete="off" style="width: 220px;" :maxlength="20" show-password clearable></el-input>
              </el-form-item>
              <el-form-item  >
                <el-button size="medium" type="primary"  >提交</el-button>
                <el-button size="medium" type="success"  >启用</el-button>
                <el-button size="medium" type="danger"  >禁用</el-button>
              </el-form-item>
        </el-form>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      breadCrumbList: [
        {
          name: '系统设置',
          link: ''
        },
        {
          name: '权限管理',
          link: ''
        }
      ],
      authorityForm: {},
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }]
    }
  },
  methods: {
    getList () {
      this.loading = true
    },
    addUse () {},
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button size="mini" type="success" icon="el-icon-plus" circle on-click={ () => this.append(data) }></el-button>
            <el-button size="mini" type="primary" icon="el-icon-edit" circle on-click={ () => this.edit(data) }></el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete" circle on-click={ () => this.remove(node, data) }></el-button>
          </span>
        </span>);
      }
  },
  beforeMount () {
    this.$emit('navChange', false, 2, 'lg', 1)
    this.getList()
  }
}
</script>
<style lang="less" scoped>
.authority-main {
  display: flex;
  .authority-left {
    width: 60%;
    height: 100%;
    max-height: 790px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #fff;
    padding: 30px;
    background: #fff;
  }
  .authority-right {
    padding: 30px;
    width: 38%;
    margin-left: 2%;
    background: #fff;
  }
}
</style>
<style>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
  .el-tree-node__content {
    height: 38px;
    border-bottom: 1px dashed darkgray;
}
</style>

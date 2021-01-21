<template>
  <div>
    <el-breadcrumb separator=">" class="wrap-breadcrumb" >
      <el-breadcrumb-item v-for="(item, index) in breadCrumbList" :to="{ path: item.link}" :key="index">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="new-dashed-line mt20 mb20">
      <div class="role-main mt20">
        <div class="role-right">
           <el-button size="medium" type="primary" @click="addUse" icon="el-icon-circle-plus-outline" >创建角色</el-button>
           <div  class="createFrom" v-if="dialogVisible" >
            <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" label-width="140px" class="demo-ruleForm" style="width: 100%">
              <el-form-item label="角色编码" prop="roleCode" >
                <el-input v-model="ruleForm.roleCode"  style="width: 220px;" :maxlength="20" clearable></el-input>
              </el-form-item>
              <el-form-item label="角色名称" prop="roleName">
                <el-input type="password" v-model="ruleForm.roleName" autocomplete="off" style="width: 220px;" :maxlength="20" clearable></el-input>
              </el-form-item>
              <el-form-item label="角色描述" prop="roleRmark">
                <el-input type="password" v-model="ruleForm.roleRmark" autocomplete="off" style="width: 220px;" :maxlength="20"  clearable></el-input>
              </el-form-item>
              <el-form-item label="是否启用" prop="enable">
                <el-switch  v-model="ruleForm.enable" active-text="启用" inactive-text="禁用"></el-switch>
              </el-form-item>
            </el-form>
            <span >
              <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
              <el-button  size="mini" type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </div>
           <ul class="role-management">
              <li v-for="(item, index) in tableData" :key="index">
               {{item.roleName}}
               <span class="role-span">
                <el-button size="mini" type="primary" @click="view('view', index)" >查看</el-button>
                <el-button size="mini" type="primary" @click="edit('edit', index)" >编辑</el-button>
                <el-button size="mini" type="danger"  >删除</el-button>
                <el-button size="mini" type="success"  >启用</el-button>
                <el-button size="mini" type="danger"  >禁用</el-button>
               </span>
               <div class="roleFormview" v-if="index === active">
                  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="140px" class="demo-ruleForm" style="width: 100%">
                    <el-form-item label="角色编码" prop="roleCode" >
                      <el-input v-model="ruleForm2.roleCode"  style="width: 220px;" :maxlength="20" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="角色名称" prop="roleName">
                      <el-input type="password" v-model="ruleForm2.roleName" autocomplete="off" style="width: 220px;" :maxlength="20" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="角色描述" prop="roleRmark">
                      <el-input type="password" v-model="ruleForm2.roleRmark" autocomplete="off" style="width: 220px;" :maxlength="20"  clearable></el-input>
                    </el-form-item>
                    <el-form-item label="是否启用" prop="enable">
                      <el-switch  v-model="ruleForm2.enable" active-text="启用" inactive-text="禁用"></el-switch>
                    </el-form-item>
                  </el-form>
                  <span>
                    <el-button size="mini" @click="active = false">取 消</el-button>
                    <el-button  v-if="typeName === 'edit'" size="mini" type="primary" @click="dialogVisible = false">确 定</el-button>
                  </span>
               </div>
              </li>
              
           </ul>
        </div>
        <div class="role-left">
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            default-expand-all
            :expand-on-click-node="false">
          </el-tree>
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
          name: '角色详情',
          link: ''
        }
      ],
      active: '',
      dialogVisible: false,
      tableData: [],
      ruleForm2: {},
      ruleForm: {
        use: [
          {required: true, message: '请填用户名'}
        ],
        pwd: [
          {required: true, message: '请填写密码'}
        ],
        enable : [
          {required: true, message: '请选择是否启用该用户', trigger: 'change'}
        ],
        roleId: [
          {required: true, message: '请选择角色', trigger: 'change'}
        ],
        companyName: [
          {required: true, message: '请填写公司名称'}
        ],
        useName: [
          {required: true, message: '请填写姓名'}
        ],
        mobile: [
          {required: true, message: '请填写手机号'}
        ],
        email: [
          {required: true, message: '请填写邮箱'}
        ],
        address: [
          {required: true, message: '请填写地址'}
        ],
        imgArr: [
          {required: true, message: '请上传头像图片'}
        ]
      },
      typeName: '',
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                }, 
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            }, 
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ]
    }
  },
  methods: {
    view (type, data) {
      this.active = data
      this.typeName = type
      this.dialogVisible = false
    },
    edit (type, data) {
      this.active = data
      this.typeName = type
      this.dialogVisible = false
    },
    getList () {
      this.loading = true
      this.$api.getRoleList('get', 'list').then((res) => {
        this.tableData = res.data || []
        this.loading = false
      })
    },
    addUse () {
      this.dialogVisible = true
      this.active = false
    },
  },
  beforeMount () {
    this.$emit('navChange', false, 2, 'lg', 2)
    this.getList()
  }
}
</script>
<style lang="less" scoped>
.role-main {
  display: flex;
  .role-left {
    width: 60%;
    margin-left: 2%;
    height: 100%;
    max-height: 790px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #fff;
    padding: 30px;
    background: #fff;
  }
  .role-right {
    padding: 30px;
    width: 38%;
    min-width: 515px;
    height: 100%;
    max-height: 790px;
    overflow-x: hidden;
    overflow-y: auto;
    background: #fff;
    .createFrom {
      border: 1px solid darkcyan;
      background: #88c1eb;
      color: white;
      cursor: pointer;
      margin-top: 10px;
      border-radius:10px ;
      overflow: hidden;
      padding: 10px 10px;
    }
  }
  .role-management {
    margin-top: 30px;
    li {
      border: 1px solid darkcyan;
      background: #88c1eb;
      color: white;
      margin-top: 10px;
      border-radius:10px ;
      overflow: hidden;
      padding: 10px 10px;
      .role-span {
        float: right;
      }
      .roleFormview {
        width: 100%;
        clear: both;
        margin-top: 30px;
        .roleFormview-item {
          color: #000;
          margin: 10px;
          font-size: 16px;
        }
      }
    }
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

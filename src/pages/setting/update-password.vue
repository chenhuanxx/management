<template>
  <div class="personal-setting">
    <el-breadcrumb separator=">" class="wrap-breadcrumb" >
      <el-breadcrumb-item v-for="(item, index) in breadCrumbList" :to="{ path: item.link}" :key="index">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="card-module">
      <div>
        <span class="descLabel">修改密码</span>
      </div>
      <div class="info-content">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="140px" class="demo-ruleForm" style="width: 100%">
          <el-row>
            <el-col :span="8">
              <el-form-item label="请输入旧密码：" prop="oldPassword" >
                <el-input v-model="ruleForm2.oldPassword" type="password" style="width: 220px;" :maxlength="20" show-password clearable></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="新密码：" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" style="width: 220px;" :maxlength="20" show-password clearable></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="确认密码：" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off" style="width: 220px;" :maxlength="20" show-password clearable></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <fixed-button>
      <div slot="right">
        <el-button @click="goBack" >返回</el-button>
        <el-button type="primary" @click="submitUserInfo">保存</el-button>
        <el-button type="primary" @click="resetForm('ruleForm2')">重置</el-button>
      </div>
    </fixed-button>
  </div>
</template>
<script>
import fixedButton from '../../../components/fixedButton'

export default {
  components: {
    fixedButton
  },
  data () {
    var checkOldPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('旧密码不能为空'))
      }
      callback()
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (!(/^[A-Za-z\d$@!%*#?&._+=]{6,20}$/.test(value))) {
          return callback(new Error('6-20位字符'))
        }
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      breadCrumbList: [
        {
          name: '首页',
          link: '/'
        },
        {
          name: '修改密码',
          link: ''
        }
      ],
      getoldPassword: '',
      ruleForm2: {
        pass: '',
        checkPass: '',
        oldPassword: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        oldPassword: [
          { validator: checkOldPass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    logout () {
      location.href = location.href.split('/#/')[0] + '/logout'
      console.log('logout')
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    goBack () {
      this.$router.push('/personal/setting')
    },
    submitUserInfo () {
      this.$refs.ruleForm2.validate((valid) => {
        if (valid) {
          let body = {
            oldPassword: this.ruleForm2.oldPassword,
            password: this.ruleForm2.pass,
            repeatPassword: this.ruleForm2.checkPass
          }
          this.$api.handleUsers('put', this.$userInfo.userId, {action: 'modifyPassword'}, body).then(res => {
            this.message('更新密码成功，请重新登录', 'success')
            this.logout()
            this.resetForm('ruleForm2')
          })
        } else {
          return false
        }
      })
    }
  },
  beforeMount () {
  }
}
</script>
<style scoped lang="less">
  .card-module {
    margin-top: 20px;
    padding: 40px;
  }
</style>
<style>
</style>

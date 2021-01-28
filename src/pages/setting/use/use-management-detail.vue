<template>
    <div class="stock-report pb_45 mb20 ">
      <el-breadcrumb separator=">" class="wrap-breadcrumb" >
        <el-breadcrumb-item v-for="(item, index) in breadCrumbList" :to="{ path: item.link}" :key="index">{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="repair-detail mb20 ">
        <div class="detail-con">
          <toggle-search toggle open :btnText="{up: '收起', down: '展开'}">
            <div class="descLabel  mb20">用戶信息</div>
            <el-form :model="detail" ref="stockSubmitDto" :rules="stockfrom"  label-width="140px" label-position="left">
              <div class="new-input-item">
                <el-form-item label="用户名"  prop="useName">
                  <el-input  v-model="detail.useName"  :disabled="typepage === 'viwe'"></el-input>
                </el-form-item>
                <el-form-item label="密码"  prop="pwd">
                  <el-input v-model="detail.pwd" :disabled="typepage === 'viwe'"></el-input>
                </el-form-item>
              </div>
              <div class="new-input-item" >
                <el-form-item label="角色名称" prop="roleId">
                  <el-select  v-model="detail.roleId" :disabled="typepage === 'viwe'"  filterable>
                    <el-option v-for="(item, index) in tableData" :key="index" :label="item.roleName" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="公司名称" prop="companyName">
                  <el-input  v-model="detail.companyName" :disabled="typepage === 'viwe'"></el-input>
                </el-form-item>
              </div>
              <div class="new-input-item" >
                <el-form-item label="姓名"  prop="use"> 
                  <el-input     v-model="detail.use" :disabled="typepage === 'viwe'"></el-input>
                </el-form-item>
                <el-form-item label="电话"  prop="mobile"> 
                  <el-input v-model="detail.mobile" :disabled="typepage === 'viwe'"></el-input>
                </el-form-item>
              </div>
              <div class="new-input-item">
                <el-form-item label="邮箱"  prop="email">
                  <el-input  v-model="detail.email" :disabled="typepage === 'viwe'"></el-input>
                </el-form-item>
                <el-form-item label="地址"  prop="address">
                  <el-input type="textarea" v-model="detail.address" :disabled="typepage === 'viwe'"></el-input>
                </el-form-item>
              </div>
              <div class="new-input-item" >
                <el-form-item label="是否启用"  prop="use"> 
                  <el-switch v-model="detail.enable"  active-value="1" :inactive-value="0" active-text="启用" inactive-text="禁用"></el-switch>
                </el-form-item>
                <el-form-item label=" "  prop=" "> 
                </el-form-item>
              </div>
              <div class="new-input-item">
                <div class="new-input-item one">
                  <el-form-item label="头像" prop="imgArr">
                    <div class="imgShow">
                      <viewer :images="detail.imgArr">
                          <img v-for="(item, index) in detail.imgArr" :src="item" :key="index">
                      </viewer>
                    </div>
                  </el-form-item>
                </div>
              </div>
            </el-form>
          </toggle-search>
        </div>
      </div>
       <fixed-button>
        <div slot="left">
          <button class="new-blue-button white" @click="$router.go(-1)">取消</button>
          <button class="new-blue-button ml10" v-if="typepage !== 'view'">保存</button>
        </div>
      </fixed-button>
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
            name: '用户详情',
            link: ''
          }
        ],
        companyList: [],
        detail: {
          use: '',
          pwd: '',
          roleId: '',
          companyName: '',
          useName: '',
          mobile: '',
          email: '',
          address: '',
          enable: '1',
          imgArr: [
            require('../../../assets/timg.jpg') ,
          ]
        },
        tableData: [],
        typepage: '',
        stockfrom: {
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
        }
      }
    },
    methods: {
      getList () {
        this.loading = true
        this.$api.getRoleList('get', 'list').then((res) => {
          this.tableData = res.data || []
          console.log(this.tableData)
          this.loading = false
        })
      },
    },
    mounted () {
      this.$emit('navChange', false, 2, 'lg', 3)
      this.getList()
      this.typepage = this.$route.params.type
    }
  }
</script>
<style lang="less" scoped>
  .repair-detail { 
      background: #fff;
    .detail-con { 
      background: #fff;
      padding: 40px;/*px*/
      width: 1000px;
    }
  }
  .imgShow{
    img{
      margin-left: 10px;
      overflow: hidden;
      border: 1px solid darkgray; 
      border-radius:10px ;
      height: 150px;
      width:150px;}
  }
</style>
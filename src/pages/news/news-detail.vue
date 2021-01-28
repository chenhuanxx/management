<template>
    <div class="news-report  pb_45 mb20 ">
      <el-breadcrumb separator=">" class="wrap-breadcrumb" >
        <el-breadcrumb-item v-for="(item, index) in breadCrumbList" :to="{ path: item.link}" :key="index">{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="repair-detail mb20 ">
        <div class="detail-con">
          <toggle-search toggle open :btnText="{up: '收起', down: '展开'}">
            <div class="descLabel  mb20">新闻</div>
            <el-form :model="detail" ref="stockSubmitDto" :rules="stockfrom"  label-width="140px" label-position="left">
              <div class="new-input-item" >
                <el-form-item label="标题"  prop="use"> 
                  <el-input     v-model="detail.use" :disabled="typepage === 'viwe'"></el-input>
                </el-form-item>
                <el-form-item label="作者"  prop="mobile"> 
                  <el-input v-model="detail.mobile" :disabled="typepage === 'viwe'"></el-input>
                </el-form-item>
              </div>
              <div class="new-input-item" >
                <el-form-item label="描述"  prop="use"> 
                  <el-input     v-model="detail.use" :disabled="typepage === 'viwe'"></el-input>
                </el-form-item>
                <el-form-item label="时间"  prop="mobile"> 
                  <el-input v-model="detail.mobile" :disabled="typepage === 'viwe'"></el-input>
                </el-form-item>
              </div>
              <div class="new-input-item">
                <div class="new-input-item one">
                  <el-form-item label="缩略图" prop="imgArr">
                    <div class="imgShow">
                      <viewer :images="detail.imgArr">
                          <img v-for="(item, index) in detail.imgArr" :src="item" :key="index">
                      </viewer>
                    </div>
                  </el-form-item>
                </div>
              </div>
            </el-form>
            <div class="editor">
              <editor :goods="goods"></editor>
            </div>
          </toggle-search>
        </div>
      </div>
       <fixed-button>
        <div slot="left">
          <button class="new-blue-button white" @click="$router.go(-1)">取消</button>
          <button class="new-blue-button ml10" @click="submit" v-if=" typepage !== 'view'">保存</button>
        </div>
      </fixed-button>
    </div>
</template>
<script>
  import editor from './components/editor'
  export default {
    components: {
      editor
    },
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
        goods: '',
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
          imgArr: [
            require('../../assets/timg.jpg') ,
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
      submit () {
        console.log('goods', this.goods)
      },
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
      this.$emit('navChange', false, 1, 'lg',)
      this.getList()
      this.typepage = this.$route.params.type
    }
  }
</script>
<style lang="less" scoped>
.news-report {
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
}
  
</style>
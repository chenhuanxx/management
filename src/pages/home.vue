<template>
  <div class="homeindex">
    <div class="imglist">
    <video autoplay loop muted>
      <source src="http://kedu-prod.oss-cn-hangzhou.aliyuncs.com/data-centre/common_inventroy.mp4" type="video/mp4" />
    </video> 
    </div>
    <div class="bgimg">
      {{$userInfo.userName}} , 欢迎来到{{$userInfo.company}}管理后台!
    </div> 
    <div class="main-statistics">
      <div class="statistics">
          <div class="statistics-left">
            <div class="statistics-left-bottom">
              <div class="statistics-img">
                <img src="../assets/1.png" alt="">
              </div>
              <dl class="statistics-number">
                <dt>功能数</dt>
                <dd><span>{{formData.hospital || 0}}</span> 家</dd>
              </dl>
            </div>
            <div class="statistics-left-bottom2">
              <div class="statistics-img">
                <img src="../assets/2.png" alt="">
              </div>
              <dl class="statistics-number">
                <dt>设备数</dt>
                <dd><span>{{formData.equipment || 0}}</span> 台</dd>
              </dl>
            </div>
          </div>
          <div class="statistics-right"> 
            <div class="statistics-flex">
              <div class="statistics-right-bottom">
                <div class="statistics-img">
                  <img src="../assets/3.png" alt="">
                </div>
                <dl class="statistics-number">
                  <dt>工单数</dt>
                  <dd><span>{{formData.order || 0}}</span> 单</dd>
                </dl>
              </div>
              <div class="statistics-right-bottom">
                <div class="statistics-img">
                  <img src="../assets/4.png" alt="">
                </div>
                <dl class="statistics-number">
                  <dt>工程师</dt>
                  <dd><span>{{formData.engineer || 0}}</span> 名</dd>
                </dl>
              </div>
              <div class="statistics-right-bottom">
                <div class="statistics-img">
                  <img src="../assets/5.png" alt="">
                </div>
                <dl class="statistics-number">
                  <dt>公司</dt>
                  <dd><span>{{formData.company || 0}}</span> 家</dd>
                </dl>
              </div>
            </div> 
            <div class="statistics-flex">
              <div class="statistics-right-bottom2">
                <div class="statistics-img">
                  <img src="../assets/5.png" alt="">
                </div>
                <dl class="statistics-number">
                  <dt>技术支持单</dt>
                  <dd><span>{{formData.technical || 0}}</span> 单</dd>
                </dl>
              </div>
              <div class="statistics-right-bottom2">
                <div class="statistics-img">
                  <img src="../assets/4.png" alt="">
                </div>
                <dl class="statistics-number">
                  <dt>备件申请单</dt>
                  <dd><span>{{formData.partOrder || 0}}</span> 单</dd>
                </dl>
              </div>
              <div class="statistics-right-bottom2">
              </div>
            </div> 
 
          </div>
        </div>
    </div>
    <div class="banqun">
      <img src="../assets/logo.png" alt="" height="22px" style="padding-top: 9px;"> Copyright &copy; 2017-{{year}} {{$userInfo.companyName}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        hospital: 100,
        equipment: 100,
        order: 100,
        engineer: 100,
        company: 100,
        technical: 100,
        partOrder: 100
      },
      year: new Date().getFullYear(),
    }
  },
  methods: {
  },
  beforeMount () {
    this.$emit('navChange', false, 0)
  }
}
</script>
<style lang="less" scoped>
  .homeindex {
    // position: relative;
    margin-top: -25px;
    height: 100%;
    .imglist {
      position:absolute;
      width: 100%;
      height: 100%;
      left: 0px;
      overflow: hidden;
    }
    .bgimg {  
      position: absolute;
      color: white;
      top: 0px;
      height: 100%;
      width: 100%;
      padding-top:30px ;
      text-align:center
    }
    .main-statistics {
      position: absolute;
      width: 100%;
      top: 100px; 
      left: 0px;
      .statistics {
        color: white;
        width: 90%;
        margin: 0 auto;
        padding:45px 20px;
        height: 380px;
        background: #1312125c;
        .statistics-left {
          overflow: hidden;
          width: 25%;
          padding-left: 30px;
          float: left;
          border-right:1px solid #DCDFE6 ;
        }
        .statistics-left-bottom {
          margin-bottom: 30px;
        }
        .statistics-left-bottom2 {
          margin-bottom: 0px;
        }
        .statistics-img{
          float: left;
          width: 28px;
          margin-top: 10px;
          img{width: 28px;}
        }
        
        .statistics-number{
          margin-left:40px;
          dt {
            font-size: 18px;
            line-height: 250%;
          }
          dd {
            span {
              font-size:36px;
            }
            font-size: 20px;
            line-height: 67px;
          }
        }
        .statistics-right {
          margin-left:5% ;
          width: 68%; 
          float: left;
          .statistics-flex {
            display: flex;
            .statistics-right-bottom {
              flex: 1;
              align-content: space-between;
              margin-bottom: 30px;
            }
            .statistics-right-bottom2 {
              flex: 1;
              align-content: space-between;
              margin-bottom: 0px;
            }
          }
        }
      }
    }
    .banqun {
      height: 30px;
      line-height: 30px;
      width: 100%;
      font-size: 14px;
      position: absolute;
      bottom: 20px;
      color: white;
      text-align: center;
    }
  }
</style>

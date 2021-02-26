<template>
    <div class='stock-report pb_45 mb20 '>
      <el-breadcrumb separator='>' class='wrap-breadcrumb' >
        <el-breadcrumb-item v-for='(item, index) in breadCrumbList' :to='{ path: item.link}' :key='index'>{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class='repair-detail mb20 '>
        <div class='detail-con'>
          <button class='new-blue-button ml10' @click='wxzfjk()'>微信支付接口</button>
        </div>
      </div>
    </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        breadCrumbList: [
          {
            name: '微信支付',
            link: ''
          },
          {
            name: '微信支付详情',
            link: ''
          }
        ]
      }
    },
    methods: {
      wxzfjk () {
        let params = {
          time_expire: '2018-06-08T10:34:56+08:00',
          amount: {
            total: 100,
            currency: 'CNY'
          },
          mchid: '1230000109',
          description: 'Image形象店-深圳腾大-QQ公仔',
          notify_url: 'https://www.weixin.qq.com/wxpay/pay.php',
          payer: {
            openid: 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o'
          },
          out_trade_no: '1217752501201407033233368018',
          goods_tag: 'WXG',
          appid: 'wxd678efh567hg6787',
          attach: '自定义数据说明',
          detail: {
          invoice_id: 'wx123',
          goods_detail: [{
            goods_name: 'iPhoneX 256G',
            wechatpay_goods_id: '1001',
            quantity: 1,
            merchant_goods_id: '商品编码',
            unit_price: 828800
            }, 
            {
              goods_name: 'iPhoneX 256G',
              wechatpay_goods_id: '1001',
              quantity: 1,
              merchant_goods_id: '商品编码',
              unit_price: 828800
            }],
            cost_price: 608800
          },
          scene_info: {
            store_info: {
              address: '广东省深圳市南山区科技中一道10000号',
              area_code: '440305',
              name: '腾讯大厦分店',
              id: '0001'
            },
            device_id: '013467007045764',
            payer_client_ip: '14.23.150.211'
          },
          settle_info: {
            profit_sharing: false
          }
        }
        axios({
          method: 'post',
          url: 'https://api.mch.weixin.qq.com/v3/pay/transactions/jsapi',
          data: params,
          timeout: 1000,
        }).then(res => {
          if (res.data.status === 'success') {
            this.$message.success('修改成功！')
          } else {
            this.$message.warning(res.data.message)
          }
        })
        // this.$api.axios('post', {
        //   useOption: true,
        //   url: 'https://api.mch.weixin.qq.com/v3/pay/transactions/jsapi',
        //   withCredentials: false,
        //   params
        // }).then(res => {
        //   if (res.data.status === 'success') {
        //     this.$message.success('修改成功！')
        //   } else {
        //     this.$message.warning(res.data.message)
        //   }
        // })
      }
    },
    mounted () {
      this.$emit('navChange', false, 3, 'lg')
    }
  }
</script>
<style lang='less' scoped>
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
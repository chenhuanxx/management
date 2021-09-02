<template>
  <div class="big-screen3">
    <map ></map>
  </div>
</template>
<script>
import map from '@/components/map.vue'
  export default {
    components: {
      map
    },
    name: 'big-screen2',
    data () {
      return {
        active: 0,
        dialogTableVisible: false,
      }
    },
    methods: {},
    beforeMount () {
      document.addEventListener('webkitfullscreenchange', () => { // 'esc' 大屏跳转 home 页面
        if (!document.webkitFullscreenElement) {
          this.$router.push('/')
        }
      })
    },
    mounted () {
      this.$emit('navChange', true) // 隐藏左侧菜单栏
    },
    beforeDestroy () {
      this.$notify.closeAll()
      document.querySelector('#big-screen-audio').muted = true
      document.querySelector('#big-screen-audio').pause()
    }
  }
</script>
 <style lang="less">
  .big-screen3{
    .el-dialog{
      width: 69.6875vw;
      height: 61.1111vh;
      background-image: url("../assets/screen2/pop-background.png");
      background-position: center;
      background-repeat: no-repeat;
      background-color: transparent;
      .el-dialog__header{
        display: none;
      }

      .el-pagination-wrapper{
        width: 100%;
        text-align: center;
        margin-top: 1.3888vh;
        .el-pagination{
          color: #8ED0FF;
          .el-pagination__total{
            color: #8ED0FF;
          }
          .el-input__inner{
            background-color: #17386E;
            color: #1989FA;
          }
          .el-pager li.active{
            color: #1989FA;
          }
          & span{
            background-color: transparent;
            color: #8ED0FF;
          }
          & button{
            background-color: transparent;
            color: #1989FA;
          }
          & button:disabled{
            color: #ffffff;
          }
          .el-pager{
            & li{
              background-color: transparent;
            }
          }
        }
      }
    }
  }
  .swiper-container{
    .swiper-pagination{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .swiper-pagination-bullet {
        margin-right: 2px;
        display: block;
        width: 0.5208vw ;
        height: 0.3703vh ;
        background: rgba(119,136,153,1) ;
        opacity: 0.8;
        transition: all 0.2s; //可设置缓慢变化
      }
      .swiper-pagination-bullet-active {
        display: block;
        width: 1.25vw;
        height: 0.3703vh;
        opacity: 1;
        background: rgba(0,136,255,1);
        border-radius: 2px;
      }
    }
  }

</style>

<style scoped lang="less">
  // 目前屏幕支持到1366 * 768
  .big-screen3{
    video{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
    position: absolute;
    width: 100%;
    height: 100vh;
    min-height: 768px;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #141D28;

    .dialog-body{
      padding: 0.5208vw;
      box-sizing: border-box;
      .screen3-label{
        height: 4.6296vh;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-top: 2.7778vh;
        .time-change {
          position: absolute;
          right: 3.4375vw;
          font-size: 0.7291vw;
          color: rgba(130, 223, 230, 1);
          font-weight: 600;
          font-family: PingFangSC-Semibold, PingFang SC;
          align-self: center;

          & li {
            float: left;
            width: 3.3854vw;
            margin: 0 5px;
            padding-bottom: 4px;
            text-align: center;
            cursor: pointer;
            user-select: none;

            &.active {
              border-bottom: 4px solid #33AAFF;
              color: #33AAFF;
            }
          }
        }
        .screen3-label-flag{
          display: block;
          width: 0.2083vw;
          height: 1.4814vh;
          background: rgba(0,136,255,1);
          margin-left: 0.5208vw;
          margin-right: 0.2604vw;
        }
        .screen3-label-value{
          font-size: 0.9375vw;
          color: rgba(220,223,230,1);
          font-weight: 600;
          font-family: PingFangSC-Semibold, PingFang SC;
        }
      }
      .dialog-table-wrapper{
        padding-left: 0.9375vw;
        padding-right: 0.9375vw;
        padding-bottom: 0.9375vw;
        box-sizing: border-box;
        .dialog-html-table{
          height: 32.4074vh;
          & table{
            width: 100%;
            border: 1px solid red;
            border: 0px;
            border-collapse:collapse;
            table-layout:fixed;
            & th{
              font-size: 0.7291vw;
              text-align: left;
              height: 2.7778vh;
              line-height: 2.7778vh;
              border: 0px;
              // border-bottom: 1px dotted #334455;
              color: rgba(220,223,230,1);
              font-weight: 600;
              font-family: PingFangSC-Semibold, PingFang SC;
            }

            & td{
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-size: 0.7291vw;
              text-align: left;
              height: 2.7778vh;
              line-height: 2.7778vh;
              border: 0px;
              border-top: 1px dotted #334455;
              color: rgba(130,203,255,1);
              font-weight: 400;
              font-family: PingFangSC-Semibold, PingFang SC;
            }

            .td_backgroud{
              color:#ffffff;
              background-color: #EE5555;
            }
          }
        }

        .el-pagination-wrapper{
          width: 100%;
          text-align: center;
          margin-top: 1.3888vh;
        }
        .el-button-wrapper{
          width: 100%;
          text-align: center;
          margin-top: 1.3888vh;
          & button{
            width: 5.2083vw;
            height: 3.7037vh;
            background-color: #0088FF;
            color: #ffffff;
            border: 1px solid #0088FF;
          }
        }
      }
    }

    .span-click{
      cursor: pointer;
    }

    .screen3-main-wrapper{
      position: relative;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      filter: blur(0px);

      .screen3-top{
        width: 100%;
        height: 12vh;
        min-height: 92.5px;
        padding-bottom: 1.75vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: flex-end;

        .top-info{
          height: 100%;
          width: 43.75vw;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          .top-content-title{
            color: rgba(220,223,230,1);
            font-weight: 600;
            font-family: PingFangSC-Semibold, PingFang SC;
            padding-left: 3vw;
            max-width: 12em;
            font-size: 2vw;
            overflow: hidden;
            height: 2.7vw;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .top-content-time{
            color: rgba(220,223,230,1);
            font-weight: 600;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-size: 1.455vw;
            padding-left: 1.56vw;
          }
        }

        .top-content-right{
          width: 56.25vw;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          flex-flow: nowrap;
          align-items: flex-end;
          .top-content-child{
            width: 8.5vw;
            .title{
              width: 100%;
              font-size: 0.9375vw;
              color: rgba(220,223,230,1);
              font-weight: 600;
              font-family: PingFangSC-Semibold, PingFang SC;
            }
            .content{
              width: 100%;
              display: flex;
              flex-flow: nowrap;
              flex-direction: row;
              justify-content: space-between;
              margin-top: 0.26vw;
              /*文字禁止编辑*/
              -moz-user-select: none; /*火狐*/
              -webkit-user-select: none; /*webkit浏览器*/
              -ms-user-select: none; /*IE10*/
              -khtml-user-select: none; /*早期浏览器*/
              user-select: none;
              .content-pane{
                width: 1.5625vw;
                height: 2.6042vw;
                border-radius: 0.3125vw;
                background-color: rgba(51,170,255,0.25);
                border: 1px solid rgba(51,170,255,1);
                text-align: center;
                line-height: 2.6042vw;
                font-size: 1.5625vw;
                color: rgba(220,223,230,1);
                font-weight: 600;
                font-family: PingFangSC-Semibold, PingFang SC;
              }
              .content-span{
                font-size: 1.25vw;
                color: rgba(220,223,230,1);
                font-weight: 600;
                font-family: PingFangSC-Semibold, PingFang SC;
                align-self: flex-end;
              }

              /*滚动数字设置*/
              .number-item {
                list-style: none;
                & > span {
                  position: relative;
                  display: inline-block;
                  margin-right: 0.5208vw;
                  width: 100%;
                  height: 100%;
                  writing-mode: vertical-rl;
                  text-orientation: upright;
                  overflow: hidden;
                  & > i {
                    font-style: normal;
                    position: absolute;
                    top: 1.0185vh;
                    left: 50%;
                    transform: translate(-50%,0);
                    transition: transform 1s ease-in-out;
                    letter-spacing: 0.9259vh;
                  }
                }
              }
              .number-item:last-child {
                margin-right: 0;
              }
            }
          }
        }
      }
      .screen3-center{
        width: 100%;
        min-height: 675.5px;
        height: 88vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: stretch;

        .top-height{
          height: 41.2vh;
          box-sizing: border-box;
        }
        .center-height{
          margin-top: 1.85vh;
          height: 19.675vh;
          box-sizing: border-box;
          background: rgba(0,0,0,0.5);
        }
        .bottom-height{
          margin-top: 1.85vh;
          height: 19.675vh;
          box-sizing: border-box;
          background: rgba(0,0,0,0.5);
        }

        .first-height , .second-height , .third-height , .forth-height{
          height: 19.675vh;
          box-sizing: border-box;
        }
        .second-height , .third-height , .forth-height{
          margin-top: 1.85vh;
          background: rgba(0,0,0,0.5);
        }

        .screen3-label{
          height: 4.6296vh;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          position: relative;
          .screen3-label-full {
            position: absolute;
            top: 1vw;
            right: 1vw;
            width: 0.8vw;
            height: 0.8vw;
            cursor: pointer;
          }
          .screen3-label-flag{
            display: block;
            width: 0.2083vw;
            height: 1.4814vh;
            background: rgba(0,136,255,1);
            margin-left: 0.5208vw;
            margin-right: 0.2604vw;
          }
          .screen3-label-value{
            font-size: 0.9375vw;
            color: rgba(220,223,230,1);
            font-weight: 600;
            font-family: PingFangSC-Semibold, PingFang SC;
          }

        }

        .screen3-content-left{
          width: 28.64%;
          min-width: 391px;
          box-sizing: border-box;
          padding-left: 2.083vw;
          padding-right: 1.041vw;

          .content-left-top{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            flex-flow: wrap;

            .left-top-panel-wrapper{
              display: flex;
              flex-direction: column;
              flex-flow: wrap;
              margin-left: 0.9375vw;
              margin-right: 0.9375vw;
              margin-bottom: 1.6667vh;
              .panel-1-color-1{
                color:rgba(0,136,255,1);
              }
              .panel-1-color-2{
                color: rgba(103,194,58,1);
              }
              .panel-1-color-3{
                color: rgba(238,85,85,1);
              }
              .panel-1-color-4{
                color: rgba(255,153,0,1);
              }
              .panel-1-label{
                width: 100%;
                display: block;
                font-size: 0.7291vw;
                color: rgba(220,223,230,1);
                font-weight: 600;
                font-family: PingFangSC-Semibold, PingFang SC;
              }
              .panel-1-value{
                margin-top: 0.5555vh;
                width: 100%;
                display: block;
                font-size: 0.9375vw;
                font-weight: 600;
                font-family: PingFangSC-Semibold, PingFang SC;
              }
              .panel-1{
                width: 60%;
                height: 5.8796vh;
                box-sizing: border-box;
                padding-top: 0.4629vh;
              }
              .panel-2{
                width: 40%;
                height: 5.8796vh;
                box-sizing: border-box;
                padding-top: 0.4629vh;
              }
              .panel-3{
                width: 50%;
                height: 5.8796vh;
                box-sizing: border-box;
                padding-top: 0.4629vh;
              }
              .panel-4{
                width: 50%;
                height: 5.8796vh;
              }

            }

            .top-top{
              width: 100%;
              height: 19.675vh;
              display: flex;
              flex-direction: row;
              justify-content: space-between;

              .top-content-left{
                width: 12.2395vw;
                height: 100%;
                background: rgba(0,0,0,0.5);
              }
              .top-content-right{
                width: 12.2395vw;
                height: 100%;
                background: rgba(0,0,0,0.5);
              }
            }

            .top-bottom{
              width: 100%;
              height: 19.675vh;
              align-self: flex-end;
              background: rgba(0,0,0,0.5);
              .top-bottom-panel-wrapper{
                padding-top: 0.9259vh;
                box-sizing: border-box;
                padding-left: 0.9375vw;
                padding-right: 0.9375vw;
                //padding-bottom: 1.6667vh;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                .panel-5{
                  width: 3.6458vw;
                  //height: 7.0629vh;
                  box-sizing: border-box;
                  display: flex;
                  flex-direction: column;
                  .panel-percent{
                    display: block;
                    width: 100%;
                    margin-bottom: 1px;
                    font-size: 0.625vw;
                    color: rgba(130,203,255,1);
                    font-weight: 400;
                    font-family: PingFangSC-Semibold, PingFang SC;
                    text-align: center;
                  }
                  .panel-pie{
                    display: block;
                    width: 2.6041vw;
                    height: 4.6296vh;
                    align-self: center;
                  }
                  .panel-label{
                    margin-top: 0.3703vh;
                    font-size: 0.7291vw;
                    color: rgba(130,203,255,1);
                    font-weight: 600;
                    font-family: PingFangSC-Semibold, PingFang SC;
                    text-align: center;
                  }
                }
              }
            }
          }
          .content-left-center{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            flex-flow: wrap;



            .left-center-panel-wrapper{
              box-sizing: border-box;
              padding-left: 0.9375vw;
              // padding-right: 0.9375vw;
              .swiper-slide{
                display: flex;
                flex-direction: row;
                justify-content: flex-start;

                .panel-5{
                  width: 4.1667vw;
                  // height: 11.5740vh;
                  box-sizing: border-box;
                  display: flex;
                  flex-direction: column;
                  margin-right: 0.5208vw;
                  .panel-percent{
                    display: block;
                    width: 100%;
                    margin-bottom: 0.3703px;
                    font-size: 0.625vw;
                    color: rgba(130,203,255,1);
                    font-weight: 400;
                    font-family: PingFangSC-Semibold, PingFang SC;
                    text-align: center;
                  }
                  .panel-pie{
                    display: block;
                    width: 3.6458vw;
                    height: 6.4814vh;
                    align-self: center;
                  }
                  .panel-label{
                    margin-top: 1.0185vh;
                    font-size: 0.7291vw;
                    color: rgba(130,203,255,1);
                    font-weight: 600;
                    font-family: PingFangSC-Semibold, PingFang SC;
                    text-align: center;
                  }
                }
              }

            }
          }
          .content-left-bottom{
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            flex-flow: wrap;
            .time-change {
              position: absolute;
              right: 0.3125vw;
              font-size: 0.7291vw;
              color: rgba(130,223,230,1);
              font-weight: 600;
              font-family: PingFangSC-Semibold, PingFang SC;
              align-self: center;
              & li{
                float: left;
                width: 3.3854vw;
                margin: 0 5px;
                padding-bottom: 4px;
                text-align: center;
                cursor: pointer;
                user-select: none;
                &.active {
                  border-bottom: 4px solid #33AAFF;
                  color: #33AAFF;
                }
              }
            }
            .left-bottom-panel-wrapper{
              width: 100%;
              height: 16.3888vh;
              .swiper-slide{
                box-sizing: border-box;
                padding-left: 0.9375vw;
                padding-right: 0.9375vw;
                width: 98%;
                .panel-6{
                  width: 100%;
                  height: 15vh;
                }
              }
            }
          }
        }
        .screen3-content-center{
          width: 42.72%;
          min-width: 584px;
          box-sizing: border-box;

          .content-center-top{
            background: rgba(0,0,0,0.5);
          }

          .center-top-panel-wrapper{
            padding-left: 0.9375vw;
            padding-right: 0.9375vw;
            padding-bottom: 1.6667vh;
            box-sizing: border-box;
            .ul-wrapper {
              width: 100%;
              height: 13.5vh;
              overflow: hidden;
              .seamless-warp {
                // height: 23.3333vh;
                overflow: hidden;
              }

              .li-title {
                color: rgba(220, 223, 230, 1);
                font-weight: 600;
              }

              .li-content {
                color: rgba(130, 203, 255, 1);
                font-weight: 600;
                border-top: 1px dotted #334455;
                box-sizing: border-box;
              }

              .li-content-back {
                background: rgba(238, 85, 85, 0.49);
                color: #ffffff;
              }

              & li {
                display: flex;
                justify-content: flex-start;
                width: 100%;

                & span {
                  display: block;
                  text-align: left;
                  box-sizing: border-box;
                  padding-left: 1px;
                  padding-right: 1px;
                  font-size: 0.7291vw;
                  font-family: PingFangSC-Semibold, PingFang SC;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  height: 2.5vh;
                  line-height: 2.5vh;
                }

                .span-1 {
                  width: 12.96875vw;
                }

                .span-2 {
                  width: 7.3958vw;

                }

                .span-3 {
                  width: 2.5vw;
                }

                .span-4 {
                  width: 7.8125vw;
                }

                .span-5 {
                  width: 3.6458vw;
                }

                .span-6 {
                  width: 2.5vw;
                }

                .span-7 {
                  width: 3.3333vw;
                }
              }
            }
            /*& table{*/
            /*  width: 100%;*/
            /*  border: 0px;*/
            /*  border-collapse:collapse;*/
            /*  table-layout:fixed;*/
            /*  & th{*/
            /*    font-size: 0.7291vw;*/
            /*    text-align: left;*/
            /*    height: 2.4vh;*/
            /*    border: 0px;*/
            /*    border-bottom: 1px dotted #334455;*/
            /*    color: rgba(220,223,230,1);*/
            /*    font-weight: 600;*/
            /*    font-family: PingFangSC-Semibold, PingFang SC;*/
            /*  }*/

            /*  & td{*/
            /*    overflow: hidden;*/
            /*    white-space: nowrap;*/
            /*    text-overflow: ellipsis;*/
            /*    font-size: 0.7291vw;*/
            /*    text-align: left;*/
            /*    height: 2.4vh;*/
            /*    border: 0px;*/
            /*    border-bottom: 1px dotted #334455;*/
            /*    color: rgba(130,203,255,1);*/
            /*    font-weight: 400;*/
            /*    font-family: PingFangSC-Semibold, PingFang SC;*/
            /*  }*/

            /*  .td_backgroud{*/
            /*    color:#ffffff;*/
            /*    background-color: #EE5555;*/
            /*  }*/
            /*}*/
          }
          .center-center-panel-wrapper{
            padding-left: 0.9375vw;
            padding-right: 0.9375vw;
            padding-bottom: 1.6667vh;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            .ul-wrapper {
              width: 33.9062vw;
              height: 14vh;
              overflow: hidden;
              .seamless-warp {
                height: 13vh;
                overflow: hidden;
              }
              .li-title{
                color: rgba(220,223,230,1);
                font-weight: 600;
              }
              .li-content{
                color: rgba(130,203,255,1);
                font-weight: 600;
                border-top: 1px dotted #334455;
                box-sizing: border-box;
              }
              .li-content-back{
                background: rgba(238,85,85,0.49);
                color: #ffffff;
              }

              & li {
                display: flex;
                justify-content: flex-start;
                width: 100%;

                & span {
                  display: block;
                  text-align: left;
                  box-sizing: border-box;
                  padding-left: 1px;
                  padding-right: 1px;
                  font-size: 0.7291vw;
                  font-family: PingFangSC-Semibold, PingFang SC;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  height: 2.5vh;
                  line-height: 2.5vh;
                }

                .span-1 {
                  width: 12.96875vw;
                }

                .span-2 {
                  width: 5.2604vw;

                }

                .span-3 {
                  width: 10.4166vw;
                }

                .span-4 {
                  width: 5.15625vw;
                }
              }
            }
            /*& table{*/
            /*  width: 33.9062vw;*/
            /*  border: 1px;*/
            /*  border-collapse:collapse;*/
            /*  table-layout:fixed;*/

            /*  & th{*/
            /*    font-size: 0.7291vw;*/
            /*    text-align: left;*/
            /*    height: 2.4vh;*/
            /*    border: 0px;*/
            /*    border-bottom: 1px dotted #334455;*/
            /*    color: rgba(220,223,230,1);*/
            /*    font-weight: 600;*/
            /*    font-family: PingFangSC-Semibold, PingFang SC;*/
            /*  }*/

            /*  & td{*/
            /*    overflow: hidden;*/
            /*    white-space: nowrap;*/
            /*    text-overflow: ellipsis;*/
            /*    font-size: 0.7291vw;*/
            /*    text-align: left;*/
            /*    height: 2.4vh;*/
            /*    border: 0px;*/
            /*    border-bottom: 1px dotted #334455;*/
            /*    color: rgba(130,203,255,1);*/
            /*    font-weight: 400;*/
            /*    font-family: PingFangSC-Semibold, PingFang SC;*/
            /*  }*/
            /*}*/

            .panel-10{
              height: 16.6666vh;
              width: 5.1041vw;
              align-self: center;
              margin-left: 1.0937vw;
              display: flex;
              flex-direction: column;
              .panel-percent{
                display: block;
                width: 100%;
                margin-bottom: 0.8333vh;
                font-size: 0.625vw;
                color: rgba(255,255,255,1);
                font-weight: 600;
                font-family: PingFangSC-Semibold, PingFang SC;
                text-align: center;
              }
              .panel-pie{
                display: block;
                width: 4.6875vw;
                height: 8.3333vh;
                align-self: center;
              }
              .panel-label{
                margin-top: .2vw;
                font-size: 0.7291vw;
                color: rgba(130,203,255,1);
                font-weight: 600;
                font-family: PingFangSC-Semibold, PingFang SC;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
              }

              .panel-label-1{
                font-size: 0.7291vw;
                color: rgba(130,203,255,1);
                font-weight: 600;
                font-family: PingFangSC-Semibold, PingFang SC;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
              }
            }
          }
          .center-bottom-panel-wrapper{
            padding-left: 0.9375vw;
            padding-right: 0.9375vw;
            padding-bottom: 1.6667vh;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;

            .ul-wrapper {
              width: 33.9062vw;
              height: 14vh;
              overflow: hidden;
              .seamless-warp {
                height: 13vh;
                overflow: hidden;
              }
              .li-title{
                color: rgba(220,223,230,1);
                font-weight: 600;
              }
              .li-content{
                color: rgba(130,203,255,1);
                font-weight: 600;
                border-top: 1px dotted #334455;
                box-sizing: border-box;
              }
              .li-content-back{
                background: rgba(238,85,85,0.49);
                color: #ffffff;
              }

              & li {
                display: flex;
                justify-content: flex-start;
                width: 100%;

                & span {
                  display: block;
                  text-align: left;
                  box-sizing: border-box;
                  padding-left: 1px;
                  padding-right: 1px;
                  font-size: 0.7291vw;
                  font-family: PingFangSC-Semibold, PingFang SC;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  height: 2.5vh;
                  line-height: 2.5vh;
                }

                .span-1 {
                  width: 12.96875vw;
                }

                .span-2 {
                  width: 5.2604vw;

                }

                .span-3 {
                  width: 10.4166vw;
                }

                .span-4 {
                  width: 5.15625vw;
                }
              }
            }
            /*& table{*/
            /*  width: 33.9062vw;*/
            /*  border: 1px;*/
            /*  border-collapse:collapse;*/
            /*  table-layout:fixed;*/

            /*  & th{*/
            /*    font-size: 0.7291vw;*/
            /*    text-align: left;*/
            /*    height: 2.4vh;*/
            /*    border: 0px;*/
            /*    border-bottom: 1px dotted #334455;*/
            /*    color: rgba(220,223,230,1);*/
            /*    font-weight: 600;*/
            /*    font-family: PingFangSC-Semibold, PingFang SC;*/
            /*  }*/

            /*  & td{*/
            /*    overflow: hidden;*/
            /*    white-space: nowrap;*/
            /*    text-overflow: ellipsis;*/
            /*    font-size: 0.7291vw;*/
            /*    text-align: left;*/
            /*    height: 2.4vh;*/
            /*    border: 0px;*/
            /*    border-bottom: 1px dotted #334455;*/
            /*    color: rgba(130,203,255,1);*/
            /*    font-weight: 400;*/
            /*    font-family: PingFangSC-Semibold, PingFang SC;*/
            /*  }*/
            /*}*/

            .panel-10{
              height: 16.6666vh;
              width: 5.1041vw;
              align-self: center;
              margin-left: 1.0937vw;
              display: flex;
              flex-direction: column;
              .panel-percent{
                display: block;
                width: 100%;
                margin-bottom: 0.8333vh;
                font-size: 0.625vw;
                color: rgba(255,255,255,1);
                font-weight: 600;
                font-family: PingFangSC-Semibold, PingFang SC;
                text-align: center;
              }
              .panel-pie{
                display: block;
                width: 4.6875vw;
                height: 8.3333vh;
                align-self: center;
              }
              .panel-label{
                margin-top: .2vw;
                font-size: 0.7291vw;
                color: rgba(130,203,255,1);
                font-weight: 600;
                font-family: PingFangSC-Semibold, PingFang SC;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
              }

              .panel-label-1{
                font-size: 0.7291vw;
                color: rgba(130,203,255,1);
                font-weight: 600;
                font-family: PingFangSC-Semibold, PingFang SC;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
              }
            }
          }
        }
        .screen3-content-right{
          width: 28.64%;
          min-width: 391px;
          box-sizing: border-box;
          padding-left: 1.041vw;
          padding-right: 2.083vw;

          .content-right-top{
            background: rgba(0,0,0,0.5);

          }

          .right-top-panel-wrapper{
            box-sizing: border-box;
            padding-left: 0.9375vw;
            padding-right: 0.9375vw;
            width: 100%;
            height: 14vh;
            .panel-7{
              width: 100%;
              height: 14vh;
            }
          }

          .right-center-panel-wrapper{
            box-sizing: border-box;
            padding-left: 0.9375vw;
            padding-right: 0.9375vw;
            width: 100%;
            height: 14vh;
            .panel-8{
              width: 100%;
              height: 14vh;
            }
          }

          .right-bottom-panel-wrapper{
            box-sizing: border-box;
            padding-left: 0.9375vw;
            padding-right: 0.9375vw;
            width: 100%;
            height: 14vh;
            .panel-9{
              width: 100%;
              height: 14vh;
            }
          }
        }
      }
    }
  }

</style>

<template>
  <div class="new-upload">
    <el-upload
      ref="upload"
      :multiple="multiple"
      v-loading="uploading"
      :class="{'no-upload': disabled}"
      :disabled="disabled"
      :fileList="uploadList"
      :list-type="this.type"
      :accept="fileType"
      :on-preview="imgPreview"
      :on-remove="imgRemove"
      :show-file-list="this.type === 'picture-card'"
      :http-request="myUpload">
      <slot>
        <i class="el-icon-plus"></i>
      </slot>
    </el-upload>
    <image-viewer :initial-index="imageIndex" v-if="previewImg" :on-close="closeViewer" :url-list="imgdata"/>
  </div>
</template>

<script>
export default {
  name: 'newUpload',
  data () {
    return {
      init: false,
      uploadList: [],
      imgdata: [],
      uploadListshow: false,
      canEdit: true,
      previewImg: false,
      uploading: false
    }
  },
  watch: {
    fileList: {
      // immediate: true,
      handler () {
        if (this.init && this.fileList.length <= 0) {
          return false
        }
        this.init = true
        this.fileList.forEach(item => {
          item.status = 'success'
          item.url = item.fileUrl || item.fileLocation
          item.name = item.fileName || item.url.substring(item.url.lastIndexOf('/') + 1, item.url.length)
          item.fileName = item.name
          item.badEventFileType = item.badEventFileType
        })
        this.uploadList = this.fileList
      }
    }
  },
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    message: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'picture-card'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fileList: {
      type: Array,
      default: function () {
        return []
      }
    },
    fileType: {
      type: Array,
      default: function () {
        return ['.jpg', '.jpeg', '.png', '.gif']
      }
    },
    fileSize: {
      type: Number,
      default: 20
    },
    sign: {
      type: String,
      default: ''
    },
    badEventFileType: {
      type: String,
      default: ''
    }
  },
  methods: {
    closeViewer () {
      this.previewImg = false
    },
    imgPreview (file) {
      this.imgdata = []
      this.fileList.forEach((item, index) => {
        this.imgdata.push(item.url)
        if (item.url === file.url) {
          this.imageIndex = index
        }
      })
      this.previewImg = true
    },
    imgRemove (file, fileList) {
      this.fileList.splice(this.fileList.indexOf(file), 1)
    },
    myUpload (param) {
    //   this.$api.myUpload(param, {
    //     action: this.sign,
    //     type: this.fileType,
    //     size: this.fileSize,
    //     beforeUpload: (file) => {
    //       this.uploading = true
    //     },
    //     success: (event, file) => {
    //       this.$refs.upload.uploadFiles.forEach(item => {
    //         if (item.uid === file.uid && item.size === file.size) {
    //           item.uploadTime = this.$api.formatDate(new Date().getTime(), 'yyyy-MM-dd hh:mm:ss')
    //           item.fileUrl = file.tempUrl
    //           item.fileLocation = file.tempUrl
    //           item.fileName = file.name
    //           item.fileType = file.fileType
    //           item.url = file.tempUrl
    //           item.status = 'success'
    //           if (this.badEventFileType === 'province') {
    //             item.badEventFileType = 'province'
    //           } else if (this.badEventFileType === 'nantional') {
    //             item.badEventFileType = 'nantional'
    //           } else {
    //             delete item['badEventFileType']
    //           }
    //           this.fileList.push(item)
    //         }
    //       })
    //       console.log('filelist', this.fileList)
    //       this.$emit('success', file, this.fileList)
    //       this.uploading = false
    //       if (this.message) {
    //         this.$message.success('上传成功')
    //       }
    //     },
    //     error: (event, file) => {
    //       this.$refs.upload.uploadFiles.splice(this.$refs.upload.uploadFiles.indexOf(file), 1)
    //       this.uploading = false
    //       this.$message.error('上传失败')
    //     }
    //   })
    // }
  },
  mounted () {}
}
</script>
<style  scoped>
  .new-upload /deep/ .no-upload .el-upload--picture-card {
    display: none;
  }
</style>

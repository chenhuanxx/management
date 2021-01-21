<template>
       <div>
          <quill-editor v-model="goods" :options="editorOption"></quill-editor>
          <el-button @click="csa">sasa</el-button>
       </div>
</template>
<script>
  export default {
    name: 'UE',
    props: {
      goods: {
        type: String,
        default: function () {
          return {}
        }
      }
    },
    data () {
      return {
        goods: '',
        editorOption: [
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote', 'code-block'],
          [{ header: 1 }, { header: 2 }, { header: 3 }], // custom button values
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
          [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
          [{ direction: 'rtl' }], // text direction
          [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],
          ['link', 'image', 'video'],
          ['clean'] // remove formatting button
        ]
      }
    },
    props: {
    },
    mounted() {
    },
    methods: {
      csa () {
        console.log('editorOption', this.editorOption)
        console.log('sas', this.goodsForm.goods)
      }
    },
    destroyed() {
    }
  }
</script>
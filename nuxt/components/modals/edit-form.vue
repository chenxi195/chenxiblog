<template>
    <el-form :model="form">
        <el-form-item label="文章类型" prop="type" :label-width="formLabelWidth">
            <el-select v-model="form.type" placeholder="请选择文章类型">
                <el-option label="Nodejs" :value="1"></el-option>
                <el-option label="Javascript & jQuery & MVVM" :value="2"></el-option>
                <el-option label="HTML5, CSS3, SASS & LESS" :value="3"></el-option>
                <el-option label="Others" :value="4"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="文章标题" prop="title" :label-width="formLabelWidth">
            <el-input v-model="form.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="文章概述" prop="summary" :label-width="formLabelWidth">
            <el-input v-model="form.summary" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="上传文件" :label-width="formLabelWidth" v-show="false">
            <el-upload
                    :action="qnLocation"
                    :before-upload='beforeUpload'
                    :data="uploadData"
                    :on-success='upScuccess'
                    ref="upload"
            >
                <el-button type="text" id="imgInput">点击上传</el-button>
            </el-upload>
        </el-form-item>
        <el-form-item label="文章内容" prop="content" :label-width="formLabelWidth" class="editor-container">
            <!--<div class="quill-editor" style="height: 300px;overflow-y: auto;"-->
                 <!--:content="form.content"-->
                 <!--@change="onEditorChange($event)"-->
                 <!--@blur="onEditorBlur($event)"-->
                 <!--@focus="onEditorFocus($event)"-->
                 <!--@ready="onEditorReady($event)"-->
                 <!--v-quill:myQuillEditor="editorOption">-->
            <!--</div>-->
            <quill-editor
                class="quill-editor"
                v-model="form.content"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @change="onEditorChange($event)"
                @ready="onEditorReady($event)"
            >
            </quill-editor>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
  props: {
    data: [Object]
  },
  mounted () {
    this.$refs.myQuillEditor.quill.getModule('toolbar').addHandler('image', this.imgHandler)
  },
  computed:{
    qnLocation () {
      if (location.protocol === 'http:') {
        return 'http://upload.qiniup.com'
      }
      return 'https://upload.qiniup.com'
    }
  },
  data () {
    return {
      editorOption: {
//        modules: {
//          toolbar: [
//            [{ 'size': ['small', false, 'large', 'huge'] }],
//            ['bold', 'italic', 'underline', 'strike'],
//            ['blockquote', 'code-block'],
//            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//            [{ 'color': [] }]
//          ]
//        }
      },
      formLabelWidth: '80px',
      form: {
        type: this.data.type || 1,
        title: this.data.title || '',
        summary: this.data.summary || '',
        content: this.data.content || '',
        id: this.data.id || null
      },
      uploadType: '',
      addRange: [],
      uploadData: {
        token: '',
        key: ''
      },
      photoUrl: '',
      imgDomain: '/pgd/imgs'
    }
  },
  methods: {
    beforeUpload (file) {
      const suffix = file.name.split('.');
      const ext = suffix.splice(suffix.length - 1, 1)[0];
      if (this.uploadType === 'image') {
        //上传图片
        return this.$axios.get('/getToken')
          .then(rs => {
            if(rs.data.code==='1'){
              this.$set(this.uploadData, 'token', rs.data.data.token);
              this.$set(this.uploadData, 'key', `image_${suffix.join('.')}_${new Date().getTime()}.${ext}`);
            }else{
              self.$message.error(res.data.description);
            }
          })
          .catch(e=>{
            this.$message({type: 'error', message: e.message});
          })

      } else if (this.uploadType === 'video') {
        //上传视频
      }
    },
    upScuccess (e, file, fileList) {
      let vm = this;
      let url = '';
      if (this.uploadType === 'image') {
        url = `${this.imgDomain}/${e.key}`;
      } else if (this.uploadType === 'video') {

      }
      if (url != null && url.length > 0) {
        vm.addRange = vm.$refs.myQuillEditor.quill.getSelection();
        vm.$refs.myQuillEditor.quill.insertEmbed(vm.addRange !== null ? vm.addRange.index : 0, vm.uploadType, url, null)   // 调用编辑器的 insertEmbed 方法，插入URL
      }else{
        this.$message({type: 'error', message: `${vm.uploadType}插入失败`});
      }
    },
    imgHandler (state) {
      this.addRange = this.$refs.myQuillEditor.quill.getSelection();
      if (state) {
        let fileInput = document.getElementById('imgInput');
        fileInput.click();
      }
      this.uploadType = 'image'
    },
    onEditorBlur(editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      console.log('editor ready!', editor)
    },
    onEditorChange({ editor, html, text }) {
      console.log('editor change!', editor, html, text)
      this.form.content = html;
    }
  }
}
</script>

<style lang="less">
    .editor-container {
        height: 300px;
        margin-bottom: 40px;
    }
</style>
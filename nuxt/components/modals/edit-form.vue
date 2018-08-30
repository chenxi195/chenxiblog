<template>
    <el-form :model="form">
        <el-form-item label="文章类型" prop="type" :label-width="formLabelWidth">
            <el-select v-model="form.type" placeholder="请选择文章类型">
                <el-option label="前端技术" :value="1"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="文章标题" prop="title" :label-width="formLabelWidth">
            <el-input v-model="form.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="文章内容" prop="content" :label-width="formLabelWidth" class="editor-container">
            <div class="quill-editor" style="height: 300px;overflow-y: auto;"
                 :content="form.content"
                 @change="onEditorChange($event)"
                 @blur="onEditorBlur($event)"
                 @focus="onEditorFocus($event)"
                 @ready="onEditorReady($event)"
                 v-quill:myQuillEditor="editorOption">
            </div>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
  props: {
    data: [Object]
  },
  data () {
    return {
      editorOption: {
        modules: {
          toolbar: [
            [{ 'size': ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'color': [] }]
          ]
        }
      },
      formLabelWidth: '80px',
      form: {
        type: this.data.type || 1,
        title: this.data.title || '',
        content: this.data.content || '',
        id: this.data.id || null
      }
    }
  },
  methods: {
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
        .ql-size {
            height: auto !important;
        }
        .ql-color {
            height: 36px;
        }
    }
</style>
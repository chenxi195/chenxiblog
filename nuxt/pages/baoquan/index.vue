<template>
<div>
    <iframe src="http://baidu.com" class="iframe" id="iframe" frameborder="0" height="400px" width="100%"></iframe>
    <button @click="screenShot">click me</button>
</div>
</template>
<script>
  import html2canvas from 'html2canvas';
  export default {
    mounted () {
      var iFrameDom = document.getElementById('iframe');
      iFrameDom.onload = function () {
//        html2canvas(document.body).then(function(canvas) {
//          iFrameDom.style.display = 'none';
//          document.body.appendChild(canvas);
//        });
      };

    },
    methods: {
      screenShot () {
        var iFrameDom = document.getElementById('iframe');
        html2canvas(document.body).then(function(canvas) {
          iFrameDom.style.display = 'none';
          document.body.appendChild(canvas);
        });
      }
    }
  }
</script>

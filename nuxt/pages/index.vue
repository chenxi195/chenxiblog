<template>
    <div>
        <header class="header">
            <div class="container">
                <a href="/"><img class="profile-image img-responsive pull-left" src="/img/blog-logo.jpg" alt="James Lee" /></a>
                <div class="profile-content pull-left">
                    <h1 class="name"><a href="/">前端茶座</a> </h1>
                    <h2 class="desc">前端开发工程师的技术博客</h2>
                    <!--<ul class="social list-inline">-->
                        <!--<li><a href="#"><i class="fa fa-twitter"></i></a></li>-->
                        <!--<li><a href="#"><i class="fa fa-google-plus"></i></a></li>-->
                        <!--<li><a href="#"><i class="fa fa-linkedin"></i></a></li>-->
                        <!--<li><a href="#"><i class="fa fa-github-alt"></i></a></li>-->
                        <!--<li class="last-item"><a href="#"><i class="fa fa-hacker-news"></i></a></li>-->
                    <!--</ul>-->
                </div><!--//profile-->
                <!--<el-button type="success" class="btn pull-right"><i class="fa fa-paper-plane"></i> Contact Me</el-button>-->
            </div>
        </header>
        <div class="container sections-wrapper">
            <nuxt/>
        </div>
        <footer class="footer">
            <div class="container text-center">
                <small class="copyright">Developed by <a href="https://github.com/chenxi195" target="_blank">chenxi195</a> 京ICP备15003189号-1</small>
            </div>
        </footer>
    </div>
</template>

<script>
 export default {
   head: {
     style: [
       { cssText: 'body { background-color: #DAE3E7 }', type: 'text/css' }
     ]
   }
 }
</script>

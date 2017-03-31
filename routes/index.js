
/*
 * GET home page.
 */
var express = require('express');
var router = express.Router();
var controller = require('../controllers');
var fs = require('fs');

global.Vue = require('vue');


// 获取HTML布局
var layout = fs.readFileSync('views/index.html', 'utf8')

// 创建一个渲染器
var renderer = require('vue-server-renderer').createRenderer();



router.get('/',  function indexView(req, res) {

    renderer.renderToString(
            // 创建一个应用实例
            require('../public/test')(),
            // 处理渲染结果
            function (error, html) {
                // 如果渲染时发生了错误
                if (error) {
                    // 打印错误到控制台
                    console.error(error)
                    // 告诉客户端错误
                    return res
                            .status(500)
                            .send('Server Error')
                }
                // 发送布局和HTML文件
                res.send(layout.replace('<div id="app"></div>', html))
            }
    )

});





module.exports = router;
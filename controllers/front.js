/**
 * Created by chenxi on 14-7-28.
 */
'use strict';

var ProfileProxy = require("../proxy/profile").ProfileProxy;
var ArticleProxy = require("../proxy/article").ArticleProxy;

function indexView(req, res, next) {
  res.render('front/index', { title: 'chenxiblog', layout: 'front/inc/layout.html'});
}

function aboutView(req, res, next) {
  res.render('about', { title: 'about', layout: 'front/inc/layout.html'});
}

function materialView(req, res, next) {
  res.render('material', { title: 'material', layout: 'front/inc/layout.html'});
}

function wcList(req, res, next){
    var page = req.query.page || 1;
    console.log('xxxxxxxx')
    console.log(page)
    var data = {
        "s": "true",
        "e": "false",
        "p": page,
        "pl": 5,
        "n": 10,
        "l": [
            {
                "uo": {
                    "i": "504596",
                    "n": "阿正音乐传媒",
                    "a": "1431077924248068.png",
                    "v": "m10"
                },
                "uf": {
                    "i": "",
                    "n": "",
                    "a": ""
                },
                "b": {
                    "i": 504557,
                    "fi": 504557,
                    "ty": false,
                    "ti": "Gary传媒",
                    "co": "原创歌曲歌词创作能人兼歌手 专业制作 Mc麦词 流行歌曲 说唱歌曲词，根据您的要求制作。词180/一首。商演 计时160/小时，包场四小时内430 。承接福建地区商演 联系电话15060825346 阿正。",
                    "av": "",
                    "am": "",
                    "ai": "7/0/a/8/5/70a854c9a0c187aacd26cd5e4c494391_app.jpg",
                    "ctag": "求职",
                    "tag": "音乐制作",
                    "t": "05-08",
                    "w": 0,
                    "mw": false,
                    "f": 0,
                    "mf": false,
                    "r": 0
                }
            },
            {
                "uo": {
                    "i": "503755",
                    "n": "特技小王子",
                    "a": "1429153738263174.png",
                    "v": "m10"
                },
                "uf": {
                    "i": "",
                    "n": "",
                    "a": ""
                },
                "b": {
                    "i": 504556,
                    "fi": 504556,
                    "ty": false,
                    "ti": "夜场嘉宾 特技小刘",
                    "co": "找场 需要的快快联系 本人 特技 拥有最新节目",
                    "av": "",
                    "am": "",
                    "ai": "b/f/b/c/2/bfbc2501cb21296e0ea7b787461a3f6e_app.jpg",
                    "ctag": "求职",
                    "tag": "夜店路演",
                    "t": "05-08",
                    "w": 0,
                    "mw": false,
                    "f": 0,
                    "mf": false,
                    "r": 0
                }
            },
            {
                "uo": {
                    "i": "504595",
                    "n": "冷寒雪",
                    "a": "1431074667992309.png",
                    "v": "f10"
                },
                "uf": {
                    "i": "",
                    "n": "",
                    "a": ""
                },
                "b": {
                    "i": 504549,
                    "fi": 504549,
                    "ty": false,
                    "ti": "礼仪兼职",
                    "co": "找一个山西省太原市的礼仪兼职或者寒暑假兼职",
                    "av": "",
                    "am": "",
                    "ai": "",
                    "ctag": "求职",
                    "tag": "模特",
                    "t": "05-08",
                    "w": 0,
                    "mw": false,
                    "f": 0,
                    "mf": false,
                    "r": 0
                }
            },
            {
                "uo": {
                    "i": "504594",
                    "n": "雨亭风",
                    "a": "1431072816379244.png",
                    "v": "f10"
                },
                "uf": {
                    "i": "",
                    "n": "",
                    "a": ""
                },
                "b": {
                    "i": 504546,
                    "fi": 504546,
                    "ty": false,
                    "ti": "影视演员",
                    "co": "我很想成为一个真正的演员，能让我的表演带给大家快乐。",
                    "av": "",
                    "am": "",
                    "ai": "e/7/3/b/7/e73b7b05092c1ebd28ebd61cd4fc5585_app.jpg",
                    "ctag": "求职",
                    "tag": "演员",
                    "t": "05-08",
                    "w": 0,
                    "mw": false,
                    "f": 0,
                    "mf": false,
                    "r": 0
                }
            },
            {
                "uo": {
                    "i": "504588",
                    "n": "至尊星光文化",
                    "a": "1431063756969046.png",
                    "v": "f10"
                },
                "uf": {
                    "i": "",
                    "n": "",
                    "a": ""
                },
                "b": {
                    "i": 504522,
                    "fi": 504522,
                    "ty": false,
                    "ti": "开业，庆典，晚会策划！",
                    "co": "深圳至尊星光文化传播有限公司：专业策划礼仪.开业庆典.文艺晚会.舞美工程.欢迎来电预定4007 888 550/",
                    "av": "",
                    "am": "",
                    "ai": "2/7/8/7/f/2787fac4300ec6336b8c1bd03d1f2639_app.jpg",
                    "ctag": "求职",
                    "tag": "节目主持人位艳",
                    "t": "05-08",
                    "w": 0,
                    "mw": false,
                    "f": 0,
                    "mf": false,
                    "r": 0
                }
            },
            {
                "uo": {
                    "i": "504177",
                    "n": "张又龙",
                    "a": "1430729555386413.png",
                    "v": "f10"
                },
                "uf": {
                    "i": "",
                    "n": "",
                    "a": ""
                },
                "b": {
                    "i": 504481,
                    "fi": 504481,
                    "ty": false,
                    "ti": "向阳花组合",
                    "co": "爵士新民歌组合",
                    "av": "",
                    "am": "",
                    "ai": "a/5/8/a/1/a58a10ea9ba2d037d8f4ccd3d743edff_app.jpg",
                    "ctag": "求职",
                    "tag": "乐团组合",
                    "t": "05-07",
                    "w": 0,
                    "mw": false,
                    "f": 0,
                    "mf": false,
                    "r": 0
                }
            },
            {
                "uo": {
                    "i": "400058",
                    "n": "李明泽",
                    "a": "4be988d4b529f165a982e6681ff3fe9c.png",
                    "v": "10"
                },
                "uf": {
                    "i": "",
                    "n": "",
                    "a": ""
                },
                "b": {
                    "i": 504478,
                    "fi": 504478,
                    "ty": false,
                    "ti": "多年经验女演员",
                    "co": "身 高： 170CM 体 重： 48KG 特 长： 播音 英文 国际舞 毕业院校： 北京电影学院08级 联系电话：18611776041",
                    "av": "",
                    "am": "",
                    "ai": "",
                    "ctag": "求职",
                    "tag": "演员",
                    "t": "05-07",
                    "w": 1,
                    "mw": false,
                    "f": 0,
                    "mf": false,
                    "r": 0
                }
            },
            {
                "uo": {
                    "i": "400055",
                    "n": "马浩",
                    "a": "93ab3f620d30eb59f3541ed88c282fd3.png",
                    "v": "10"
                },
                "uf": {
                    "i": "",
                    "n": "",
                    "a": ""
                },
                "b": {
                    "i": 504477,
                    "fi": 504477,
                    "ty": false,
                    "ti": "15岁小演员求职",
                    "co": "电话18611062520.",
                    "av": "",
                    "am": "",
                    "ai": "",
                    "ctag": "求职",
                    "tag": "演员",
                    "t": "05-07",
                    "w": 0,
                    "mw": false,
                    "f": 0,
                    "mf": false,
                    "r": 0
                }
            },
            {
                "uo": {
                    "i": "504571",
                    "n": "胡锐",
                    "a": "1430973459562661.png",
                    "v": "m10"
                },
                "uf": {
                    "i": "",
                    "n": "",
                    "a": ""
                },
                "b": {
                    "i": 504447,
                    "fi": 504447,
                    "ty": false,
                    "ti": "本人有许多原创音乐作品！需要与我联系",
                    "co": "本人有上百首原创音乐音乐作品，有需要朋友和公司可以和我联系！联系电话13981763548微信：619549522",
                    "av": "",
                    "am": "",
                    "ai": "2/8/5/9/b/2859b6eafb51fdcb47c52d08f18891f0_app.jpg",
                    "ctag": "求职",
                    "tag": "音乐制作",
                    "t": "05-07",
                    "w": 2,
                    "mw": false,
                    "f": 0,
                    "mf": false,
                    "r": 0
                }
            },
            {
                "uo": {
                    "i": "503983",
                    "n": "coco",
                    "a": "1430104051641378.png",
                    "v": "f10"
                },
                "uf": {
                    "i": "",
                    "n": "",
                    "a": ""
                },
                "b": {
                    "i": 504445,
                    "fi": 504445,
                    "ty": false,
                    "ti": "第三季好声音汪峰组人气学员由美",
                    "co": "15877558705，一手价格，夜店，商演，代言，欢迎咨询",
                    "av": "",
                    "am": "",
                    "ai": "c/b/9/d/2/cb9d2efb29a7a50ef239db1f47db329f_app.jpg",
                    "ctag": "求职",
                    "tag": "歌手",
                    "t": "05-07",
                    "w": 0,
                    "mw": false,
                    "f": 0,
                    "mf": false,
                    "r": 1
                }
            }
        ],
        "t": 1432706117,
        "g": "true"
    }
    res.json(data)
}


function postList(req, res, next){
	var data = {
		userC: {
			isGm: false, //是否是GM
			isUnactive: false, //是否是注销用户
			isNewbie: false, //是否是新注册未填资料的用户
			memberLevelId: null, //用户的会员等级
			type: 1 //用户类型
		},
		msgCount: {
			newLike: 10, //新的like数
			newFollower: 4, //新粉丝数
			newFriends: 1, //新好友数
			newMention: 5, //新at数
			newComment: 10, //新评论数
			newEventInvite: 0 //新活动邀请数
		},
		statusCode: 0, // 0操作成功/1失败/-1出现错误
		statusMsgs: ["操作提示信息", "..."],
		data: { //具体的返回值(当前页面需要显示的数据)
			ThisViewLink: 'postController',
			ctx: {  //返回值
				postList: [{
					id: null,
					fromUid: null, //发布者uid
					fromName: '神秘人', //发布者昵称
					fromDate: '04-09',//发布时间
					fromDevice: 'iphone', //从某设备发布
					fromLocation: '北京市', //发布地点
					avatar: 'http://b.hiphotos.baidu.com/image/pic/item/dc54564e9258d109bac8045cd558ccbf6c814d30.jpg', //头像
					title: '这是一个很长很长的标题', //标题
					content: '这是什么鬼这是什么鬼~', //内容
					images: [
						'http://d.hiphotos.baidu.com/image/w%3D230/sign=838187eeed24b899de3c7e3b5e041d59/f31fbe096b63f624c0d994ed8344ebf81b4ca35c.jpg',
						'http://d.hiphotos.baidu.com/image/w%3D230/sign=838187eeed24b899de3c7e3b5e041d59/f31fbe096b63f624c0d994ed8344ebf81b4ca35c.jpg',
						'http://d.hiphotos.baidu.com/image/w%3D230/sign=838187eeed24b899de3c7e3b5e041d59/f31fbe096b63f624c0d994ed8344ebf81b4ca35c.jpg',
						'http://d.hiphotos.baidu.com/image/w%3D230/sign=838187eeed24b899de3c7e3b5e041d59/f31fbe096b63f624c0d994ed8344ebf81b4ca35c.jpg'
					],  //图片们
					memberLevelIds: null,  //某些会员等级用户可见，如实名可见
					type: 1, //类型
					topic: 'ych', //所属主题
					viewerCount: 400, //查看数
					repostCount: 24, //转发数
					commentCount: 55, //评论数
					likeCount: 50,  //被赞数
					relateUid: null, //关联的uid
					relateUserName: '梅大姐', //关联的u名字
					relateId: null, //关联的id
					relateType: 1, //关联的类型
					startDate: '04-05', //开始日期
					endDate: '05-04', //结束日期
					where: '朝阳门', //工作地点/活动地点
					pay: '5000', //酬金
					relatePost: null //（是一条post）
				},{
					id: null,
					fromUid: null, //发布者uid
					fromName: '神秘人', //发布者昵称
					fromDate: '04-09',//发布时间
					fromDevice: 'iphone', //从某设备发布
					fromLocation: '北京市', //发布地点
					avatar: 'http://b.hiphotos.baidu.com/image/pic/item/dc54564e9258d109bac8045cd558ccbf6c814d30.jpg', //头像
					title: '这是一个很长很长的标题', //标题
					content: '这是什么鬼这是什么鬼~', //内容
					images: [
						'http://d.hiphotos.baidu.com/image/w%3D230/sign=838187eeed24b899de3c7e3b5e041d59/f31fbe096b63f624c0d994ed8344ebf81b4ca35c.jpg',
						'http://d.hiphotos.baidu.com/image/w%3D230/sign=838187eeed24b899de3c7e3b5e041d59/f31fbe096b63f624c0d994ed8344ebf81b4ca35c.jpg',
						'http://d.hiphotos.baidu.com/image/w%3D230/sign=838187eeed24b899de3c7e3b5e041d59/f31fbe096b63f624c0d994ed8344ebf81b4ca35c.jpg',
						'http://d.hiphotos.baidu.com/image/w%3D230/sign=838187eeed24b899de3c7e3b5e041d59/f31fbe096b63f624c0d994ed8344ebf81b4ca35c.jpg'
					],  //图片们
					memberLevelIds: null,  //某些会员等级用户可见，如实名可见
					type: 1, //类型
					topic: 'ych', //所属主题
					viewerCount: 400, //查看数
					repostCount: 24, //转发数
					commentCount: 55, //评论数
					likeCount: 50,  //被赞数
					relateUid: null, //关联的uid
					relateUserName: '梅大姐', //关联的u名字
					relateId: null, //关联的id
					relateType: 1, //关联的类型
					startDate: '04-05', //开始日期
					endDate: '05-04', //结束日期
					where: '朝阳门', //工作地点/活动地点
					pay: '5000', //酬金
					relatePost: null //（是一条post）
				},{
					id: null,
					fromUid: null, //发布者uid
					fromName: '神秘人', //发布者昵称
					fromDate: '04-09',//发布时间
					fromDevice: 'iphone', //从某设备发布
					fromLocation: '北京市', //发布地点
					avatar: 'http://b.hiphotos.baidu.com/image/pic/item/dc54564e9258d109bac8045cd558ccbf6c814d30.jpg', //头像
					title: '这是一个很长很长的标题', //标题
					content: '这是什么鬼这是什么鬼~', //内容
					images: [
						'http://d.hiphotos.baidu.com/image/w%3D230/sign=838187eeed24b899de3c7e3b5e041d59/f31fbe096b63f624c0d994ed8344ebf81b4ca35c.jpg',
						'http://d.hiphotos.baidu.com/image/w%3D230/sign=838187eeed24b899de3c7e3b5e041d59/f31fbe096b63f624c0d994ed8344ebf81b4ca35c.jpg',
						'http://d.hiphotos.baidu.com/image/w%3D230/sign=838187eeed24b899de3c7e3b5e041d59/f31fbe096b63f624c0d994ed8344ebf81b4ca35c.jpg',
						'http://d.hiphotos.baidu.com/image/w%3D230/sign=838187eeed24b899de3c7e3b5e041d59/f31fbe096b63f624c0d994ed8344ebf81b4ca35c.jpg'
					],  //图片们
					memberLevelIds: null,  //某些会员等级用户可见，如实名可见
					type: 1, //类型
					topic: 'ych', //所属主题
					viewerCount: 400, //查看数
					repostCount: 24, //转发数
					commentCount: 55, //评论数
					likeCount: 50,  //被赞数
					relateUid: null, //关联的uid
					relateUserName: '梅大姐', //关联的u名字
					relateId: null, //关联的id
					relateType: 1, //关联的类型
					startDate: '04-05', //开始日期
					endDate: '05-04', //结束日期
					where: '朝阳门', //工作地点/活动地点
					pay: '5000', //酬金
					relatePost: null //（是一条post）
				}]
			}
		}
	}

	res.json(data)
}




exports.indexView = indexView;
exports.aboutView = aboutView;
exports.materialView = materialView;
exports.wcList = wcList;
exports.postList = postList;
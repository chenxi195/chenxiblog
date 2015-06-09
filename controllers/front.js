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


function postInfo(req, res, next){
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
        postDetail: {
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
        }
      }
    }
  };
  res.json(data);
}

function userList(req, res, next){
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
        userList: [
          {
            uid: "1",
            nickName: "nickName-1",
            intro: "intro 1",
            avatar: "imageUrl-1"
          },
          {
            uid: "2",
            nickName: "nickName-2",
            intro: "intro 2",
            avatar: "imageUrl-2"
          },
          {
            uid: "3",
            nickName: "nickName-3",
            intro: "intro 3",
            avatar: "imageUrl-3"
          }
        ]
      }
    }
  }
  res.json(data);
}

function jobType(req, res, next){
  var data = {
    items: [
      {
        id: 1,
        title: "演员",
        subItems: [
          {
            id: 11,
            title: "女演员"
          },
          {
            id: 12,
            title: "男演员"
          }
        ]
      },
      {
        id: 2,
        title: "导演",
        subItems: [
          {
            id: 21,
            title: "胖导演"
          },
          {
            id: 22,
            title: "瘦导演"
          }
        ]
      }
    ]
  }
  res.json(data);
}

function userDetail(req, res, next){
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
        user: {
          isGm: false,
          isUnactive: false,
          isNewbie: false,
          newbieStepId: 1,
          signUpDate: '04-09',
          type: 2, //用户类型 目前是：机构、个人 -- 扩展：粉丝、媒体、营销、演员、经纪人、etc
          job: '歌手',//职业名称
          nickName: '小凤仙', //昵称
          intro: '这是个奇葩的人物', //个人签名
          description: '这是一段自我描述', //简介 自我介绍/职业经历/业务介绍
          gender: 'male', //性别
          regin: '北京市', //所在地
          avatar: '',  //头像图片id
          backgroundImage: '', //背景图片
          award: '', //获得奖项 文本
          workFromYear: '', //工作起始年份
          postCount: 50, //我发表的Post总数
          followCount: 300, //我关注的人的总数
          userSP: {},
          memberLevelId: 2, //用户等级
          viewerCount: 30, //被查看的次数
          followerCount: 200 //粉丝数
        }
      }
    }
  }
  res.json(data);
}

exports.indexView = indexView;
exports.aboutView = aboutView;
exports.materialView = materialView;
exports.postList = postList;
exports.postInfo = postInfo;
exports.userList = userList;
exports.jobType = jobType;
exports.userDetail = userDetail;

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
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Page", {
    title: {
      type: DataTypes.STRING,
      comment: '标题'
    },
    summary: {
      type: DataTypes.STRING,
      comment: '概述'
    },
    img: {
      type: DataTypes.STRING,
      comment: '封面图'
    },
    type: {
      type:DataTypes.BIGINT(11),
      defaultValue: 1,
      comment: '1-Nodejs 2-Javascript & jQuery & MVVM 3-HTML5, CSS3, SASS & LESS 4-Others'
    },
    top: {
      type: DataTypes.BIGINT(11),
      defaultValue: 1,
      comment: '是否置顶 1否 2是'
    },
    status: {
      type:DataTypes.BIGINT(11),
      defaultValue: 1,
      comment: '1 正常展示 2 删除'
    },
    content: {
      type: DataTypes.TEXT('long'),
      comment: '文章内容'
    }
  })
};
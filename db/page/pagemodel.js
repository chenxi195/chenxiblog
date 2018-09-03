module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Page", {
    title: {
      type: DataTypes.STRING,
      comment: '标题'
    },
    type: {
      type:DataTypes.BIGINT(11),
      defaultValue: 1,
      comment: '类型'
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
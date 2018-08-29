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
    }
  })
};
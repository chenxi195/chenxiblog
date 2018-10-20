module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Qz", {
    id: {
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey : true,
      unique : true
    },
    no: {
      type: DataTypes.STRING,
      comment: '保全证书编码'
    },
    title: {
      type: DataTypes.STRING,
      comment: '标题'
    },
    ip: {
      type: DataTypes.STRING,
      comment: 'ip'
    },
    beian: {
      type: DataTypes.STRING,
      comment: '备案号'
    },
    browser: {
      type: DataTypes.STRING,
      comment: '浏览器'
    },
    url: {
      type: DataTypes.STRING,
      comment: '取证网址'
    },
    imgUrl: {
      type: DataTypes.STRING,
      comment: '封面图'
    },
    status: {
      type: DataTypes.STRING,
      comment: '封面图'
    },
    zjname: {
      type: DataTypes.STRING,
      comment: '证据名称'
    },
    desc: {
      type: DataTypes.STRING,
      comment: '内容'
    }
  })
};
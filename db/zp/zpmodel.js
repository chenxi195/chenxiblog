module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Zp", {
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

    imgUrl: {
      type: DataTypes.STRING,
      comment: '封面图'
    },
    status: {
      type: DataTypes.STRING,
      comment: '封面图'
    },
    desc: {
      type: DataTypes.STRING,
      comment: '内容'
    }
  })
};
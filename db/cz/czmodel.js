module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Cz", {
    id: {
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey : true,
      unique : true
    },
    no: {
      type: DataTypes.STRING,
      comment: '保全证书编号'
    },
    origin: {
      type: DataTypes.STRING,
      comment: '来源'
    },
    jiguan: {
      type: DataTypes.STRING,
      comment: '机关'
    },
    type: {
      type: DataTypes.STRING,
      comment: ''
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